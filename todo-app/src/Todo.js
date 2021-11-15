const Todo = (props) => {
  const handleClick = () => {
    props.deleteItem(props.id);
  }
  return <li><button onClick={handleClick}>X</button>{props.task}</li>
}

export default Todo;