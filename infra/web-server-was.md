# Web Server & WAS

## Web Server
> 웹 브라우저(클라이언트)로 부터 HTTP 요청을 받아 HTML 문서와 같은 정적 컨텐츠를 제공하는 프로그램
- 웹 서버의 기능
  - 클라이언트로부터 HTTP 요청을 받을 수 있음
  - 클라이언트가 정적 컨텐츠를 요청할 시 정적 컨텐츠를 제공할 수 있음
  - 클라이언트가 동적 컨텐츠를 요청할 시 WAS로 전달하여 WAS가 처리한 결과를 클라이언트에 전달

## WAS(Web Application Server)
> DB 조회나 다양한 로직 처리를 요구하는 동적인 컨텐츠를 제공하기 위해 만들어진 프로그램
- WAS의 기능
  - 클라이언트로부터 HTTP 요청을 받을 수 있음 (요즘 대부분의 WAS는 웹 서버를 내장)
  - 요청에 맞는 정적 컨텐츠를 제공
  - DB 조회나 다양한 로직 처리를 통해 동적 컨텐츠를 제공할 수 있음

## 그럼 WAS가 다 처리하면 되는데 굳이 웹 서버가 왜 필요할까?
### 웹 서버를 함께 사용했을 때의 장점
- 책임 분할을 통한 서버 부하 방지
  - 정적 컨텐츠는 웹 서버, 동적 컨텐츠는 WAS가 담당
- 여러대의 WAS 로드밸런싱
  - 리버스 프록시
  - WAS가 처리해야하는 요청을 여러 WAS가 나누어서 처리할 수 있도록 설정
- 보안
  - 리버스 프록시가 WAS보다 앞 단에 있기 때문에 리버스 프록시에서 보안 대책, 바이러스 대책을 마련해서 보안을 강화할 수 있고, WAS가 몇 대인지도 은폐 가능