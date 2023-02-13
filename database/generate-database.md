# SQL

> Structured Query Language

- 현업에서 쓰이는 relational DBMS의 표준 언어
- 종합적인 database 언어 : DDL + DML + VDL
- 주요 용어

| relational data model | SQL    |
|-----------------------|--------|
| relation              | table  |
| attribute             | column |
| tuple                 | row    |
| domain                | domain |

## SQL에서 relation이란?

- multiset(bag) of tuples @ SQL
- 중복된 tuple을 허용함

## SQL & RDBMS

- SQL은 RDBMS의 표준 언어이지만 실제 구현에 강제가 없기 때문에 RDBMS마다 제공하는 SQL의 스펙이 조금씩 다름

## DATABASE vs SCHEMA

- MySQL에서는 DATABASE와 SCHEMA가 같은 뜻을 의미
- PostgreSQL에서는 SCHEMA가 DATABASE의 namespace를 의미

# 테이블 정의하기

- IT 회사 RDB 만들기
  ![스크린샷 2023-02-13 오후 2 55 41](https://user-images.githubusercontent.com/73820746/218381601-6bc18252-0861-4028-b256-5d0cc2384bf9.png)
  - department: 부서
  - employee: 직원
  - project: 진행하고 있는 프로젝트
  - works_on: 직원들이 어떤 프로젝트를 진행하고 있는지

## CREATE TABLE department

```sql
CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(20) NOT NULL UNIQUE,
  leader_id INT
);
```

### attribute data type: 숫자

<table>
  <tr>
    <th>종류</th>
    <th>설명</th>
    <th>사이즈</th>
    <th>MySQL</th>
  </tr>
  <tr>
    <td rowspan="5">정수</td>
    <td rowspan="5">정수를 저장할 때 사용</td>
    <td>1byte</td>
    <td>TINYINT</td>
  </tr>
  <tr>
    <td>2byte</td>
    <td>SMALLINT</td>
  </tr>
  <tr>
    <td>3byte</td>
    <td>MEDIUMINT</td>
  </tr>
  <tr>
    <td>4byte</td>
    <td>INT or INTEGER</td>
  </tr>
  <tr>
    <td>5byte</td>
    <td>BIGINT</td>
  </tr>
  <tr>
    <td rowspan="2">부동 소수점 방식<br>(floating-point)</td>
    <td rowspan="2">- 실수(real number)를 저장할 때 사용<br>- 고정 소수점 방식에 비해 정확하지 않음</td>
    <td>4byte</td>
    <td>FLOAT</td>
  </tr>
  <tr>
    <td>8byte</td>
    <td>DOUBLE or DOUBLE PRECISION</td>
  </tr>
<tr>
    <td rowspan="2">고정 소수점 방식<br>(fixed-point)</td>
    <td rowspan="2">- 실수를 정확하게 저장할 때 사용<br>- DECIMAL(5,2) => [-999.99 ~ 999.99]</td>
    <td>variable</td>
    <td rowspan="2">DECIMAL or NUMERIC</td>
  </tr>
  <tr>
    <td>variable</td>
  </tr>
</table>

### attribute data type: 문자열

| 종류         | 설명                                                                                 | MySQL                                      |
|------------|------------------------------------------------------------------------------------|--------------------------------------------|
| 고정 크기 문자열  | - 최대 몇 개의 '문자'를 가지는 문자열을 저장할지를 결정<br>- 저장될 문자열의 길이가 최대 길이보다 작으면 나머지를 space로 채워서 저장 | CHAR(n)<br>(0 <= n <= 255)                 |
| 가변 크기 문자열  | - 최대 몇 개의 '문자'를 가지는 문자열을 저장할지를 지정<br>- 저장될 문자열의 길이 만큼만 저장                          | VARCHAR(n)<br>(0 <= n <= 65,535)           |
| 사이즈가 큰 문자열 | - 사이즈가 큰 문자열을 저장할 때 사용                                                             | TINYTEXT<br>TEXT<br>MEDIUMTEXT<br>LONGTEXT |

### attribute data type: 날짜와 시간

<table>
<tr>
<th>종류</th>
<th>설명</th>
<th>MySQL</th>
</tr>
<tr>
<td>날짜</td>
<td>- 년, 월, 일을 저장<br>- YYYY-MM-DD</td>
<td>DATE<br>('1000-01-01' ~ '9999-12-31')</td>
</tr>
<tr>
<td>시간</td>
<td>- 시, 분, 초를 저장<br>- hh:mm:ss or hhh:mm:ss</td>
<td>TIME<br>('-838:59:59' ~ '838:59:59')</td>
</tr>
<tr>
<td rowspan="2">날짜와 시간</td>
<td rowspan="2">- 날짜와 시간을 같이 표현<br>- YYYY-MM-DD hh:mm:ss<br>- TIMESTAMP는 time-zone이 반영됨</td>
<td>DATETIME<br>('1000-01-01 00:00:00' to '9999-12-31 23:59:59')</td>
</tr>
<tr>
<td>TIMESTAMP<br>('1970-01-01' UTC ~ '2038-01-19 03:14:07' UTC)</td>
</tr>
</table>

### attribute data type: 그 외

| 종류          | 설명                                                           | MySQL                            |
|-------------|--------------------------------------------------------------|----------------------------------|
| byte string | (문자열이 아니라) byte string을 저장                                   | BINARY<br>VARBINARY<br>BLOB type |
| boolean     | - true, false를 저장<br>- MySQL에는 따로 없음                         | TINYINT로 대체해서 사용                 |
| 위치 관련       | 위치 관련 정보를 저장                                                 | GEOMETRY<br>etc                  |
| JSON        | - json 형태의 데이터를 저장<br>- e.g.) { "name": "messi", "age": 38 } | JSON                             |

