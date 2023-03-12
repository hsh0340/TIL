# OAuth

![OAuth-2](https://user-images.githubusercontent.com/73820746/224529720-68cfd31c-2c4f-4ca7-bda8-96008a9c4932.jpg)
나의 서비스는 사용자가 글을 등록하면 페이스북에 대신 글을 게시해 주는 서비스라고 가정해보자. 이럴 경우 사용자의 페이스북 계정을 받아서 나의 서비스에서 사용자의 페이스북에 로그인 한 후, 글을 올리면 된다. 당연하게도 페이스북 계정을 사용자가 나의 서비스에 제공할 리 없다.

```OAuth```를 이용하면 안전하게 페이스북과 상호작용할 수 있다.

![OAuth-3](https://user-images.githubusercontent.com/73820746/224530173-e04cc557-5926-45f9-9ca1-3e3bbea36a74.jpg)

유저의 요청에 의해 페이스북은 ```accessToken```을 발급한다. ```accessToken```은 아이디 비밀번호가 아니며, 서비스의 모든 기능을 사용할 수 있는 것이 아닌 부분적인 기능을 사용하는 것을 허용한다. 나의 서비스는 ```OAuth```를 통해 ```accessToken```을 획득한 후, ```accessToken```을 통해서 페이스북에 접근하여 데이터를 다루는 작업을 할 수 있다.

![OAuth-4](https://user-images.githubusercontent.com/73820746/224530810-cdb6ba17-c490-4a4e-b8d6-5e7e26313402.jpg)
OAuth에서는 각각의 역할을 다음과 같이 칭한다.
- Resource Server: 우리가 제어하고자 하는 자원을 가지고 있는 서버 
- Resource Owner: 자원의 소유자
- Client: 리소스 서버에 접속해서 정보를 가져가는 client

Resource Owner는 Resource Server에 회원 가입한 상태여야 하며, Client는 Resource Server를 사용하기 위해 사전 승인(register)을 받아야 한다. register를 하면, 기본적으로 3가지 항목을 Resource Server로 부터 발급받을 수 있다.
- Client Id: 우리의 서비스를 식별하는 식별자
- Client Secret: 우리의 서비스의 비밀번호
- Authorized redirect URLs: Resource Server가 권한을 부여하는 과정에서 Authorized code를 전달해 줄 주소

![OAuth-5 2](https://user-images.githubusercontent.com/73820746/224532960-444ca6b4-4eed-4372-b9c6-f9152e573fd8.jpg)
Client가 register를 완료하면, Client와 Resource Server는 ```Client ID```, ```Client Secret```, ```redirect url```의 정보를 가지고 있는 상태가 된다. 현재 상태는 이렇다.

- Resource Owner는 Client의 카카오로그인 기능을 사용하려 한다.
- Client는 Resource Server의 기능 중 B,C 만 사용하려 한다.

Client는 Resource Owner에게 카카오 로그인 버튼을 보여준다. 버튼에는 그림과 같이 링크를 걸어준다. Resource Owner가 버튼을 누르면 Resource Server로 접속하게 되는데, Resource Server는 Resource Owner가 현재 Resource Server에 로그인이 되어있는지 확인하고, 확인이 되면 버튼에 걸린 링크와 Resource Server가 가지고있는 client Id, redirect url를 비교한다. 값이 같다면, scope에 해당하는 권한을 client에게 부여할 것인지를 확인하는 메시지를 전송한다. client가 허용한다면, resource server는 어떤 유저가 어떤 scope를 허용하는 것에 동의하였다 라는 것을 저장한다. 

![OAuth-6](https://user-images.githubusercontent.com/73820746/224533406-6d0c01dd-26d5-4e99-b0f1-469cb0e9dd71.jpg)
Resource Owner의 동의가 끝나면, Resource Server는 ```authorizationCode```라는 임시비밀번호를 생성한다. 생성한 authorizationCode를 이용하여 Resource owner가 redirect 되도록 header의 location 값에 code를 담아서 보낸다. resource owner는 location으로 이동하게되고, client는 authorization code를 알게된다.

![OAuth-7](https://user-images.githubusercontent.com/73820746/224534384-bfb491cd-89bf-40d7-8b57-ae2b3265ce32.jpg)
Client는 Client ID, Client Secret, Redirect URL, Authorization Code를 모두 알고있는 상태가 되었다. 이 정보들을 가지고 Resource Server에 직접 접속한다. Resource Server는 가지고 있던 정보와 Client가 들고온 정보를 비교한다.

![OAuth-7 2](https://user-images.githubusercontent.com/73820746/224535603-22a5d0ab-9358-4c47-a57d-834709d793bb.jpg)
Resource Server는 정보를 비교해 보고 완벽하게 일치하면, 임시비밀번호였던 authorization code는 없애고 access token을 발급한다. 발급한 access token은 client에게 전달하고, client는 access token을 db 등에 내부적으로 저장한다. client가 특정 access token으로 접근하면, resource server는 access token을 보고 어떤 유저가 어떤 scope를 허용했는지 확인하고 동작한다.



