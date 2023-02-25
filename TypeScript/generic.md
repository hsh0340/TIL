# Generic
TypeScript의 제네릭(Generic)은 타입 안전성을 제공하기 위한 기능으로, 재사용성이 높은 함수와 클래스를 만들 수 있게 해준다. 제네릭을 사용하면 함수나 클래스에서 사용하는 타입을 파라미터화 할 수 있다. 이를 통해 함수나 클래스를 선언할 때는 타입 파라미터만을 사용하고, 호출할 때 실제 타입을 전달할 수 있다. 제네릭을 사용하면 타입 안전성이 높아지기 때문에 코드의 신뢰성이 높아지며, 재사용성도 높아지기 때문에 코드의 양도 줄일 수 있다.

## Omit
```Omit<T, K>```는 T 타입에서 K 프로퍼티를 제거한 타입을 생성하는 제네릭 타입이다. Omit을 사용하여 타입의 일부 속성을 제거할 수 있다. 이는 기존 타입을 변경하지 않고도 원하는 속성을 제거하여 새로운 타입을 만들 수 있다는 점에서 매우 유용하다.
### Example
아래와 같은 함수를 생각해보자.
```typescript
function repeatString(str: string, n: number): string {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
```
위 함수는 문자열을 n번 반복하는 함수이다. 이 함수는 문자열 타입인 str과 숫자 타입인 n을 받아서 문자열 타입인 result를 반환한다. 하지만 이 함수는 문자열 뿐만 아니라 다른 타입에도 적용할 수 있는데, 타입스크립트의 제네릭을 사용하면 이 함수를 다음과 같이 일반화 시킬 수 있다.
```typescript
function repeat<T>(item: T, n: number): T[] {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(item);
  }
  return result;
}
```
위 함수는 타입 파라미터 T를 받아서 T 타입의 item을 n번 반복하는 배열을 반환한다. 이 함수를 호출할 때는 아래와 같이 타입 파라미터를 전달해준다.
```typescript
const repeatedString = repeat<string>('hello', 3); // ['hello', 'hello', 'hello']
const repeatedNumber = repeat<number>(123, 2); // [123, 123]
```

## 