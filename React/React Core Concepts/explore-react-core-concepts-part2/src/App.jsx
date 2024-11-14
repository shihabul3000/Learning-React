//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Counter from './Counter';
import './App.css'
import Team from './Team';

// function App() {
//   const [count, setCount] = useState(0)

function App(){

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive =(num) =>{
    alert(num + 5);
  }


  return (
    <>
    <h3> React Core Concepts 2</h3>
    <Counter></Counter>
    <Team></Team>
     
      <h1>Vite + React</h1>
      <button onClick = {handleClick}>Click Me </button>
      
      <button onClick={handleClick2}> Click2 </button>
      
      <button onClick={() => {alert('third clicked')}}>Click 3 </button>

<button onClick={() => addToFive(3)}>Four</button>
      
    </>
  )

}
export default App
