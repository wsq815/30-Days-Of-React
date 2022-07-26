import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  }
  render() {
    // accessing the state value
    const count = this.state.count
    return (
      <div className='App'>
        <h1>{count} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add One
        </button>{' '}
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Minus One
        </button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);