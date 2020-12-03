import React from 'react'
import { Button, Heading } from '@chakra-ui/react'

class Random extends React.Component{
  state = { number: 1 }

  generateNumber = () => {
    let randNum = Math.floor(Math.random() * 10) + 1
    console.log(randNum)
    this.setState({ number: randNum })
  }

  render () {
    return (
      <>
        <p>{this.state.number}</p>
        {this.state.number === 7
          ? <Heading>You Win!</Heading>
          : <Button onClick={this.generateNumber} colorScheme='gray'size="md" variant='outline'>Random</Button>
        }
      </>
    )}
}

export default Random