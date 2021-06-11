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
import validator from 'validator'
import {useForm} from "../../hooks/useForm"
import {setError, removeError} from "../../actions/uiActions"
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

function RegisterScreen() {
    const dispatch = useDispatch()
    const {msjError} = useSelector(state => state.ui)

    const [values, handleInputChange] = useForm({
        name: "",
        email:"",
        password: "",
        password2: ""
    })
    
    const {name, email, password,password2} = values

    const formValid = () =>{
        if(name.trim().length === 0){

            dispatch(setError("nombre requerido"))
            return false
        }else if(!validator.isEmail(email)){
            dispatch(setError("email requerido"))
            return false
        }else if(password2 !== password){
            dispatch(setError("password requerido"))
            return false
        }
        console.log(name);
        
        // dispatch(removeError())
        // debugger
        return true
    }

    const handleSubmitRegister = (e) =>{
        e.preventDefault();
        if(formValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    return (
        <Center h="100vh" >
            <Box borderRadius="10px" padding="14px"  w="300px" bgColor="whiteAlpha.300">
                <form onSubmit={handleSubmitRegister} >
                    {
                        msjError &&
                        (
                            <div>msjError</div>
                        )
                    }
                <VStack spacing="10px">
                <Text>Regístrate</Text>
                <Input type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange}  />
                <Input type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange}   />
                <Input type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange}   />
                <Input type="password" placeholder="Confirm Pasword" name="password2" value={password2} onChange={handleInputChange}  />
                <Button type="submit" bgColor="black" >Entrar</Button>
                </VStack>
                </form>
                <Link  to="/auth/login" as={ReachLink} >¿Ya estás registrado?</Link>
            </Box>
        </Center>
    )
}

export default RegisterScreen
