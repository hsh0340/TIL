# Provider
> 의존성 주입의 대상

```Provider```는 Nest의 기본 개념이다. 기본 Nest 클래스의 대부분은 Service, Repository, Factory, Helper 등의 ```Provider```로 취급될 수 있다. 이는 객체들이 서로 다양한 관계를 만들 수 있다는 것을 의미하며 객체의 인스턴스를 연결하는 기능은 주로 Nest 런타임 시스템에 위임될 수 있다.

![Components_1](https://user-images.githubusercontent.com/73820746/221366070-ef14f13f-7dce-4e1a-8d08-2ebeb66c39f2.png)

```typescript
@Get()
findAll(@Req() request: Request) {
    return this.sampleService.findAll();
}
```

SampleController 코드들은 sampleService에 <strong>의존</strong>하고 있다. findAll이 어딘가에 구현되어 있으리라 기대하고, 그걸 사용하고 있다. SampleService의 구체적인 구현에 대해 전혀 알지 못한다.

```typescript
@Injectable()
export class SampleBestService extends SampleService {
    findAll() {
        return `This action returns all sample, Best`;
    }
}
```

SampleService가 아니라, SampleService를 상속받은 SampleBestService가 있다고 가정했을 때 findAll을 사용하고 싶다면 어떻게 해야할까?

```typescript
@Controller('sample')
export class SampleController {
    private sampleService;
    constructor() {
        this.sampleService = new SampleService();
    }
}
```

만약 코드가 위처럼 구현되어 있다면 어떻게 해야할까? 선언부를 SampleBestService로 고쳐야 한다. 그러다 생성자가 바뀌면? 또 코드를 수정해야 한다.

```typescript
@Controller('sample')
export class SampleController {
    constructor(
        @Inject('SampleService')
        private readonly sampleService: SampleService,
    ) {}
}
```
하지만 실제 구현 대상을 '주입' 해준다면, 어떤 것을 넣어줄 것인지만 결정하면 된다. 추상과 구현이 분리되므로, 코드가 유연해진다. 테스트 하기에도 편하다.

```typescript
@Module({
    controllers: [SampleController],
    providers: [
        {
            provide: 'sampleService', // token의 대상이 있으면
            useClass: SampleBestService, // 이 클래스를 사용해라.
        },
    ],
})
export class SampleModule {}
```
실제 SampleService로 뭘 넣어줄지는 Module에서 자유롭게 바꿀 수 있다. 이렇게 의존성 주입의 대상이 되는 것들을 ```Provider```라고 한다. @Injectable 데코레이터를 통해 Provider 역할을 부여할 수 있다.

```typescript
@Module({
    controllers: [SampleController],
    providers: [SampleService, SampleBestService],
})
export class SampleModule {}
```
@Injectable로 Provider 표시를 한 뒤에는, 모듈 단위에서 Provider라고 알려주어야 한다.