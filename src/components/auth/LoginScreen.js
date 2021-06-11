import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Link } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Center,Box } from '@chakra-ui/layout'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as ReachLink} from "react-router-dom"
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'

function LoginScreen() {
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)

    const handleSubmitLogin = (e) =>{
        e.preventDefault()
        let email = document.getElementById("email-login").value
        let password = document.getElementById("password-login").value
        dispatch(startLoginEmailPassword(email,password))
    }

    const handleGoogleLogin = () =>{
        dispatch(startGoogleLogin())
    }

    return (
        
        <Center h="100vh" >
            <Box borderRadius="10px" padding="14px"  w="300px" bgColor="whiteAlpha.300">
                <form onSubmit={handleSubmitLogin} >
                <VStack spacing="10px">
                <Text>Ingresa con correo y contraseña</Text>
                <Input id="email-login" type="email" placeholder="Email" isRequired />
                <Input id="password-login" type="password" 
                 placeholder="Password" isRequired />
                <Button disabled={loading} type="submit" bgColor="black" >Entrar</Button>
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
