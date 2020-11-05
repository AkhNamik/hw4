import React from "react"
import "./App.css"
import StopWatch from "./components/StopWatch"
import StopWatchFunc from "./components/StopWatchFunc"
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StopWatch />
        <StopWatchFunc s={0} h={0} m={0} />
      </div>
    )
  }
}
export default App
