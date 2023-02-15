# updated_at column 생성하기
table -> function -> trigger 순으로 생성

## table 생성
```bash
CREATE TABLE test.advertisers(
  adv_id SERIAL PRIMARY KEY,
  adv_email VARCHAR(256) UNIQUE NOT NULL,
  adv_pwd VARCHAR(100) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP
);
```

## function 생성
```bash
CREATE OR REPLACE FUNCTION update_time()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

## trigger 생성
```bash
CREATE TRIGGER update_trigger
BEFORE UPDATE ON test.advertisers
FOR EACH ROW
EXECUTE PROCEDURE update_time();
```