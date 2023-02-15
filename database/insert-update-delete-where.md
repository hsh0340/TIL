- 다음 employee 테이블을 활용함
- 
![스크린샷 2023-02-14 오후 5 21 25](https://user-images.githubusercontent.com/73820746/218679078-e6d47123-7b51-4a43-a88f-e66c64a5e765.png)

## INSERT
```sql
INSERT INTO employee
  VALUES(1, 'MESSI', '1987-02-01', 'M', 'DEV_BACK', 100000000, null);
```
- employee 테이블을 정의할 때 attribute 순서대로 values() 안에 적어줌
- department table에 아무 값도 없기 때문에 null을 insert 함
- 모든 attribute에 대응해야함

```sql
INSERT INTO employee
  VALUES(1, 'JANE', '1996-05-05', 'F', 'DSGN', 90000000, null); // error
```
- PRIMARY KEY가 중복됨

```sql
INSERT INTO employee
  VALUES(2, 'JANE', '1996-05-05', 'F', 'DSGN', 40000000, null); // error
```
- salary의 constraints에 위반