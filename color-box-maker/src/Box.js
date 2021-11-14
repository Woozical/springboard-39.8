
// Renders a box with the properties width, height and color
const Box = (props) => {
  const s = {backgroundColor : props.color, width: `${props.width}px`, height: `${props.height}px`}
  return <div style={s}></div>
}

export default Box;