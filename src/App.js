import Navbar from './components/Navbar';
import Form from './components/Form';
import Todos from './components/Todos';
import { useState } from "react";

function App() {

  const [newTodo, setNewTodo] = useState([])

  const completeTodo = (id) => {
    const currentTodos = [...newTodo]
    setNewTodo(currentTodos.find((todo) => todo.id == id))
    console.log(id)
  }

  return (
    <>
      <Navbar />
      <main>
        <Form setNewTodo={setNewTodo} />
        <Todos newTodo={newTodo} completeTodo={completeTodo} />
      </main>
    </>
  );
}

export default App;