### Key constraints: PRIMARY KEY

- primary key: table의 tuple을 식별하기 위해 사용, 하나 이상의 attribute(s)로 구성
- primary key는 중복된 값을 가질 수 없의며, NULL도 값으로 가질 수 없음
- 선언하는 방법

| attribute 하나로 구성될 때                                                              | attribute 두 개 이상으로 구성될 때                                                                                                                                             |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CREATE TABLE player (<br>&nbsp;&nbsp;id INT PRIMARY KEY<br>&nbsp;&nbsp;...<br>); | CREATE TABLE player (<br>&nbsp;&nbsp;team_id VARCHAR(12),<br>&nbsp;&nbsp;back_number INT,<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;PRIMARY KEY (team_id, back_number)<br>); |

### Key constraints: UNIQUE

- UNIQUE로 지정된 attribute(s)는 중복된 값을 가질 수 없음
- 단, NULL은 중복을 허용할 수도 있음 (RDBMS 마다 다름)
- 선언하는 방법

| attribute 하나로 구성될 때                                                              | attribute 두 개 이상으로 구성될 때                                                                                                                                             |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CREATE TABLE player (<br>&nbsp;&nbsp;id INT PRIMARY KEY<br>&nbsp;&nbsp;...<br>); | CREATE TABLE player (<br>&nbsp;&nbsp;team_id VARCHAR(12),<br>&nbsp;&nbsp;back_number INT,<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;PRIMARY KEY (team_id, back_number)<br>); |

### NOT NULL constraint

- attribute가 NOT NULL로 지정되면 해당 attribute는 NULL을 값으로 가질 수 없음
- 선언하는 방법

```sql
CREATE TABLE student(
  ...
  phone_number INT NOT NULL UNIQUE,
  ...
);
```

## CREATE TABLE employee

```sql
CREATE TABLE employee(
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  birth_date DATE,
  sex CHAR(1) CHECK (sex int ('M', 'F')),
  position VARCHAR(10),
  salary INT DEFAULT 50000000,
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES department(id) 
    ON DELETE SET NULL ON UPDATE CASCADE,
  CHECK (salary >= 50000000)
);
```

### attribute DEFAULT

- attribute의 default 값을 정의할 때 사용
- 새로운 tuple을 저장할 때 해당 attribute에 대한 값이 없다면 default 값으로 저장
- 선언하는 방법

```sql
CREATE TABLE orders(
  ...
  menu VARCHAR(15) DEFAULT '짜장면';
  ...
); 
```

### CHECK constraint

- attribute의 값을 제한하고 싶을 때 사용
- 선언하는 방법

| attribute 하나로 구성될 때                                                                       | attribute 두 개 이상으로 구성될 때                                                                                                                                   |
|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CREATE TABLE employee (<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;age INT CHECK (age >= 20)<br>); | CREATE TABLE project (<br>&nbsp;&nbsp;start_date DATE,<br>&nbsp;&nbsp;end_date DATE,<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;CHECK (start_date < end_date)<br>); |

### Referential integrity constraint: FOREIGN KEY

- attribute(s)가 다른 table의 primary key나 unique key를 참조할 때 사용
- 선언하는 방법

```sql
CREATE TABLE emplyee(
  ...
  dept_id INT,
  FOREIGN KEY (dept_id)
    REFERENCES department(id)
    ON DELETE [reference_option]
    ON UPDATE [reference_option]
);
```

| reference_option | 설명                                           |
|------------------|----------------------------------------------|
| CASCADE          | 참조값의 삭제/변경을 그대로 반영                           |
| SET NULL         | 참조값이 삭제/변경 시 NULL로 변경                        |
| RESTRICT         | 참조값이 삭제/변경되는 것을 금지                           |
| NO ACTION        | RESTRICT와 유사 (한 트랜잭션 내에서 참조값이 삭제/변경되는 것은 허가) |
| SET DEFAULT      | 참조값이 삭제/변경 시 DEFAULT 값으로 변경                  |

### constraints 이름 명시하기

- 이름을 붙이면 어떤 constraint을 위반했는지 쉽게 파악할 수 있음
- constraint를 삭제하고 싶을 때 해당 이름으로 삭제 가능

```sql
CREATE TABLE test (
  age INT CONSTRAINT age_over_20 CHECK (age > 20)
);
```

| CONSTRAINT age_over_20 이름을 붙였을 때            | CONSTRAINT age_over_20 이름을 생략했을 때          |
|---------------------------------------------|--------------------------------------------|
| CHECK constraint 'age_over_20' is violated. | Check constraint 'test_chk_1' is violated. |

### ALTER TABLE

- table의 schema를 변경하고 싶을 때 사용
- 이미 서비스 중인 table의 schema를 변경하는 것이라면 변경 작업 때문에 서비스의 백엔드에 영향이 없을지 검토한 후에 변경하는 것이 중요

| 유형              | MySQL 예제                                               |
|-----------------|--------------------------------------------------------|
| attribute 추가    | ALTER TABLE employee ADD blood VARCHAR(2);             |
| attribute 이름 변경 | ALTER TABLE employee RENAME COLUMN phone TO phone_num; |
| attribute 타입 변경 | ALTER TABLE employee MODIFY COLUMN blood CHAR(2);      |
| table 이름 변경     | ALTER TABLE logs RENMAE TO backend_logs;               |
| primary key 추가 | ALTER TABLE log ADD PRIMARY KEY (id);                  |

### DROP TABLE
- table을 삭제할 때 사용
- DROP TABLE table_name;

### database 구조를 정의할 때 중요한 점
- 만들려는 서비스의 스펙과 데이터 일관성, 편의성, 확장성 등등을 종합적으로 고려하여 DB 스키마를 적절하게 정의한느 것이 중요

