import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { useState } from "react";

const DEFAULT_STATE = [{id: 0, task: "Walk garden"}, {id: 1, task: "Water the dog"}];

const TodoList = () => {
  const [todos, setTodos] = useState(DEFAULT_STATE);

  const addItem = ({task}) => {
    const updated = [...todos];
    updated.push({task, id: `${todos.length}_${Date.now()}`});
    setTodos(updated);
  }

  const deleteItem = id => {
    const updated = todos.filter(item => item.id !== id );
    setTodos(updated);
  }

  return(
    <div>
      <NewTodoForm addItem={addItem} />
      <ul style={{listStyle: "none"}}>
        {todos.map(item => <Todo deleteItem={deleteItem} key={item.id} id={item.id} task={item.task} />)}
      </ul>
    </div>
  )
}

export default TodoList;