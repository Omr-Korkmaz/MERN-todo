import "./App.css";
import TodoContainer from "./components/TodoContainer";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <TodoContainer />
    </div>
  );
}

export default App;
