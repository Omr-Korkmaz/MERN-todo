import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GET_TODOS from "./graphql/Queries";
import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(GET_TODOS);

  console.log(data);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <form>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">Contained</Button>
      </form>
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
}

export default App;
