import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      title : `${this.props.title} ${this.props.tool}`.toUpperCase()
    }

    console.log(this)
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
          <h1>{ this.state.title }</h1>
          <ProductList />
      </header> 
    </div>
  );
  }
}

export default App;