import { gql } from "apollo-server-express";



const typeDefs = gql`
  scalar Date
  type Todo {
    id: ID
    title: String
    detail: String
    date: Date
    complete: Boolean

  }

  type Query {
    getTodos: [Todo]
    getTodo(id: ID): Todo
  }

  type Mutation {
    addTodo(title: String, detail: String, date: Date): Todo
    deleteTodo(id: ID): String
    updateTodo(id: ID!, complete: Boolean!) : Boolean

  }
`;

export default typeDefs;

