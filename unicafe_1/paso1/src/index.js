import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick = { props.handleButton }> {props.text} </button>
  )
}

const Statistics = (props) => {
  return (<p> {props.text + ' ' + props.value} </p>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = bad + neutral + good
  
  if (total !== 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleButton = {() => setGood(good + 1)} text = 'Good'/>
        <Button handleButton = {() => setNeutral(neutral + 1)} text = 'Neutral'/>
        <Button handleButton = {() => setBad(bad + 1)} text = 'Bad'/>
        <h1>statistics</h1>
        <Statistics value = {good} text = 'good' />
        <Statistics value = {neutral} text = 'neutral' />
        <Statistics value = {bad} text = 'bad' />
        <Statistics value = {total} text = 'total' />
        <Statistics value = {(good - bad) / total} text = 'avg' />
        <Statistics value = {good / total * 100 + '%'} text = 'positive' />
      </div>
    )
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleButton = {() => setGood(good + 1)} text = 'Good'/>
        <Button handleButton = {() => setNeutral(neutral + 1)} text = 'Neutral'/>
        <Button handleButton = {() => setBad(bad + 1)} text = 'Bad'/>
        <h1>statistics</h1>
        <p>No feedback given</p>
        </div>)

  }
    
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)