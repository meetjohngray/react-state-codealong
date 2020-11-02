import React from 'react'

class App extends React.Component {
  
  state = {
    greeting: "Hello World",
    showGreeting: true
  }
  
  toggleGreeting = () => {
    this.setState({showGreeting: !this.state.showGreeting})
  }

  render() {
    let lable = this.state.showGreeting ? 'Hide' : 'Show'
    
    return (
    <>
      <h1>React development has begun!</h1>
      <button onClick={this.toggleGreeting}>{lable}</button>
      {this.state.showGreeting && this.state.greeting}
    </>
    )
  }
}

export default App
