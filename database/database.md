# 데이터베이스 개론

## database(DB)
> 전자적으로(electronically) 저장되고 사용되는 관련있는 데이터들의 조직화 된 집합(organized collection)

- 관련있는 데이터: 같은 출처나 같은 목적, 같은 서비스 아래에서 생성되는 데이터
- 조직화: 내가 찾으려는 데이터들을 빠르게 찾을 수 있고, 데이터가 중복되는 것을 방지할 수 있으며, 데이터의 불일치를 막을 수 있음

## DBMS(DataBase Management Systems)
> 사용자에게 DB를 정의하고 만들고 관리하는 기능을 제공하는 소프트웨어 시스템

- postgresql, mysql, oracle, sql server 등이 있음
- DB를 정의하다 보면 부가적인 데이터(metadata)가 발생함

## metadata
> database를 정의하거나 기술하는 data

- catalog 라고도 부름
- e.g.) 데이터 유형, 구조, 제약 조건, 보안, 저장, 인덱스, 사용자 그룹 등등
- metadata 또한 DBMS를 통해서 저장/관리 됨

## database system
> database + DBMS + 연관된 applications<br>
> 줄여서 database라고도 부름

![스크린샷 2023-02-13 오전 11 24 35](https://user-images.githubusercontent.com/73820746/218356825-267a7840-fc2f-4d65-922a-e1caf1a2f240.png)

## data models
> DB의 구조(structure)를 기술하는데 사용될 수 있는 개념들이 모인 집합

- DB 구조를 추상화해서 표현할 수 있는 수단을 제공
  - DB 구조: 데이터 유형, 데이터 관계(relationship), 제약사항(constraints) 등
- data model은 여러 종류가 있으며 추상화 수준과 DB 구조화 방식이 조금씩 다름
- DB에서 읽고 쓰기 위한 기본적인 동작들(operations)도 포함됨
### data models 분류
  - conceptual (or high-level) data models
    - 일반 사용자들이 쉽게 이해할 수 있는 개념들로 이루어진 모델
    - 추상화 수준이 가장 높음
    - 비즈니스 요구 사항을 추상화하여 기술할 때 사용
    - ![스크린샷 2023-02-13 오전 11 34 24](https://user-images.githubusercontent.com/73820746/218357719-46969ee9-fc14-45ec-bc91-a0ec53b6b715.png)
  
  - logical (or representational) data models
    - 이해하기 어렵지 않으면서도 디테일하게 DB를 구조화 할 수 있는 개념들을 제공
    - 데이터가 컴퓨터에 저장될 때의 구조와 크게 다르지 않게 DB 구조화를 가능하게 함
    - 특정 DBMS나 storage에 종속되지 않는 수준에서 DB를 구조화할 수 있는 모델
    - ![스크린샷 2023-02-13 오전 11 38 27](https://user-images.githubusercontent.com/73820746/218358177-3c350579-b12c-473e-a19e-3490d8e342e4.png)
    - 여러가지 데이터 모델이 있는데 relational data model이 대표적임
    - postgresql은 objective-relational data model
    
  - physical (or low-level) data models
    - 컴퓨터에 데이터가 어떻게 파일형태로 저장되는지를 기술할 수 있는 수단을 제공
    - data format, data orderings, access path 등
    - access path: 데이터 검색을 빠르게 하기 위한 구조체, e.g.) index
    
## database schema
> data model을 바탕으로 database의 구조를 기술(description)한 것

- schema는 database를 설계할 때 정해지며 한 번 정해진 후에는 자주 바뀌지 않음

## database state
> 특정 시점에 database에 있는 데이터를 database state 혹은 snapshot 이라고 함<br>
> 혹은 database에 있는 현재 instances의 집합이라고도 함

- database에 있는 실제 데이터는 꽤 자주 바뀔 수 있음

## three-schema architecture
> 각 레벨을 독립시켜서 어느 레벨에서의 변화가 상위 레벨에 영향을 주지 않기 위한 architecture
- database system을 구축하는 architecture 중의 하나
- user application으로 부터 물리적인(physical) database를 분리시키는 목적
- 세 가지 level이 존재하며 각각의 level 마다 schema가 정의되어 있음
- 대부분의 DBMS가 three level을 완벽하게 혹은 명시적으로 나누지는 않음
- 데이터가 존재하는 곳은 internal level

### three-schema level
- external schemas(or user views) at external (or view) level
  - external views, user views 라고도 불림
  - 특정 유저들이 필요로 하는 데이터만 표현, 그 외 알려줄 필요가 없는 데이터는 숨김
  - logical data model을 통해 표현
- conceptual schemas at conceptual level
  - 전체 database에 대한 구조를 기술
  - 물리적인 저장 구조에 관한 내용은 숨김
  - entities, data types, relationships, user operations, constraints에 집중
  - logical data model을 통해 기술
- internal schemas at internal level
  - 물리적으로 데이터가 어떻게 저장되는지 pysical data model을 통해 표현
  - data storage, data structure, access path 등 실체가 있는 내용 기술

## Database Language
- 오늘날의 DBMS는 DML, VDL, DDL이 따로 존재하기 보다는 통합된 언어로 존재
- 대표적인 예가 relational database language : SQL

### data defenition language(DDL)
- conceptual schema를 정의하기 위해 사용되는 언어
- internal schema까지 정의할 수 있는 경우도 있음
 
### storage definition language(SDL)
- internal schema를 정의하는 용도로 사용되는 언어
- 요즘은 특히 relational DBMS에서는 SDL이 거의 없고 파라미터 등의 설젇으로 대체됨

### view definition language(VDL)
- external schemas를 정의하기 위해 사용되는 언어
- 대부분의 DBMS에서는 DDL이 VDL 역할까지 수행

### data manipulation language(DML)
- database에 있는 data를 활용하기 위한 언어
- data 추가, 삭제, 수정, 검색 등등의 기능을 제공하는 언어

