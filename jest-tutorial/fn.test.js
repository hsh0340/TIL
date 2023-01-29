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
    expect(fn.makeUser('seungha', 25)).toEqual({name: 'seungha', age: 25});
})

test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
    expect(fn.makeUser('seungha', 25)).toStrictEqual({name: 'seungha', age: 25});
})
