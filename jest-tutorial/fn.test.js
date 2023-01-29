const fn = require('./fn');

test('1은 1이야', () => {
  expect(1).toBe(1);
});

test('2더하기 3은 5야', () => {
  expect(fn.add(2, 3)).toBe(5); // matcher: toBe()는 숫자나 문자 등 기본 타입 값을 비교할 때 사용한다.
})

test('3더하기 3은 5야', () => {
  expect(fn.add(3, 3)).not.toBe(5);
})

test('3더하기 3은 6이야.', () => {
  expect(fn.add(3, 3)).toEqual(6);
})

test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
  expect(fn.makeUser('seungha', 25)).toStrictEqual({name: 'seungha', age: 25, gender: undefined});
})

test('null은 null입니다.', () => {
  expect(null).toBeNull();
})

test('0은 false입니다.', () => {
  expect(fn.add(-1, 1)).toBeFalsy();
})

test('비어있지 않은 문자열은 true입니다.', () => {
  expect(fn.add('Hello', 'world')).toBeTruthy();
})

test('ID는 10자 이하여야 합니다.', () => {
  const id = 'THE_BLACK';
  expect(id.length).toBeLessThanOrEqual(10);
})

test('0.1 더하기 0.2는  0.3입니다.', () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
})

test("Hello world에 a라는 문자가 포함되어있나요?", () => {
  expect('Hello world').toMatch(/h/i);
})

test('user list에 seungha가 있나?', () => {
  const user = 'seungha';
  const userList = ['yessul', 'yajin', 'yena', 'heejin', 'seungha'];
  expect(userList).toContain(user);
})

test('이거 에러 나나요?', () => {
  expect(() => fn.throwError()).toThrow();
})


test('3초 후에 받아온 이름은 seungha입니다.', (done) => {
  function callback(name) {
    expect(name).toBe('seungha');
    done();
  }

  fn.getName(callback)
})

test('3초 후에 받아온 이름은 seungha입니다.', (done) => {
  function callback(name) {
    try {
      expect(name).toBe('s eunghee');
      done();
    } catch (err) {
      done(err);
    }
  }
  fn.getName(callback);
})

test('3초 후에 받아온 나이는 30살 입니다.', () => {
  return fn.getAge().then(age => {
    expect(age).toBe(30) ;
  })
})

test('3초 후에 받아온 나이는 30살 입니다.', () => {
  return expect(fn.getAge()).resolves.toBe(30);
})

test('3초 후에 받아온 나이는 30살 입니다.', async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
})

test('3초 후에 받아온 나이는 30살 입니다.', async () => {
  await expect(fn.getAge()).resolves.toBe(30);
})

