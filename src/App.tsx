import React from "react"
import "./App.css"
import StopWatch from "./components/StopWatch"
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StopWatch />
      </div>
    )
  }
}
export default App
