# node-playground

```bash
docker build . -t app:1.0.0
```

```docker
docker run -dp 80:3000 --name app app:1.0.0
```
```docker
docker run -dp 80:3000 -e NODE_ENV=dev --name app app:1.0.0
```

도커 실행시 -e 옵션 사용시 환경변수를 넣을 수 있다. 아래와 같은 명령이 실행된다
```bash
NODE_ENV=dev node server.js
```