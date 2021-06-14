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
import "../../styles/animations.css"

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
            <Box  w="350px" borderRadius="10px" padding="14px"  bgColor="brand.primary" p="1px">
                <form onSubmit={handleSubmitRegister} >
                    {/* {
                        msjError &&
                        (
                            <div>msjError</div>
                        )
                    } */}

                <Center h="120px" borderRadius="10px 10px 0 0"  >
                    <Img src="https://i.imgur.com/pwIYVhf.png" />
                </Center>
                <VStack h="340px" className="scene_element scene_element--clipmidup" spacing="10px" p="10px" borderRadius="0 0 10px 10px" spacing="10px" bgColor="#14112e" >
                <Text fontSize="xl" fontWeight="600" >Regístrate</Text>
                <Input type="text" borderColor="brand.primary" placeholder="Name" name="name" value={name} onChange={handleInputChange}  />
                <Input type="email" borderColor="brand.primary" placeholder="Email" name="email" value={email} onChange={handleInputChange}   />
                <Input type="password" borderColor="brand.primary" placeholder="Password" name="password" value={password} onChange={handleInputChange}   />
                <Input type="password" borderColor="brand.primary" placeholder="Confirm Pasword" name="password2" value={password2} onChange={handleInputChange}  />
                <Button type="submit" bgColor="#3C5EEA" >Entrar</Button>
                <Link  to="/auth/login" as={ReachLink} >¿Ya estás registrado?</Link>
                </VStack>
                </form>
                
            </Box>
        </Center>
    )
}

export default RegisterScreen
