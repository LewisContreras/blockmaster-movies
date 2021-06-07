import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Link } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Center,Box } from '@chakra-ui/layout'
import React from 'react'
import {Link as ReachLink} from "react-router-dom"

function LoginScreen() {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const handleGoogleLogin = () =>{

    }

    return (
        
        <Center h="100vh" >
            <Box borderRadius="10px" padding="14px"  w="300px" bgColor="whiteAlpha.300">
                <form onSubmit={handleSubmit} >
                <VStack spacing="10px">
                <Text>Ingresa con correo y contraseña</Text>
                <Input type="email" placeholder="Email" isRequired />
                <Input type="password" placeholder="Password" isRequired />
                <Button type="submit" bgColor="black" >Entrar</Button>
                </VStack>
                </form>
                <HStack onClick={handleGoogleLogin} cursor="pointer" spacing="20px" px="6px" my="20px" borderRadius="10px" bgColor="white" h="40px" width="100%" >
                    <Img  height="80%" src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_"G"_Logo.svg' alt="google icon" />
                    <Text color="black" >Ingresa con Google</Text>
                </HStack>
                <Link  to="/auth/register" as={ReachLink} >¿No estás registrado?</Link>
            </Box>
        </Center>
    )
}

export default LoginScreen
