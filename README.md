### Setup and run
```console
$ docker-compose up -d (It can take some time when first up)
$ yarn

$ yarn sequelize db:create
$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all

$ yarn start
```

### RESTFUL type
[http://localhost:5000/api/v1/users/](http://localhost:5000/api/v1/users/)

[http://localhost:5000/api/v1/posts/](http://localhost:5000/api/v1/users/)

[http://localhost:5000/api/v1/comments/](http://localhost:5000/api/v1/users/)



### graphql type
[http://localhost:5000/graphql](http://localhost:5000/graphql)

```graphql
query {
  users(limit: 3) {
    id
    username
    comments {
      userId
      content
    }
  }
}

# after: last userId of last reulst
query {
  users(after:8, limit: 3) {
    id
    username
    posts {
      title
      content
    }
  }
}
```
