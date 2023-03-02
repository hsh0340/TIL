# created_at, updated_at column
- created_at: record가 insert된 시각. insert 때 값이 정해지고 이후 불변함.
- updated_at: record가 마지막으로 update된 시각. insert 직후에는 created_at 컬럼의 값과 동일하고, 이후 update 때마다 값이 갱신된다.

```bash
create table t (
  id int not null auto_increment,
  name varchar(8),
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp on update current_timestamp
);
```