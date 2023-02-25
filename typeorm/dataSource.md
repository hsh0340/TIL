# DataSource
Typeorm에서 DataSource는 애플리케이션과 데이터베이스 사이의 연결을 관리하는 추상화 계층이다. DataSource는 애플리케이션에서 데이터베이스에 연결하고, 쿼리를 실행하고, 결과를 처리하는데 사용된다.

일반적으로 DataSource는 데이터베이스에 연결하는데 필요한 정보를 가지고 있다. 예를 들어, 데이터베이스 유형, 호스트, 포트, 사용자 이름, 암호 등이다. 이 정보를 사용하여 DataSource는 데이터베이스와의 연결을 설정하고, 필요에 따라 연결을 유지한다.

TypeORM에서 DataSource는 데이터베이스 연결 설정을 담은 객체를 만들어 생성된다. 이를 ConnectionOptions 라고 한다. ConnectionOptions는 여러가지 속성을 가질 수 있으며, 데이터베이스 연결에 필요한 정보를 포함한다. 예를 들면, 다음과 같은 것들이 있다.

- type: 데이터베이스 유형 (예: MySQL, PostgreSQL, SQLite)
- host: 데이터베이스 호스트 주소
- port: 데이터베이스 포트
- username: 데이터베이스 사용자 이름
- password: 데이터베이스 사용자 비밀번호
- database: 데이터베이스 이름
- entities: TypeORM 엔티티의 배열
- synchronize: 엔티티와 데이터베이스 스키마의 동기화 여부

DataSource는 TypeORM에서 사용되는 다양한 데이터베이스 연결 드라이버 중 하나를 사용하여 데이터베이스와의 연결을 설정한다. 예를 들어, MySQL 데이터베이스를 사용하는 경우 mysql2 드라이버를 사용할 수 있다. 이 드라이버는 DataSource 객체가 생성될 때 자동으로 로드된다.

DataSource는 TypeORM에서 중요한 역할을 한다. 데이터베이스 연결 설정을 담은 ConnectionOptions 객체를 사용하여 데이터베이스와의 연결을 설정하고, 데이터베이스에 쿼리를 실행하며, 결과를 처리한다.