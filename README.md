## Setup

### 1. Confings
In the `api` root creat a new file `.evn`. You can copy the contents from `.env.sample`.

### 2. Dependencies
Make sure you are running node version 12 and above.

Install global deps.:

```bash
    npm install --global yarn
    yarn global add nodemon
    yarn global add typescript
```

Install all packages:

In the `api` root execute `npm i`

### 3 MongoDB setup

```
$ docker pull mongo
$ docker run -p 27017:27017 --name inflighttest -d mongo
```

## Run

`yarn run start`

For Dev (with change watchers):
`yarn run start:watch`

App is will be running on localhost:3030


#### Run with Docker

1. Install Docker
2. In the `.env` file change `DB_HOST` value to `mongo`
3. In the `api` root run `docker-compose up`

App is will be running on localhost:3030

## Test

In the `api` root creat a new file `.evn.test`. You can copy the contents from `.env.sample`. Make sure to change the `NODE_ENV` variable to `test`.

Ro run automated tests, execute:
`yarn run test`