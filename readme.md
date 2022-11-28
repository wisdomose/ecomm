## How to run locally

rename `env.example` to `.env` and add the database url and other required values

install dependencies

```
yarn
```

run database migrations

```
yarn prisma migrate dev
```

generate prisma client

```
yarn prisma generate
```

run locally

```
yarn run dev
```

## generating a production build

```
yarn run build
```

start production server

```
yarn run start:prod
```
