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