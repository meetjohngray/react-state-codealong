import React, {useState} from 'react'
import { Button, ButtonGroup, Flex, Spacer } from "@chakra-ui/react"

const Greeter = (props) => {
   
  const [greeting, setGreeting] = useState(props.greeting)
  const [showGreeting, setShowGreeting] = useState(true)
    
  const toggleGreeting = () => {
    setShowGreeting(!showGreeting)
  }

  let lable = showGreeting ? 'Hide' : 'Show'
  return (
    <Flex direction='column' align='center' justifyContent='center'>
      <h2>{showGreeting && greeting}</h2>
      <Button 
        onClick={toggleGreeting}
        colorScheme='gray'
        size="md"
        variant='outline'
      >
        {lable}
      </Button>
    </Flex>)
}

export default Greeter
