# EC2 시간대 설정
- EC2에서 실행중인 cron 작업이 원하는 시간대에 동작하지 않았음. 로컬에서는 잘 되는데..
- EC2 시간대를 확인해보니 한국 시간대가 아니었다. 시간대를 다시 설정해주었다.

```bash
sudo ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
```