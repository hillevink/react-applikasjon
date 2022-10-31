import {useState} from "react"

const Form = ({setNewTodo}) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleInput = (event) => {
    setTitle(event.target.value)
  }

  const handleContentInput = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = title
    setNewTodo((prev) => 
      [...prev, {id, title, content}]
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" onChange={handleTitleInput} />
      <label htmlFor="Content">Content</label>
      <input type="text" name="content" id="content" onChange={handleContentInput} />
      <input type="submit" value="Add" id="submitBtn"/>
    </form>
  )
}

export default Form