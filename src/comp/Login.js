import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Welc from './Welc';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';

export default function Login() {
    const [email, setEmail] = useState('')
    const handleInputChange = (e) => setEmail(e.target.value)
     const isError = email === ""
  
  
    const [pass, setPass] = useState('')
    const handleInputChange1 = (e) => setPass(e.target.value)
    const isError1 = pass === ""

    const navigate = useNavigate();

    const subm = e => {
      e.preventDefault();
      navigate("/Welc");
  
    }


   


    


  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          {/* -------------------------------------------------------- */}
          
       <form onSubmit={subm}>
           <FormControl isInvalid={isError} >
        <FormLabel>Email</FormLabel>
        <Input type='email' value={email} onChange={handleInputChange} placeholder="Enter the emai" />
       {!isError ? (
        <FormHelperText>Enter the email</FormHelperText>
        
       
      ) : (
        
        <FormErrorMessage>Email is required.</FormErrorMessage>)}
     </FormControl>
    <FormControl isInvalid={isError1}>
      <FormLabel>Password</FormLabel>
      <Input type='password' value={pass} onChange={handleInputChange1} placeholder=" Enter the password ."/>
      {!isError1 ? (
         <FormHelperText>  Enter the password .</FormHelperText>
        
      ) : ( <FormErrorMessage>password is required.</FormErrorMessage>    )}
    </FormControl>
    </form>
     <Stack spacing={6}>

            <Button colorScheme={'blue'} variant={'solid'} onClick={subm}>
              Sign 
            
            </Button>


          </Stack>
          
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}

















































































































































































































































//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   useState,
// } from '@chakra-ui/react'

// function Login() {
//   const [email, setEmail] = useState('')
//   const handleInputChange = (e) => setEmail(e.target.value)
//    const isError = email === ''


//   const [pass, setPass] = useState('')
//   const handleInputChange1 = (e) => setPass(e.target.value)
//   const isError1 = pass === ''

//   return (
//     <div>
//     <FormControl isInvalid={isError}>
//       <FormLabel>Email</FormLabel>
//       <Input type='email' value={email} onChange={handleInputChange} />
//       {!isError ? (
//         <FormHelperText>
//           Enter the email you'd like to receive the newsletter on.
//         </FormHelperText>
//       ) : (
//         <FormErrorMessage>Email is required.</FormErrorMessage>
//       )}
// //     </FormControl>
//     <FormControl isInvalid={isError1}>
//       <FormLabel>Email</FormLabel>
//       <Input type='password' value={pass} onChange={handleInputChange1} />
//       {!isError1 ? (
//         <FormHelperText>
//           Enter the password you'd like to receive the newsletter on.
//         </FormHelperText>
//       ) : (
//         <FormErrorMessage>password is required.</FormErrorMessage>
//       )}
//     </FormControl>
//     </div>
//   )
// }