import React from 'react'
import ReactDOM from 'react-dom/client'

const Numbers = ({ numbers }) => {
  const list = numbers.map(number => <li key={number}>{number}</li>)
  return list
}

const App = () => {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <Numbers numbers={numbers}></Numbers>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(<App/>)