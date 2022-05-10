import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './resolvers.js';
import typeDefs from './typeDefs.js';





async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers });

  await server.start();
  server.applyMiddleware({ app })
  app.use((req, res)=>{
      res.send('server Started')
  })
  const PORT = process.env.PORT||4000;
  app.listen(PORT,()=> console.log(`express Running ${PORT}`))


};

startApolloServer()