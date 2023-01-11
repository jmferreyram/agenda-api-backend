import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  console.log(props.random)
  return (
    <button onClick = {props.handleButton}>{props.text}</button>
  )

}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])

  const SetToPoints = () => {
    console.log(points)
    const copy =  [...points]
    copy[selected] += 1
    return (setPoints(copy));
  };

  const SetToSelected = () => {
    let random = Math.round(Math.random()*5)
    setSelected(random);
  };

  const IndexOfMax = (arr) => {
    if (arr.length === 0) {
        return -1;
    }
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
  }

  return (
    <div>
      <h1>Anecdote Selected</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>It has {points[selected]} votes</p>
      <Button handleButton = {SetToPoints} text = 'Vote' random = {selected}/>
      <Button handleButton = {SetToSelected} text = 'Random Anecdotes' random = {selected}/>

      <h1>Anecdote with more votes</h1>
      <p>{props.anecdotes[IndexOfMax(points)]}</p>
      <p>It has {points[IndexOfMax(points)]} votes</p>
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
