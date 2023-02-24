custom repository를 사용하지 않고 repository를 주입받는다.
### users.service.ts
```typescript
constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
) {}
```
### users.module.ts
```typescript
@Module({
    imports: [TypeOrmModule.forFeature([Users])],
})
```
