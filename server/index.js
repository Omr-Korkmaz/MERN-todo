require('dotenv').config()
const express = require ("express");
const { ApolloServer, gql } =require ("apollo-server-express");
const resolvers = require ("./schema/resolvers");
const typeDefs =require ("./schema/typeDefs");
const cors =require ("cors");
const mongoose = require ("mongoose");

const startApolloServer = async () => {
  const app = express();
  // dotenv.config();

  app.use(express.json());
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });
  app.use((req, res) => {
    res.send("server Started");
  });
  const PORT = process.env.PORT || 4000;


  mongoose
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
