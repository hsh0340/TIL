# class-validator
DTO를 통해 데이터를 전달할 때, 데이터들의 유효성을 검사하는 용도로 사용한다.

## 설치
```bash
$ npm i class-validator class-transformer
```
## Users.ts
```typescript
export class JoinRequestDto {
    @IsNotEmpty()
    @IsEmail()
    @Column('character varying', { primary: true, name: 'email', length: 200 })
    email: string;
}
```
## main.ts
class validator를 사용하기 위해 main.ts에 선언해준다.
```typescript
async function bootstrap() {
    app.useGlobalPipes(new ValidationPipe());
}
```
## 설명
- class-validator가 붙은 dto는 자동으로 검증해줌

## 공식 문서
github.com/typestack/class-validator