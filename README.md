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