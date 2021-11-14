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
    newBoxes.push({width, height, color, id})
    setBoxes(newBoxes);
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(b => <Box key={b.id} width={b.width} height={b.height} color={b.color} />)}
    </div>
  )
}

export default BoxList;