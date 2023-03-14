# Middleware

```미들웨어```는 어떤 리퀘스트가 들어왔을 때, 응답이 되어 나갈때까지 거치는 모든 함수들을 뜻한다. 

```javascript
...

app.use('/', (req, res) => {
  console.log('Middleware 1');
});

app.use((req, res) => {
  console.log('Middleware 2');
  res.send('Hello World!');
})
```
위의 코드를 실행하면 console.log('Middleware 1') 만 실행된다.

미들웨어는 받는 인자가 정해져있다. req, res, next<br>
node는 모든 작업이 비동기로 진행된다. 언제 어떤 작업이 끝날지 정확히 알 수 없다. 명시적으로 작어ㅏㅂ이 끝났을 때 알려줘야 하는 경우가 대부분인데, next를 활용해서 한 미들웨어가 끝나고 다음 미들웨어가 실행될 수 있도록 한다.

```javascript
...

app.use('/', (req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res) => {
  console.log('Middleware 2');
  res.send('Hello World!');
});
```

코드를 위와 같이 수정하고 실행하면 두 번째 미들웨어도 실행된다. 

```javascript
...

app.use('/', (req, res, next) => {
  console.log('Middleware 1');
  // next();
});

app.use((req, res) => {
  console.log('Middleware 2');
  res.send('Hello World!');
});
```

next()를 호출하지 않는다면 미들웨어의 종료를 선언하지 않은 것이기 때문에 timeout 된다.


