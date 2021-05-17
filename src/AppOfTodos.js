import "./App.css";

import { Todo } from "./components/todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn JS" />
      <Todo title="Learn React" />
      <Todo title="deeep React" />
    </div>
  );
}

export default App;
