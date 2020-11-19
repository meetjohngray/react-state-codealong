import React, {useState} from 'react'

const Greeter = (props) => {
   
  const [greeting, setGreeting] = useState(props.greeting)
  const [showGreeting, setShowGreeting] = useState(true)
    
  const toggleGreeting = () => {
    setShowGreeting(!showGreeting)
  }

  let lable = showGreeting ? 'Hide' : 'Show'
  return (
    <div>
      <h2>{showGreeting && greeting}</h2>
      <button onClick={toggleGreeting}>{lable}</button>
    </div>)
}

export default Greeter
