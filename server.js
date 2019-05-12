import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
  // populate author table with dummy data
  db.User.bulkCreate(
    times(10, () => ({
      username: faker.internet.userName()
    }))
  );
  // populate post table with dummy data
  db.Post.bulkCreate(
    times(50, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      userId: random(1, 10)
    }))
  );

  app.listen({ port: 5000 }, () =>
    console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
  );
});
