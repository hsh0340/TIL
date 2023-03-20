# 소셜 로그인 구현

3월 20일 진행상황 ~.~

## Controller
```typescript
 // 카카오 로그인
  // 여기서 사용자가 id/pw를 입력하면 인증 서버에서 authorization code 발급
  @ApiOperation({ summary: '카카오 로그인' })
  @Get('/kakao')
  @UseGuards(AuthGuard('kakao'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async kakaoLogin() {}

  // 카카오 로그인 callback
  // 동의하면 access Token, refresh Token 발급
  @ApiKakaoLogin()
  @Get('/kakao/callback')
  @UseInterceptors(TransactionInterceptor)
  @UseGuards(AuthGuard('kakao'))
  async kakaoLoginRedirect(
    @GetUser() email: string,
    @Query('userType') userType: string,
    @TransactionManager() queryRunnerManager: EntityManager,
    @Req() req: Request,
  ): Promise<APIResponse> {
    const user: User = await this.authService.kakaoLogin(
      email,
      req,
      queryRunnerManager,
    );

    return { msg: '카카오 계정으로 로그인 되었습니다.', response: { user } };
  }
```

## Service
```typescript
async kakaoLogin(
    email: string,
    req: Request,
    queryRunnerManager: EntityManager,
  ): Promise<User> {
    // 회원 찾고, 없으면 db에 카카오 서버에서 return한 온 이메일을 db에 저장한다.
    const user: User = await this.createOrGetUser(email, queryRunnerManager);

    // 1. 이 회원이 회원가입이 끝난 회원인지 확인한다.(성별 유무로 판단)
    const loginUser = await this.validateUserByGender(
      user.applicantId,
      queryRunnerManager,
    );

    // 회원가입이 끝나지 않았다면, 예외를 던진다. -> client 단에서 회원가입 페이지로 redirect
    if (!loginUser.applicantGender) {
      // req에 email을 담아주자
      req.headers['email'] = email;
      throw new UnauthorizedException(
        '회원가입이 완료되지 않은 사용자 입니다.',
      );
    }

    // 2. 이메일 계정을 사용중인지 확인한다.(비밀번호 유무)
    const userAuthentication = await this.isEmailUser(
      user.applicantId,
      queryRunnerManager,
    );

    // 이메일 계정을 사용중이라면, 예외를 던진다.
    if (userAuthentication.passwordSalt) {
      throw new UnauthorizedException('이메일 로그인 계정이 이미 존재합니다.');
    }

    return await this.issueToken(user, queryRunnerManager);
  }
```
