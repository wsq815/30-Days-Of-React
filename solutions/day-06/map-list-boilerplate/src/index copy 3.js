import React from 'react'
import ReactDOM from 'react-dom/client'

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Country = ({country: {name, city}}) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country key={country.name} country={country} />)
  return <div>{countryList}</div>
}

const App = () => {
  return (
    <div className='container'>
      <div>
        <h1>countries</h1>
        <Countries countries={countries} />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(<App/>)