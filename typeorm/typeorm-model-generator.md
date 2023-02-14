# typeorm model generator
- DB에 있는 테이블을 entity 파일로 만들어주는 라이브러리

## 설치
```bash
$ npm i typeorm-model-generator -D
```

## 실행
```bash
$ npx typeorm-model-generator -h [host] -d [database] -u [user] -x [password] -e [database]
```
### PostgreSQL 인 경우
```bash
$ npx typeorm-model-generator -h [host] -d [database] -s [schema] -u [user] -x [password] -e [database]
```