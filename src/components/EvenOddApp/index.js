/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable lines-between-class-members */
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * (100 - this.state.count))

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }
  onDecrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count - 7}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="header">Count {count}</h1>
          <p className="text">Count is {displayText}</p>
          <div>
            <button type="button" className="button" onClick={this.onIncrement}>
              Increment
            </button>
            <button type="button" className="button" onClick={this.onDecrement}>
              Decrement
            </button>
          </div>

          <p>*Increase By Random Number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
