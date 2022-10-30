import { chakra } from '@chakra-ui/react';
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
  FormHelperText,
  FormErrorMessage,
  useState,


} from '@chakra-ui/react';


export default function Login() {
  const [email, setEmail] = useState('')
  const handleInputChange = (e) => setEmail(e.target.value)
   const isError = email === ''


  const [pass, setPass] = useState('')
  const handleInputChange1 = (e) => setPass(e.target.value)
  const isError1 = pass === ''

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={email} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
       
      )}    </FormControl>




<FormControl isInvalid={isError1}>
        <FormLabel>password</FormLabel>
        <Input type='password' value={pass} onChange={handleInputChange1} />
            {!isError1 ? (
         <FormHelperText>
          Enter the password you'd like to receive the newsletter on.
         </FormHelperText>) :
          ( <FormErrorMessage>password is required</FormErrorMessage> )}
    </FormControl>










          
          {/* <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl> */}
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
        "./myPic/logo.png"
          }
        />
      </Flex>
    </Stack>
  );
}






























































































































































// import React from "react"
// import {
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