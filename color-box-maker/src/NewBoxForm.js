import {useState} from "react";

const NewBoxForm = ({addBox}) => {

  const [formData, setFormData] = useState({width: 300, height: 300, color:"#000000"});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    const updated = {...formData, [name] : value };
    setFormData(updated);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="b-height">Height: </label>
      <input onChange={handleChange} name="height" id="b-height" type="number" value={formData.height}/>
      <br />
      <label htmlFor="b-width">Width: </label>
      <input onChange={handleChange} name="width" id="b-width" type="number" value={formData.width}/>
      <br />
      <label htmlFor="b-color">Color: </label>
      <input onChange={handleChange} name="color" id="b-color" type="color" value={formData.color}/>
      <button>Add Box</button>
    </form>
  )
};

export default NewBoxForm;