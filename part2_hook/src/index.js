import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => {
  return (<div> {props.counter} </div>)
}

const Button = (props) => {
  
  return (
    <button onClick = { props.handleButton }> {props.text} </button>
  )
}

const App = () => {

  const [counter, setCounter] = useState(0);
  const increaseByOne = () => { setCounter(counter + 1)};
  const setZero = () => { setCounter(0)};
  const descreaseByOne = () => { setCounter(counter - 1)};
  const multipleByTwo = () => { setCounter(counter*2)};
  

  return (
    <div>
      <Display counter = {counter}/>
      <Button handleButton = {increaseByOne} text='plus'/>
      <Button handleButton = {setZero} text='zero'/>
      <Button handleButton = {descreaseByOne} text='minus'/>
      <Button handleButton = {multipleByTwo} text='x2'/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))



