import React, { Component } from 'react';
import './App.css';
import Hello from './hello';
import World from './World';
import PassVail from './PassVali';
import ScrollBox from './ScrollBox';
import LifeCycleSample from './LifeCycle';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    const buttonColor = {
      background: "#BBB8DC",
      border: 0,
      outline: 0
    }
    const {
      handleClick
    } = this;
    const { color } = this.state;
    return (

      <div className="App">
        <button onClick={handleClick}>랜덤 색상</button>
        <LifeCycleSample color={color} />
        <div>
          <ScrollBox ref={(ref) => this.scrollBox = ref} />
          <br />
          <button style={buttonColor} onClick={() => this.scrollBox.scrollToBottom()}>
            맨밑으로
      </button>
        </div>
        <Hello name="박준서" />
        <World />
        <PassVail />
      </div>
    );
  }
}
export default App;