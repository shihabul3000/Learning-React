import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors = ['Sakib' , 'Shoriful Raj' , 'Jasim' , 'Rubel' , 'Salman Shah'];

  const singers = [
    {id:1,  name: 'Dr.Mahfuzur Rahman' , age: 68},
    {id:2, name: 'Eva Rahman' , age: 38},
    {id:3, name: 'Shuvro Dev' , age: 58},
    {id:4, name: 'Pritom' , age: 28,}
  ]


  // const [count, setCount] = useState(0)

 

  return (
    <>
    
      <h1>Vite + React</h1>

{

singers.map(singer => <Singer singer = {singer}></Singer>)

}






<Actor name={"Bappa Raz"}></Actor>
{
  actors.map(actor => <Actor name={actor}></Actor>)
}

     {/* <Todo task = 'Learn React 'isDone={true}></Todo>
     <Todo task = 'Explore Core Concepts ' isDone={false}></Todo>
     <Todo task = 'Try JSX ' isDone={true}></Todo> */}

      {/* <Device name ="Laptop" price = '55'></Device>
      <Device name="mobile" price ='17'></Device>
      <Device name="watch" price ='64'></Device>
     <Person></Person>
     
     <Student grade = '7' score='99'></Student>
     <Student grade = {12} score={85}></Student>
     <Student></Student>

  <Developer></Developer>  */}
    </>
  )
}

function Device(props) {

//console.log(props);
  return <h2>This Device : {props.name} price is {props.price} Dollar  </h2>

}



function Person(){
  const age = 25;
  const money = 20;
  const person = {name:'sakib' , age:12}
  return <h3> I am a {person.name}Person with age {age + money} </h3>
}

const {grae , score} = {grade: '7' , score: '99'};



function Student({grade = 1,score = 0}){
  console.log(grade,score);

  return (<div className='student'>
    <h3>This is Student</h3>
    <p>Class: {grade}</p>
    <p>score:{score}</p>

  </div>
  )
}

 function Developer(){

  const developerStyle = {
margin: '20px',
paddin: '20px',
border: '2px solid purple',
borderRadius : '20px'

  }

return (
<div style = {developerStyle}>
<h5>
  Devo devo
</h5>
<p>Coding: </p>

</div>


)

}


export default App
