const Button = ({completeTodo, id}) => {

  return (
    <button type="button" className="button" onClick={() => completeTodo(id)} >Complete</button>
  )
}

export default Button