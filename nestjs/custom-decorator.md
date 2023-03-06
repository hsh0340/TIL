# Custom Decorator

## Decorator composition
Nest.js의 ```applyDecorators()```함수는 여러개의 데코레이터를 조합하여 하나의 데코레이터로 만드는 기능을 제공한다. 예를 들어, '@ApiTags()'와 '@ApiBearerAuth()' 데코레이터를 조합하여 '@ApiOperation()' 데코레이터를 만들고 싶다면 다음과 같이 코드를 작성한다.
```typescript
import { ApiBearerAuth, ApiTags, ApiOperation, applyDecorators } from '@nestjs/swagger';

export function AuthApiOperation(summary: string, operationId: string) {
  return applyDecorators(
    ApiTags('authentication'),
    ApiBearerAuth(),
    ApiOperation({ summary, operationId }),
  );
}
```
