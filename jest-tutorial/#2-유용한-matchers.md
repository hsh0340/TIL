# #2. 유용한 Matchers
## toEqual()
### fn.js
```javascript
const fn = {
    makeUser: (name, age) => ({ name, age }), // 이름과 나이를 입력받아서 User 객체를 return
}
```
### fn.test.js
```javascript
test('이름과 나이를 전달받아서 객체를 반환해줘.', () => {
    expect(fn.makeUser('seungha', 25)).toBe({name: 'seungha', age: 25}); // failed
})

test('이름과 나이를 전달받아서 객체를 반환해줘.', () => {
    expect(fn.makeUser('seungha', 25)).toEqual({name: 'seungha', age: 25}); passed
})
```
- 객체나 배열은 재귀적으로 돌면서 값을 확인해야하기 때문에 toEqual()을 사용해야 한다.

## toStrictEqual()
### fn.js
```javascript
const fn = {
    makeUser: (name, age) => ({ name, age, gender: undefined }), // 이름과 나이 입력받아서 User 객체를 return 한다.
};
```
### fn.test.js
```javascript
test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
    expect(fn.makeUser('seungha', 25)).toEqual({name: 'seungha', age: 25}); // passed
})

test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
    expect(fn.makeUser('seungha', 25)).toStrictEqual({name: 'seungha', age: 25}); // failed
})
```
- 개발자의 의도대로라면 실패해야함.
- 보다 엄격하게 테스트를 진행하려면 toStrictEqual을 사용하는 것이 좋음.

## toBeNull(), toBeUndefined(), toBeDefined()
### fn.test.js
```javascript
test('null은 null입니다.', () => {
    expect(null).toBeNull(); // passed
})
```
## toBeTruthy(), toBeFalsy()
### fn.test.js
```javascript
test('0은 false입니다.', () => {
    expect(fn.add(-1, 1)).toBeFalsy(); // passed
})

test('비어있지 않은 문자열은 true입니다.', () => {
    expect(fn.add('Hello', 'world')).toBeTruthy(); // passed 
})
```

## toBeGreaterThan(), toBeGreaterThanOrEqual(), toBeLessThan(), toBeLessThanOrEqual()
### fn.test.js
```javascript
test('ID는 10자 이하여야 합니다.', () => {
    const id = 'THE_BLACK_ORDER';
    expect(id.length).toBeLessThanOrEqual(10); // failed
})

test('ID는 10자 이하여야 합니다.', () => {
    const id = 'THE_BLACK';
    expect(id.length).toBeLessThanOrEqual(10); // passed 
})
```

## toBeCloseTo()
### fn.test.js
```javascript
test('0.1 더하기 0.2는 0.3입니다.', () => {
    expect(fn.add(0.1, 0.2)).toBe(0.3); // failed
})

test('0.1 더하기 0.2는 0.3입니다.', () => {
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3); // passed
})
```
- 자바스크립트에서 소수점 계산 할 때 몇 몇 소수는 무한소수가 된다.
- 정확히 0.3과 일치하지 않기 때문에 toBeCloseTo()를 사용헤서 근사치인지 판별한다.

## toMatch()
### fn.test.js
```javascript
test("Hello world에 a라는 문자가 포함되어있나요?", () => {
    expect('Hello world').toMatch(/a/); // failed
})

test("Hello world에 a라는 문자가 포함되어있나요?", () => {
    expect('Hello world').toMatch(/H/); // passed
})

test("Hello world에 a라는 문자가 포함되어있나요?", () => {
    expect('Hello world').toMatch(/h/i); // passed
})
```
- toMatch() 안에는 정규표현식을 사용한다.

## toContain
### fn.test.js
```javascript
test('user list에 seungha가 있나?', () => {
    const user = 'seungha';
    const userList = ['yessul', 'yajin', 'yena', 'heejin', 'seungha'];
    expect(userList).toContain(user); // passed 
})
```
- 배열에 특정 요소가 있는지 확인할 때 사용한다.

##
### fn.js
```javascript
const fn = {
    throwErr: () => {
        throw new Error('xxx');
    }
}
```
### fn.test.js
```javascript
test('이거 에러 나나요?', () => {
    expect(() => fn.throwError()).toThrow(); // passed, 예외가 발생하면 무조건 passed
})

test('이거 에러 나나요?', () => {
    expect(() => fn.throwError()).toThrow('ooo'); // failed
})
```
- 함수 실행 시 예외가 발생하는 경우를 테스트한다.
- 특정 에러가 발생하는지 확인하려면 toThrow()안에 예외를 명시해준다.

 