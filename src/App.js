
import './App.css';
import AddTodo from "./components/AddTodo/AddTodo";
import Todolist from "./components/TodoList/Todolist";

function App() {
  return (
    <div className="App">
      <AddTodo/>
        <Todolist/>
    </div>
  );
}

export default App;
