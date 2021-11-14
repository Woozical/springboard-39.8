
// Renders a box with the properties width, height and color
const Box = (props) => {
  const s = {backgroundColor : props.color, width: `${props.width}px`, height: `${props.height}px`};

  const handleClick = () => {
    props.deleteBox(props.id);
  }

  return <div style={s}>
    <button onClick={handleClick}>X</button>
  </div>
}

export default Box;