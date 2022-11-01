
import React, {useState} from 'react';
import {
   Stack, 
  Text,
   Button, 
   grid,
   Box,
  Flex,
  useColorModeValue } from '@chakra-ui/react';



export default function Store(props) {
  
  
  return (

    <Stack p="9" boxShadow="lg" m="9" borderRadius="sm" top={'10%'}>
      <Stack direction="column" alignItems="center">
        <Text fontWeight="semibold" >{props.Course}</Text>

      </Stack>
      
      <Stack
        direction="column" alignItems="center" 
        justifyContent="space-between"  bottom='5' top="30%">
        <img src={props.img} alt="new Course" alignItems="center">
        </img>
        <Stack direction= "column" alignItems="center" >
                 {/* <Button variant="outline" colorScheme="green">
            Cookie Preferences
          </Button>  */}

          
            {props.date && <Button colorScheme='green'>التسجيل متاح  </Button>}
            {!props.date && <Button colorScheme="red" >التسجيل مغلق </Button>}

             
           
         
         
       
        </Stack>
      </Stack>
    </Stack>
   
    
  );

 
}




