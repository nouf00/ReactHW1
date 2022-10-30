import React from 'react';
import { Stack, Text, Button, grid } from '@chakra-ui/react';



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

             
            {/* {
                (() => {
                    if(props.date ===true) {
                      <Button colorScheme='green'>التسجيل متاح  </Button>
                        } else {
                          <Button colorScheme="red" >التسجيل مغلق </Button>
                        } 
                })()  
            }   */}
         
         
       
        </Stack>
      </Stack>
    </Stack>
   
       
  );

 
}

// function condtion(date){
//   if(date2==0)
//   { return(<Button colorScheme="green" margin = '7'>التسجيل متاح </Button>)}

//   else{ return(<Button colorScheme="red" margin = '7'>التسجيل مغلق </Button>)}

// }



