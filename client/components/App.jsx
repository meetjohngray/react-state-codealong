import React from 'react'
import Greeter from './Greeter'

class App extends React.Component {
  
 

  render() {
   
    
    return (
    <>
      <h1>React development has begun!</h1>
      <Greeter greeting="sup"/>
      {/* <button onClick={this.toggleGreeting}>{lable}</button>
      {this.state.showGreeting && this.state.greeting} */}
    </> 
    )
  }
}

export default App
