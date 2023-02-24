# JSX
- JavaScript와 XML/HTML을 합친 것

```jsx
const element = <h1>Hello, world!</h1>
```
## JSX의 역할
- JSX는 내부적으로 XML/HTML을 JavaScript로 변환하는 과정을 거침
- 실제로 JSX로 코드를 작성해도 최종적으로는 JavaScript 코드가 됨
- 변환하는 역할을 하는 것이 React.createElement()임

### JSX를 사용한 코드
```jsx
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```

### JSX를 사용하지 않은 코드
```jsx
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`)
  }
}

ReactDOM.render(
  React.createElement(Hello, { toWhat: 'World' }, null),
  document.getElementById('root')
);
```
```javascript
const element = (
  <h1 className="greeting">Hello World!</h1>  
) // JSX를 사용한 코드

const element = React.createElement(
  'hi',
  { className: 'greeting' },
  'Hello World!'
) // JSX를 사용하지 않은 코드
```
두 코드는 동일한 역할을 한다. JSX로 작성된 코드도 내부적으로는 createElement를 사용한 코드로 변환된다. React.createElement()의 결과로 다음과 같은 객체가 생성된다.

```javascript
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
      children: 'Hello, world!'
  }
}
```
React는 객체들을 읽어서 DOM을 만드는 데에 사용하고, 항상 최신 상태로 유지한다. 이 객체를 'element'라고 부른다.

## React.createElement()
```javascript
React.createElement(
  type, // element의 유형(div, span,... 또는 다른 react components)
  [props], // 속성
  [...children] // 자식 elements
)
```

## JSX의 장점
- 간결한 코드
- 가독성 향상
- Injection Attack 방어

## JSX 사용법
```javascript
const name = 'seungha';
const element = <h1>hi, {seungha}</h1>;

ReactDom.render(
  element,
  document.getElementById('root')
);
```

