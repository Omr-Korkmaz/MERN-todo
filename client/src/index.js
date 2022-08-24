import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import {onError}  from '@apollo/client/link/error'; 


const errorLink = onError(
  ({graphqlErrors, networkErrors})=>{
    if(graphqlErrors){
      graphqlErrors.map(({message, location, path })=>{
        alert(`Grapql Errors ${message}`)
      }
 ) }
 if(networkErrors){
  networkErrors.map(({message, location, path })=>{
    alert(`Grapql Errors ${message}`)
  }
) }
  }
)

const link = from ([
errorLink,
new HttpLink({  uri: "http://localhost:4000/graphql"})


])
const client = new ApolloClient({
  // uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  link:link
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
