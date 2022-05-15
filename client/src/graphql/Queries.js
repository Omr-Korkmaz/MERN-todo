import { gql } from "@apollo/client";

const GET_TODOS = gql`
  {
    getTodos {
      id
      title
      detail
      
    }
  }
`;
export default GET_TODOS;
