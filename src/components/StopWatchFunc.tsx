import React, { useEffect, useState } from "react"
import "./StopWatch.css"
import playIcon from "../img/playIcon.png"
import pauseIcon from "../img/pauseIcon.png"
import snowIcon from "../img/snowflake-o.png"
interface State {
  m: number
  h: number
  s: number
}
const StopWatchFunc: React.FC<State> = () => {
  const [state, setState] = React.useState<State>({
    m: 0,
    h: 0,
    s: 0,
  })
  const [click, setClick] = React.useState<boolean>(false)
  const changeValue = () => {
    if (click) {
      setState((state) => ({
        s: state.s === 59 ? 0 : state.s + 1,
        m: state.s === 59 ? state.m + 1 : state.m,
        h: state.m === 59 ? state.h + 1 : state.h,
      }))
    } else {
      setState(() => ({ s: 0, m: 0, h: 0 }))
    }
  }
  React.useEffect(() => {
    const interval = setInterval(() => {
      changeValue()
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })
  return (
    <div className="stopwatch">
      <div className="stopwatch_leftBox">
        <div
          className={
            click ? "stopwatch_leftBoxElementTrue" : "stopwatch_leftBoxElement"
          }
        >
          <button
            className="stopwatch_leftBoxElementButton"
            onClick={() => setClick(!click)}
          >
            <img src={click ? pauseIcon : playIcon}></img>
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
            {state.h}:{state.m < 10 ? "0" + state.m : state.m}:
            {state.s < 10 ? "0" + state.s : state.s}
          </p>
        </div>
      </div>
    </div>
  )
}
export default React.memo(StopWatchFunc)
