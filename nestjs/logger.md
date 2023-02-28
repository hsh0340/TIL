# Logger
NestJS는 로그 기능을 제공하기 위해 'Logger' 모듈을 제공한다. 'Logger' 모듈은 '@nestjs/common' 패키지에서 제공되며, 간단한 설정으로 쉽게 사용할 수 있다.<br>
'Logger' 모듈은 다양한 로그 레벨을 제공한다. 기본 로그 레벨은 'log'이며, 'error', 'warn', 'debug', 'verbose' 로그 레벨도 지원한다. 각 로그 레벨에 따라 출력되는 로그의 내용이 달라진다.

```typescript
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('Hello world!');
    return 'Hello World!';
  }
}
```
logger 인스턴스를 통해 'log', 'error', 'warn', 'debug', 'verbose' 등의 메서드를 호출할 수 있다. 'log' 메서드는 기본 로그 레벨로, 인자로 받은 문자열을 로그로 출력한다. 로그 레벨을 변경하고 싶다면, 'Logger' 클래스의 생성자 인자로 로그 레벨을 지정할 수 있다. 로그 레벨에 따라 콘솔에 출력되는 로그 메세지의 색상이 달라지기 때문에, 개발자들이 로그를 쉽게 파악할 수 있다. 또한, 프로덕션 환경에서는 'process.env.NODE_ENV' 값을 검사하여 로그레벨을 조정할 수 있으므로, 불필요한 로그 메시지를 출력하지 않도록 할 수 있다.