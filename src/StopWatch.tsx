import React from "react"
import "./StopWatch.css"
import playIcon from "./img/playIcon.png"
import pauseIcon from "./img/pauseIcon.png"
import snowIcon from "./img/snowflake-o.png"
interface State {
  m: number
  h: number
  s: number
  isRunning: boolean
}
class StopWatch extends React.Component<{}, State> {
  public state: State = {
    m: 0,
    h: 0,
    s: 0,
    isRunning: false,
  }
  public watch: any
  constructor(props: {}) {
    super(props)
    this.handleStartStopClick = this.handleStartStopClick.bind(this)
  }
  handleStartStopClick = () => {
    this.setState((state) => ({
      isRunning: !state.isRunning,
    }))
    if (!this.state.isRunning) {
      this.setState({ isRunning: true })
      this.watch = setInterval(
        () =>
          this.setState((state) => ({
            s: state.s === 59 ? 0 : state.s + 1,
            m: state.s === 59 ? state.m + 1 : state.m,
            h: state.m === 59 ? state.h + 1 : state.h,
          })),
        1000
      )
    } else {
      this.setState({ m: 0, h: 0, s: 0 })
      clearInterval(this.watch)
    }
  }
  render() {
    console.log("render")
    return (
      <div className="stopwatch">
        <div className="stopwatch_leftBox">
          <div
            className={
              this.state.isRunning
                ? "stopwatch_leftBoxElementTrue"
                : "stopwatch_leftBoxElement"
            }
          >
            <button
              className="stopwatch_leftBoxElementButton"
              onClick={this.handleStartStopClick}
            >
              <img src={this.state.isRunning ? pauseIcon : playIcon}></img>
            </button>
          </div>
        </div>
        <div className="stopwatch_rightBox">
          <div className="stopwatch_rightBoxEl">
            <img src={snowIcon} />
            <p>Cold Time</p>
          </div>
          <div className="stopwatch_rightBoxTimer">
            <p>
              {this.state.h}:
              {this.state.m < 10 ? "0" + this.state.m : this.state.m}:
              {this.state.s < 10 ? "0" + this.state.s : this.state.s}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
