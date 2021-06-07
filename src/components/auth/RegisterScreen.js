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

function RegisterScreen() {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <Center h="100vh" >
            <Box borderRadius="10px" padding="14px"  w="300px" bgColor="whiteAlpha.300">
                <form onSubmit={handleSubmit} >
                <VStack spacing="10px">
                <Text>Regístrate</Text>
                <Input type="text" placeholder="Name" isRequired />
                <Input type="email" placeholder="Email" isRequired />
                <Input type="password" placeholder="Password" isRequired />
                <Input type="password" placeholder="Confirm Pasword" isRequired />
                <Button type="submit" bgColor="black" >Entrar</Button>
                </VStack>
                </form>
                <Link  to="/auth/login" as={ReachLink} >¿Ya estás registrado?</Link>
            </Box>
        </Center>
    )
}

export default RegisterScreen
