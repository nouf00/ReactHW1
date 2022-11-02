import { React, useState } from 'react'
import Store from './Store';

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
  useColorModeValue,
  AlertDialog

} from '@chakra-ui/react';

function Searche(props) {
    const [serbox, setserbox]= useState('')
    const handleInputChange = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setserbox(lowerCase);}
   
   
          

 

  return (
    <Box >
        <Flex bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          justifyContent="center"
          alignItems="center">
        <form align-items= 'center'>
    <input type="text" borderStyle={'solid'} value={serbox} onChange={handleInputChange} placeholder="Search here"></input>
    <Button colorScheme={'blue'} backgroundColor="skyblue" variant={'solid'} height="7" left={"10"} >Searche</Button>
  </form>
     
    </Flex>
    </Box>
    
  )
}
    

export default Searche












































































