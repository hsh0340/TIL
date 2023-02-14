# 내가 겪은 에러들
### relation pk already exists

- 원인: 한 데이터베이스 안에서 public schema와 test schema 각각에 똑같은 테이블을 만들었다.
- 해결 방법: test schema에 있는 테이블을 사용하기 위해 public schema에 있는 테이블을 drop 했다.
  (https://stackoverflow.com/questions/15705838/relation-pk-already-exists-in-postgresql-9-1)

### EntityMetadataNotFoundError

- 해결 방법: module에 entity를 등록

### typeorm-model-generator error

- 해결 방법: model generator 명령어에 -s로 스키마를 추가해주었다.