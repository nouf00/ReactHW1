
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
    const [ItemSe, setItemSe]= useState('')
    const handleInputChange = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setItemSe(lowerCase);}
   
   
        const nameSto=[
            "Swaher Bootcamp",
            "UI/UX using figma",
            "Web desing using ON-Code",
            "web desing for IOS usinf SwiftUI",
            "GIT & Githup",
           "Introdection in DecOps"]   

   const itemS=()=>{
    nameSto.filter(
        (ItemSe)=>{
            for(let x =0; x>nameSto.length;x++){
                if(ItemSe==" "){
                  alert(" Enter your text")
            }

        }}
    )


   }
 const sumi=()=>{
    itemS()
 }

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
    <input type="text" borderStyle={'solid'} value={ItemSe} onChange={handleInputChange} placeholder="Search here"></input>
    <Button سcolorScheme={'blue'} backgroundColor="skyblue" variant={'solid'} height="7" left={"10"} onClick={sumi}>Searche</Button>
  </form>
     
    </Flex>
    </Box>
    
  )
}
    

export default Searche












































































