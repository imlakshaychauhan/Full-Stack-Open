import { useState } from 'react'

const StatisticLine = ({text, value, children}) => {
  return (
    <tr>
      <td> {text}  </td>
      <td> {value} {children} </td>
    </tr>
  )
}

const Statistics = ({goodValue, neutralValue, badValue}) => {
  const total = goodValue + neutralValue + badValue;
  const positive = (goodValue / total) * 100;
  return(
    (total != 0) ?
    (<div>
      <table>
        <tbody>
          <StatisticLine text="good" value ={goodValue} />
          <StatisticLine text="neutral" value ={neutralValue} />
          <StatisticLine text="bad" value ={badValue} />
          <StatisticLine text="all" value ={total} />
          <StatisticLine text="average" value ={(goodValue - badValue) / total} />
          <StatisticLine text="positive" value ={positive}> % </StatisticLine>
        </tbody>
      </table>
    </div>): <>No feedback given</>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)} >good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} />
    </div>
  )
}

export default App