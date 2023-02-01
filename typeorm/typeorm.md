# typeorm
> " TypeORM은 Node.js, Browser, React Native 플랫폼 등에서 JS,TS와 함께 사용할 수 있는 ORM입니다. 소규모 데이터베이스부터 대규모 엔터프라이즈 어플리케이션을 개발하는데 도움이 되는 추가 기능을 제공하는 것을 목표로 합니다. 다른 ORM과 달리 액티브 레코드 패턴과 데이터 매퍼 패턴을 모두 지원하여 확장 가능하며 유지보수가 가능한 어플리케이션을 가장 생산적인 방법으로 작성할 수 있습니다. "

## 설치
```bash
$ npm install --save @nestjs/typeorm typeorm pg
```

## app.module.ts 수정
```typescript
@Module({
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [Advertisers],
        synchronize: true,
        logging: true,
        keepConnectionAlive: true,
    }),
})
```