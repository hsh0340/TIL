## SELECT statement
> SELECT attributes(s)<br>
> FROM table(s)<br>
> [WHERE condition(S)]

- id가 9인 임직원의 이름과 직군을 알고싶음
```bash
SELECT name, position FROM employee WHERE id = 9; 
```  

<img width="512" alt="스크린샷 2023-02-16 오후 2 06 41" src="https://user-images.githubusercontent.com/73820746/219273653-e3da29d3-3ca5-4d78-9796-417dae8e2a43.png">

- project 2002를 leading 하고 있는 임직원의 id와 이름과 직군을 알고싶음

```bash
SELECT employee.id, employee.name, employee.position FROM employee, project WHERE project.id = 2002 AND project.leader_id = employee.id; 
```

### AS
> 테이블이나 attribute에 별칭(alias)를 붙일 때 사용<br>
> 생략 가능함

```bash
SELECT e.id, e.name, e.position from employee e, project p where p.id=2002 and p.leader_id=e.id;
```

### DISTINCT
> DISTINCT는 select 결과에서 중복되는 tuples는 제외하고 싶을 때 사용한다

- 디자이너들이 참여하고 있는 프로젝트들의 ID와 이름을 알고싶음

### LIKE

- 이름이 N으로 시작하거나 N으로 끝나는 직원들의 이름을 알고싶음
```bash
select name from employee where name like '%N' or name like 'N%';
```

- 이름에 NG가 들어가는 직원의 이름을 알고싶음
```bash
select name from employee where name like '%NG%'; 
```

- 이름이 J로 시작하는, 총 네 글자의 이름을 가지는 임직원들의 이름을 알고싶음
```bash
select name from employee where name like 'J___'; 
```

- escape 문자와 함께 LIKE 사용하기
- %로 시작하거나 _로 끝나는 프로젝트 이름을 찾고 싶다면?
```bash
select name from project where name like '\%%' or name like '%\_'; 
```

