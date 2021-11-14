import './App.css';
import Box from './Box';

function App() {
  return (
    <div className="App">
      <Box width={300} height={300} color="green" />
      <Box width={100} height={500} color="red" />
      <Box width={500} height={100} color="blue" />
    </div>
  );
}

export default App;
