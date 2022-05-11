import GET_TODOS from "../graphql/Queries";
import { useQuery } from "@apollo/client";

const TodoCard = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  console.log(data);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <div>
        {data.getTodos.map((todo) => (
          <ul>
            <li>{todo.title}</li>
            <li>{todo.detail}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TodoCard;
