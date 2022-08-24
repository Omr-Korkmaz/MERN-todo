require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");
const cors = require("cors");
const mongoose = require("mongoose");

const startApolloServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // csrfPrevention: true,
    // cache: 'bounded',
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  mongoose //first connect database if it connected then start server...
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      app.listen(PORT, () =>
        console.log(` database connected and Listening on port ${PORT}...`)
      )
    )
    .catch((error) => console.log(error, "Could not connect database!"));
};

startApolloServer();
