import Todo from "./Todo";
import { useState } from "react";

const DEFAULT_STATE = [{id: 0, task: "Walk garden"}, {id: 1, task: "Water the dog"}];

const TodoList = () => {
  const [todos, setTodos] = useState(DEFAULT_STATE);

  return(
    <div>
      <ul>
        {todos.map(item => <Todo key={item.id} task={item.task} />)}
      </ul>
    </div>
  )
}

export default TodoList;