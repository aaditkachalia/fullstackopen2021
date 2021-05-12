import React from 'react'

const Header = (props) => {
  return(
  <h1>{props.course}</h1>
  )
}
const Parts = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercise}
      </p>
    </div>
  );
}
const Content = (props) => {
  return (
    <div>
      <p>
        <Parts name={props.parts[0].name} excercise={props.parts[0].excercise}/>
        <Parts name={props.parts[1].name} excercise={props.parts[1].excercise}/>
        <Parts name={props.parts[2].name} excercise={props.parts[2].excercise}/>
      </p>
    </div>
  );
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.parts[0].excercise + props.parts[1].excercise + props.parts[2].excercise}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercise : 10
      },
      {
        name: 'Using props to pass data',
        excercise : 17
      },
      {
        name: 'State of a component',
        excercise : 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      
    </div>
  )
}

export default App;