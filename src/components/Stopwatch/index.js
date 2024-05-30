import {Component} from 'react'

import './index.css'

const initialState = {
  timerElapsedInSeconds: 0,
  timerElapsedInMinutes: 0,
}

class Stopwatch extends Component {
  state = initialState
  onIncreamentSeconds = () => {
    const {timerElapsedInSeconds} = this.state
    this.setState(prevState => ({
      timerElapsedInSeconds: prevState.timerElapsedInSeconds + 1,
    }))
  }
  startTimer = () => {
    this.intervalId = setInterval(this.onIncreamentSeconds, 1000)
  }
  stopTimer = () => {
    clearInterval(this.intervalId)
  }
  resetTimer = () => {
    this.stopTimer()
    this.setState(initialState)
  }

  getTimerFormat = () => {
    const {timerElapsedInSeconds, timerElapsedInMinutes} = this.state
    const minutes = Math.floor(timerElapsedInSeconds / 60)
    const seconds =
      timerElapsedInSeconds > 9
        ? timerElapsedInSeconds
        : `0${timerElapsedInSeconds}`
    const timeMinutes = minutes > 9 ? minutes : `0${minutes}`
    return `${timeMinutes} : ${seconds}`
  }

  render() {
    const {timerElapsedInSeconds} = this.state
    console.log(timerElapsedInSeconds)
    return (
      <div className="stopwatch-bg">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="timer-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>{this.getTimerFormat()}</h1>
          <div className="controllers-container">
            <button
              onClick={this.startTimer}
              className="start-button"
              type="button"
            >
              Start
            </button>
            <button
              onClick={this.stopTimer}
              className="stop-button"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.resetTimer}
              className="reset-button"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
