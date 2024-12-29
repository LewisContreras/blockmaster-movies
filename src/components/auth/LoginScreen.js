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
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import "../../styles/animations.css"
import { FaGoogle } from 'react-icons/fa'
import { Icon } from '@chakra-ui/react'

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
            <Box borderRadius="10px"  p="1px"  w="350px"  bgColor="brand.primary">
                <Center h="120px" borderRadius="10px 10px 0 0"  >
                    <Img src="https://i.imgur.com/pwIYVhf.png" />
                </Center>
                <form onSubmit={handleSubmitLogin} >
                <VStack className="scene_element scene_element--clipmidup" p="10px" h="340px" borderRadius="0 0 10px 10px" spacing="10px" bgColor="#14112e" >
                <Text my="10px" fontWeight="600" fontSize="xl" >Ingresa con correo y contraseña</Text>
                <Input id="email-login" type="email" placeholder="Email" borderColor="brand.primary" color="white" isRequired />
                <Input id="password-login" type="password" borderColor="brand.primary"
                 placeholder="Password" isRequired />
                <Button  disabled={loading} type="submit" bgColor="#3C5EEA" >Entrar</Button>
                
                <Box textAlign="center" width="100%" >
                <HStack   onClick={handleGoogleLogin} cursor="pointer" position="relative" spacing="20px" px="6px" my="20px" borderRadius="10px" bgColor="white" h="40px" width="100%" >
                    <Icon as={FaGoogle} fontSize="20px" color={"#3C5EEA"} />
                    <Text fontWeight="600" textAlign="center" width="100%" color="black" >Ingresa con Google</Text>
                </HStack>
                <Link    to="/auth/register" as={ReachLink} >¿No estás registrado?</Link>
                </Box>
                </VStack>
                </form>
                
                
            </Box>
        </Center>
    )
}

export default LoginScreen
