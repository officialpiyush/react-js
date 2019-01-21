import React, { Component } from 'react';
//eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      Time is: {this.state.date.toLocaleTimeString()}
      </header></div>
    );
  }
}

export default App;
