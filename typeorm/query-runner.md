# QueryRunner
## QueryRunner란?
TypeORM의 connection은 기본적으로 connection pool을 만들어 사용한다. RDBMS가 connection pooling을 지원하는 경우, 각각의 새 QueryRunner 인스턴스는 connection pool에서 single connection을 가진다. connection pool을 지원하지 않는 데이터베이스의 경우 데이터 원본 간에 동일한 connection을 사용한다. 실제 단일 데이터베이스 커넥션을 따로 만들어서 좀 더 세부적으로 트랜잭션을 관리하고 싶다면 QueryRunner를 사용할 수 있다.

## Creating a new QueryRunner instance