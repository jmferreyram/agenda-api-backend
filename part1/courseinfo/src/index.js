import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = (props) => {
  return (
    <div>
      {props.part1} {props.exercise1} <br></br>
      {props.part2} {props.exercise2} <br></br>
      {props.part3} {props.exercise3} 

    </div>)
}

const Total = (props) => {
  return <p>{props.exercise1 + props.exercise2 + props.exercise3}</p>
}

const App = () => {
  const course = 'Half Stack application development'

  const part = [
    {
      name: 'Fundamentals of React',
      exercises: 1},
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      
      <Content part1={part[0].name} exercise1={part[0].exercises}
       part2={part[1].name} exercise2={part[1].exercises}
       part3={part[2].name} exercise3={part[2].exercises}
      />

      <Total exercise1={part[0].exercises} exercise2={part[1].exercises} exercise3={part[2].exercises}  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))