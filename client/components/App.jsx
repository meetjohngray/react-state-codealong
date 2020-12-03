import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

import Greeter from './Greeter'
import Random from './Random'

class App extends React.Component {
  render() {    
    return (
    <Flex direction='column' align='center'>
      <Heading>Welcome to React Playground</Heading>
      <Greeter greeting="How ya goin'?"/>
      <Random />
    </Flex> 
    )
  }
}

export default App
