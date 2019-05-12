import { ApolloServer, gql } from "apollo-server-express";
import bodyParser from "body-parser";
import express from "express";

import db from "./models";
import resolvers from "./resolvers";
import apiRouter from "./routes";
import typeDefs from "./schema";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
server.applyMiddleware({ app });

app.use(express.static("app/public"));
app.use("/api", apiRouter);

app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
);
