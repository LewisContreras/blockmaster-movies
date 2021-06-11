import Icon from '@chakra-ui/icon'
import { Img } from '@chakra-ui/image'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import {Flex, HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import {FaSearch, FaUser} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/auth'
import {movieSearch, startMovieSelected} from "../actions/moviesActions"

function NavbarMain() {
    const inputRef = useRef("")
    const dispatch = useDispatch()
    const search = useSelector(state => state.movies.search)

    useEffect(() => {
        dispatch(movieSearch(search))
        dispatch(startMovieSelected(search))
    }, [])

    const handleLogout = ()=>{
        dispatch(startLogout())
    }

    const handleClickCategories = (e) =>{
        let contenido = e.target.textContent
        dispatch(movieSearch(contenido))
        dispatch(startMovieSelected(contenido))
        let navCategories = document.querySelectorAll(".nav-category")
        for (let i of navCategories) {
            if (i.textContent === e.target.textContent) {
                i.style.color = "yellow"
            }else{
                i.style.color = "white"
            }
        }
    }

    const handleSearch = (e) =>{
        let valueInput = inputRef.current.value
        dispatch(startMovieSelected(valueInput))
        let navCategories = document.querySelectorAll(".nav-category")
        for (let i of navCategories) {
                i.style.color = "white"
        }
        inputRef.current.value = ""
    }


    return (
        <Flex alignItems="center" position="fixed" top="0" zIndex="100" width="100%" h="112px" backgroundColor="brand.background">
            <HStack spacing={8} width="90%" mx="auto" >
                <Icon cursor="pointer" onClick={handleLogout} as={FaUser} />
                <Img src="https://i.imgur.com/pwIYVhf.png" />

                <HStack minWidth="400px" spacing={10}>
                    <Text color="yellow" id="puta-mierda" className="nav-category" onClick={handleClickCategories} cursor="pointer">Todas</Text>
                    <Text className="nav-category" onClick={handleClickCategories} cursor="pointer" >Más valoradas</Text>
                    <Text className="nav-category" onClick={handleClickCategories} cursor="pointer" >Menos valoradas</Text>
                </HStack>

                <InputGroup  >
                    <InputRightElement onClick={handleSearch} cursor="pointer" backgroundColor="brand.primary"
                         width="72px"  borderRadius="0 10px 10px 0"
                        children={<FaSearch color="black" />}
                    />
                    <Input ref={inputRef} color="brand.black" border="2px solid" borderColor="brand.primary" borderRadius="10px" backgroundColor="brand.white" type="tel" placeholder="Busca tu película favorita" />
                </InputGroup>
            </HStack>
        </Flex>
    )
}

export default NavbarMain
