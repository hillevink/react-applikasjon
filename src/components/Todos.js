import {useEffect} from "react"
import Todo from "./Todo"

const Todos = ({newTodo, completeTodo}) => {

  return (
    <>
      <h1>My Todos</h1>
      <section>
        {newTodo.map((todo, i) => (
          <Todo todo={todo} key={i} id={todo.title} completeTodo={completeTodo} newTodo={newTodo} />
        ))}
      </section>
    </>
  )
}

export default Todos