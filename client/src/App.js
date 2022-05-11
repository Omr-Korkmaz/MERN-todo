import "./App.css";
import TodoCard from "./components/TodoCard";
import TodoCreate from "./components/TodoCreate";

const App = () => {
  return (
    <div className="App">
      <TodoCreate />
      <TodoCard />
    </div>
  );
}

export default App;
