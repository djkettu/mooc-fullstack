import { useState } from 'react'

const Title = () => {
  return (
  <h1>give feedback</h1>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad
  let average = (good - bad)/total
  let positive = (good / total) * 100
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )} 
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <StatisticsLine text="good" value={good}/>
          <StatisticsLine text="neutral" value={neutral}/>
          <StatisticsLine text="bad" value={bad}/>
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
          </table>
      </div>
    )
}

const StatisticsLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr><td>{text}:</td><td>{value} %</td></tr>    
    )
  }
  return (
  <tr><td>{text}:</td><td>{value}</td></tr>
  )
}

const Button = ({ onClick, text }) => {
  return (
  <button onClick={onClick}>
    {text}
  </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    console.log('increasing good', good)
    setGood(good + 1)
  }

  const increaseBad = () => {
    console.log('increasing bad', bad)
    setBad(bad + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    console.log('increasing neutral', neutral)
  }

  return (
    <div>
      <Title />
      <Button onClick={increaseGood} text="good"/>
      <Button onClick={increaseNeutral} text="neutral"/>
      <Button onClick={increaseBad} text="bad"/>
      <Statistics  good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App;
