# Reqeust Lifecycle
Nestjs는 요청을 처리하고 request lifecycle라고 부르는 순서대로 응답을 생성합니다. 미들웨어, 파이프, 가드 및 인터셉터를 사용하면 요청 수명 주기 동안 특정 코드가 실행되는 곳, 특히 글로벌, 컨트롤러 수준 및 경로 수준 구성 요소가 작용함에 따라 특정 코드가 실행되는 위치를 추적하는 것이 어려울 수 있습니다. 일반적으로, 요청은 미들웨어를 통해 가드로, 인터셉터로, 파이프로, 그리고 마지막으로 리턴 경로의 인터셉터로 돌아갑니다(응답이 생성됨).

## Middleware
미들웨어는 특정 순서로 실행된다. 먼저, Nest는 global로 바인딩된 미들웨어(예: app.use 바인딩된 미들웨어)를 실행한 다음 경로에서 결정되는 모듈 바인딩 미들웨어를 실행합니다. 미들웨어는 익스프레스의 미들웨어가 작동하는 방식과 유사하게 바인딩된 순서대로 순차적으로 실행됩니다. 다른 모듈에 바인딩된 미들웨어의 경우, 루트 모듈에 바인딩된 미들웨어가 먼저 실행된 다음, 미들웨어는 모듈이 가져오기 배열에 추가되는 순서대로 실행됩니다.

