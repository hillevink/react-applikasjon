
import Button from "./Button"
import Title from "./Title"

const Todo = ({todo, completeTodo, id}) => {

  return (
    <article>
      <Title title={todo.title} />
      <p>{todo.content}</p>
      <Button completeTodo={completeTodo} id={id} />
    </article>
    
  )
}

export default Todo