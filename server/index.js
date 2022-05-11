import dotenv from 'dotenv';

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './resolvers.js';
import typeDefs from './typeDefs.js';
import  cors  from 'cors';
import mongoose  from 'mongoose';




const startApolloServer= async ()=> {
  const app = express();
  dotenv.config()

  app.use(express.json());
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers });

  await server.start();
  server.applyMiddleware({ app })
  app.use((req, res)=>{
      res.send('server Started')
  })
  const PORT = process.env.PORT||4000;


// try {
//     mongoose
//     .connect(process.env.DB, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
// } catch (error) {
//     console.log(error);
// }


  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, ()=>console.log(` database connected and Listening on port ${PORT}...`)))
    .catch((error) => console.log(error, "Could not connect database!"));




    // app.listen(PORT, ()=>console.log(` database connected and Listening on port ${PORT}...`));


};







startApolloServer()