# Interface

정적 타입 언어에서 interface는 컴파일러가 코드를 검증하고 타입을 체크할 수 있도록 하는 역할을 한다. interface는 객체가 가져야 하는 특정한 구조를 정의하고, 이를 준수하지 않는 경우 컴파일 시간에 오류를 발생시킨다. interface는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용될 수 있다. interface는 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다. interface에 선언된 프로퍼티 또는 메서드의 구현을 강제하여 일관성을 유지할 수 있도록 하는 것이다. ES6는 인터페이스를 지원하지 않지만 TypeScript는 interface를 지원한다.

interface는 프로퍼티와 메서드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인스턴스를 생성할 수 없고 모든 메서드는 추상 메서드이다. 단, 추상 클래스의 추상 메서드와 달리 abstract 키워드를 사용하지 않는다.

## Interface의 역할
- 타입 체크: interface는 객체의 구조를 정의하므로, 해당 객체가 interface를 준수하는지를 검사할 수 있다. 이를 통해 타입 체크를 수행할 수 있다.
- 코드 가이드: interface를 사용하면 객체의 필수 필드 및 메서드에 대한 가이드를 제공할 수 있다. 이는 코드를 작성하는 개발자에게 도움이 된다.
- 코드 재사용: interface를 사용하면 객체의 구조를 추상화하여 코드 재사용성을 높일 수 있다. 다른 객체가 같은 interface를 구현하면, 해당 객체들은 호환 가능해진다.
- 다형성: interface는 다형성을 제공한다. interface를 구현하는 여러 객체는 같은 인터페이스 타입으로 취급될 수 있으므로, 다형성을 활용하여 코드를 간결하게 유지할 수 있다.

## 변수와 Interface
Interface는 변수의 타입으로 사용할 수 있다. 이 때 Interface를 타입으로 선언한 변수는 해당 Interface를 준수하여야 한다. 이 것은 새로운 타입을 정의하는 것과 유사하다.

```typescript
// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 변수 todo의 타입으로 Todo 인터페이스를 선언하였다.
let todo: Todo;

// 변수 todo는 Todo 인터페이스를 준수하여야 한다.
todo = { id: 1, content: 'typescript', completed: false };
```

Interface를 사용하여 함수 파라미터의 타입을 선언할 수 있다. 이 때 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수를 전달하여야 한다. 함수에 객체를 전달할 때 복잡한 매개변수 체크가 필요 없어서 매우 유용하다.

```typescript
// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

let todo = Todo[] = [];

// 파라미터 todo의 타입으로 Todo 인터페이스를 선언하였다.
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

// 파라미터 todo는 Todo 인터페이스를 준수하여야 한다.
const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.logf(todos); // [ { id: 1, content: 'typescript', completed: false } ]
```

## 함수와 Interface
Interface는 함수의 타입으로 사용할 수 있다. 이 때 함수의 Interface에는 타입이 선언된 파라미터 리스트와 리턴 타입을 정의한다. 함수 Interface를 구현하는 함수는 Interface를 준수하여야 한다.

```typescript
// 함수 인터페이스의 정의
interface SquareFunc {
  (num: number): number;
}

// 함수 인터페이스를 구현하는 함수는 인터페이스를 준쉬하여야 한다.
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
}

console.log(squareFunc(10)); // 100
```

## 클래스와 Interface
클래스 선언문의 implements 뒤에 Interface를 선언하면 해당 클래스는 지정된 Interface를 반드시 구현하여야 한다. 이는 Interface를 구현하는 클래스의 일관성을 유지할 수 있는 장점을 갖는다. Interface는 프로퍼티와 메서드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인스턴스를 생성할 수는 없다.

```typescript
interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
class Todo implements ITodo {
  constructor (
      public id: number,
      public content: string,
      public completed: boolean
  ) {}
}

const todo = new Todo(1, 'TypeScript', false);
```
Interface는 프로퍼티 뿐만 아니라 메서드도 포함할 수 있다. 단, 모든 메서드는 추상 메서드이어야 한다. Interface를 구현하는 클래스는 Interface에서 정의한 프로퍼티와 추상 메서드를 만드시 구현하여야 한다.

```typescript
// 인터페이스의 정의
interface IPerson {
  name: string;
  sayHello(): void;
}

/*
인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메서드를 반드시 구현하여야 한다.
*/
class Person implements IPerson {
  // 인터페이스에서 정의한 프로퍼티의 구현
  constructor(public name: string) {}
    
  // 인터페이스에서 정의한 추상 메서드의 구현
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

function greeter(person: IPerson): void {
    person.sayHello();
}

const me = new Person('Lee');
greeter(me); // Hello Lee
```

## 선택적 프로퍼티
Interface의 프로퍼티는 반드시 구현되어야 한다. 하지만 Interface의 프로퍼티가 선택적으로 필요한 경우가 있을 수 있다. 선택적 프로퍼티는 프로퍼티 명 뒤에 ```?```를 붙이며 생략하여도 에러가 발생하지 않는다.
```typescript
interface UserInfo {
  username: string;
  password: string;
  age?    : number;
  address?: string;
}

const userInfo: UserInfo = {
  username: 'hsh0340@naver.com',
  password: '123456'
}

console.log(userInfo);
```
이렇게 선택적 프로퍼티를 사용하면 사용 가능한 프로퍼티를 파악할 수 있어서 코드를 이해하기 쉬워진다.

## Interface 상속
Interface는 extends 키워드를 사용하여 Interface 또는 클래스를 상속받을 수 있다.
```typescript
interface Person {
  name: string;
  age?: number;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  name: 'Lee',
    age: 20,
    grade: 3
}
```
복수의 인터페이스를 상속받을 수도 있다.
```typescript
interface Person {
  name: string;
  age?: number;
}

interface Developer {
  skills: string[];
}

interface WebDeveloper extends Person, Developer {}

const webDeveloper: WebDeveloper =  {
  name: 'Lee',
  age: 20,
  skills: ['HTML', 'CSS', 'JavaScript']
}
```
interface는 interface 뿐만 아니라 클래스도 상속받을 수 있다. 단, 클래스의 모든 멤버(public, protected, private)가 상속되지만 구현까지 상속하지는 않는다.
```typescript
class Person {
  constructor(public name: string, public age: number) {}
}

interface Developer extends Person {
  skills: string[];
}

const developer: Developer =  {
  name: 'Lee',
  age: 20,
  skills: ['HTML', 'CSS', 'JavaScript']
}
```