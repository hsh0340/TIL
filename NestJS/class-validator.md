# class-validator
service에서 validate 하지 않고 entity에서 할 수 있다.

## 설치
```bash
$ npm i class-validator class-transformer
```
## Users.ts
```typescript
export class Users {
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