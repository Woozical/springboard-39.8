import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const DEFAULT_STATE = [
];

const BoxList = () => {
  const [boxes, setBoxes] = useState(DEFAULT_STATE);

  const addBox = ({width, height, color}) => {
    const newBoxes = [...boxes];
    const id = `${newBoxes.length}_${Date.now()}`;
    console.log(id);
    newBoxes.push({width, height, color, id})
    setBoxes(newBoxes);
  };

  const deleteBox = id => {
    const newBoxes = boxes.filter(b => b.id !== id);
    setBoxes(newBoxes);
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(b => <Box deleteBox={deleteBox} key={b.id} id={b.id} width={b.width} height={b.height} color={b.color} />)}
    </div>
  )
}

export default BoxList;