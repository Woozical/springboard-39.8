import {useState} from "react";

const DEFAULT_STATE = {task: ""};

const NewTodoForm = (props) => {

  const [formData, setFormData] = useState(DEFAULT_STATE);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    const updated = {...formData, [name] : value };
    setFormData(updated);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addItem(formData);
    setFormData(DEFAULT_STATE);
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor="td-in-task">New Task: </label>
    <input id="td-in-task" name="task" onChange={handleChange} type="text" value={formData.task} />
    
    <button>Add</button>
  </form>
}

export default NewTodoForm;