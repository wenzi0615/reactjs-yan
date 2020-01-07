import React, {Component} from 'react';
import DisplayImage from './Display.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.title = "Welcome to the Random Puppies App"
  }
  randomNum(range) {
    var randomNum = Math.floor(Math.random() * 5);
    return randomNum;
  }
  render() {
    return (
      <div className="App">
        <DisplayImage title = {this.title} randomNum = {this.randomNum}/>
      </div>
    );
  }
}

export default App;
