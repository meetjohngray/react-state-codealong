import React from 'react'

class Greeter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting: props.greeting,
      showGreeting: true
    }
  }
  
  toggleGreeting = () => {
    this.setState({showGreeting: !this.state.showGreeting})
  }

  render() {
    let lable = this.state.showGreeting ? 'Hide' : 'Show'
    return (
    <div>
      Greetings
      <button onClick={this.toggleGreeting}>{lable}</button>
    </div>)
  }
}

export default Greeter
