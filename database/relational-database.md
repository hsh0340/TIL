# Relational Database
> relational data model에 기반하여 구조화 된 database

- relation database는 여러개의 relations로 구성됨

| 주요개념          | 설명                                          |
|---------------|---------------------------------------------|
| domain        | set of atomic values                        |
| domain name   | domain 이름                                   |
| attribute     | domain이 relation에서 맡은 역할 이름                 |
| tuple         | 각 attribute의 값으로 이루어진 리스트, 일부 값은 NULL일 수 있음 |
| relation      | set of tuples                               |
| relation name | relation의 이름                                |

## relation schema
> relation의 구조를 나타냄

- relation 이름과 attribute 리스트로 표기됨
- e.g.) STUDENT(id, name, grade, major, phone_num, emer_phone_num)
- attributes와 관련된 constraint도 포함함

## degree of a relation
> relation schema에서 attributes의 수

- e.g.) STUDENT(id, name, grade, major, phone_num, emer_phone_num) -> degree 6

## relation의 특징들
- relation은 중복된 tuple을 가질 수 없음 (relation is set of tuples)
- relation의 tuple을 식별하기 위해 attribute의 부분 집합을 ```key```로 설정함
- relation에서 tuple의 순서는 중요하지 않음
- 하나의 relation애서 attribute의 이름은 중복되면 안됨
- 하나의 tuple에서 attribute의 순서는 중요하지 않음
- attribute는 atomic 해야 함(composite or multivalued attribute 허용 안됨)

## NULL의 의미
- 값이 존재하지 않음
- 값이 존재하나 아직 그 값이 무엇인지 알지 못함
- 해당 사항과 관련이 없음

## super key
> relation에서 tuple을 unique하게 식별할 수 있는 attributes set

- e.g.) PLAYER(id, name, team_id, back_number, birth_date)의 super key는 {id, name, team_id, back_number, birth_date}, {id, name}, {name, team_id, back_number}, ... etc

## candidate key
> 어느 한 attribute라도 제거하면 unique하게 tuples를 식별할 수 없는 super key<br>
> key or minimum super key

- e.g.) PLAYER(id, name, team_id, back_number, birth_date)의 candidate key는 {id}, {team_id, back_number}

## primary key
> relation에서 tuples를 unique하게 식별하기 위해 선택된 candidate key

- e.g.) PLAYER(id, name, team_id, back_number, birth_date)의 primary key는 {id} or {team_id, back_number}

## unique key
> primary key가 아닌 candidate keys<br>
> alternate key

- e.g.) PLAYER(id, name, team_id, back_number, birth_date)의 unique key는 {team_id, back_number}

## foreign key
> 다른 relation의 pk를 참조하는 attributes set

- e.g.) PLAYER(id, name, team_id, back_number, birth_date)와 TEAM(id, name, manager)가 있을 때 foreign key는 PLAYER의 {team_id}

## constraints
> relational database에서 relations들이 언제나 항상 지켜줘야 하는 제약사항

### implicit constraints
- relational data model 자체가 가지는 constraints
- relation은 중복되는 tuple을 가질 수 없음
- relation 내에서는 같은 이름의 attributes를 가질 수 없음

### schema-based constraints
> 주로 DDL을 통해 schema에 직접 명시할 수 있는 constraints
> explicit constraints

- domain constraints
  - attribute의 value는 해당 attribute의 domain에 속한 value여야 함
- key constraints
  - 서로 다른 tuples는 같은 value의 key를 가질 수 없음
- NULL value constraint
  - attribute가 NOT NULL로 명시됐다면 NULL을 값으로 가질 수 없음
- entity integrity constraint
  - primary key는 value에 null을 가질 수 없음
- referential integrity constraint
  - FK와 PK와 도메인이 같아야 하고 PK에 없는 values를 FK가 값으로 가질 수 없음