import { useState } from 'react';
import Box from './Box';

const DEFAULT_STATE = [
  {id: 1, width: 300, height: 300, color: "green"},
  {id: 2, width: 100, height: 500, color: "red"}, 
  {id: 3, width: 500, height: 100, color: "blue"}
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
      {boxes.map(b => <Box key={b.id} width={b.width} height={b.height} color={b.color} />)}
    </div>
  )
}

export default BoxList;