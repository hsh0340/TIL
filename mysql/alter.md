### 테이블 이름 수정
```bash
ALTER TABLE [이전 테이블 이름] RENAME [새로운 테이블 이름];
```

### 컬럼 사이즈 수정
```bash
ALTER TABLE [테이블명] MODIFY [컬럼명] VARCHAR(사이즈);
```

### 컬럼명 수정
```bash
ALTER TABLE [테이블명] CHANGE [기존컬럼명] [변경할컬럼명] [변경할 컬럼 타입];
```

### nullable 수정
```bash
ALTER TABLE [테이블명] MODIFY COLUMN [컬럼명] [컬럼 타입] NOT NULL;
```

### default 값 수정
```bash
ALTER TABLE [테이블명] ALTER COLUMN [컬럼명] SET DEFAULT [기본값];
```

### 특정 컬럼 삭제
```bash
ALTER TABLE [테이블명] DROP COLUMN [컬럼명];
```


### fk 관계 해제
```bash
ALTER TABLE [테이블명] DROP FOREIGN KEY [제약조건이름]
```

### 컬럼 맨앞에 추가
```bash
ALTER TABLE [테이블명] ADD [새컬럼명] 자료형 FIRST;
```

### 컬럼 맨 뒤에 추가
```bash
ALTER TABLE [테이블명] ADD [새컬럼명] 자료형;
```

### 지정 컬럼 다음에 추가
```bash
ALTER TABLE [테이블명] ADD [새컬럼명] 자료형 AFTER [앞컬럼명];
```

