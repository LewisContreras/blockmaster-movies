import Icon from '@chakra-ui/icon'
import { Img } from '@chakra-ui/image'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import {Flex, HStack, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import {FaSearch} from "react-icons/fa"
import {GiExitDoor} from "react-icons/gi"
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/auth'
import {movieLastDoc, movieSearch, startMovieSelected} from "../actions/moviesActions"
import GoCrud from './GoCrud'

function NavbarMain() {
    const inputRef = useRef("")
    const dispatch = useDispatch()
    const uid = useSelector(state => state.auth.uid)
    const search = useSelector(state => state.movies.search)
    const [loading, setLoading] = useState(false)
    const mounted = useRef(false)

    const handleScroll = (e)=>{
        let scrollTop = document.scrollingElement.scrollTop
        let scrollHeight = document.scrollingElement.scrollHeight
        let viewport = document.scrollingElement.clientHeight
        if(scrollTop + viewport + 0.5 > scrollHeight  ){
            setLoading(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        if(loading && search === "Todas"){
            dispatch(startMovieSelected(search))
            
        }
        if(!mounted.current){
            let navCategories = document.querySelectorAll(".nav-category")
            for (let i of navCategories) {
                if (i.textContent === search) {
                    i.style.color = "#FED941"
                    i.style.borderBottom ="2px solid #FED941"
                }
            }
            dispatch(movieSearch(search))
            dispatch(startMovieSelected(search))
            mounted.current = true
        }
        return ()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    }, [loading,dispatch])

    const handleClickCategories = (e) =>{
        let contenido = e.target.textContent
        dispatch(movieLastDoc(null))
        dispatch(movieSearch(contenido))
        dispatch(startMovieSelected(contenido))
        setLoading(false)
        window.scrollTo({
            top:320,
            behavior: "smooth"
        })
        let navCategories = document.querySelectorAll(".nav-category")
        for (let i of navCategories) {
            if (i.textContent === e.target.textContent) {
                i.style.color = "#FED941"
                i.style.borderBottom ="2px solid #FED941"
            }else{
                i.style.color = "white"
                i.style.border ="none"
            }
        }
    }

    const handleSearch = () =>{
        let valueInput = inputRef.current.value
        dispatch(movieLastDoc(null))
        dispatch(movieSearch(valueInput))
        dispatch(startMovieSelected(valueInput))
        setLoading(false)
        window.scrollTo({
            top:320,
            behavior: "smooth"
        })
        let navCategories = document.querySelectorAll(".nav-category")
        for (let i of navCategories) {
                i.style.color = "white"
                i.style.border = "none"
        }
        inputRef.current.value = ""
    }

    return (
        <Flex alignItems="center" position="fixed" top="0" zIndex="100" width="100%" h="112px" backgroundColor="brand.background">
            <HStack spacing={8} width="90%" mx="auto" >
                
                <Img src="https://i.imgur.com/pwIYVhf.png" />

                <HStack minWidth="400px" spacing={10}>
                    <Text  fontWeight="600"    className="nav-category" onClick={handleClickCategories} cursor="pointer">Todas</Text>
                    <Text className="nav-category" fontWeight="600" onClick={handleClickCategories} cursor="pointer" >Más valoradas</Text>
                    <Text className="nav-category" fontWeight="600" onClick={handleClickCategories} cursor="pointer" >Menos valoradas</Text>
                </HStack>

                <InputGroup  >
                    <InputRightElement onClick={handleSearch} cursor="pointer" backgroundColor="brand.primary"
                         width="72px"  borderRadius="0 10px 10px 0"
                        children={<FaSearch color="black" />}
                    />
                    <Input ref={inputRef} color="brand.black" border="2px solid" borderColor="brand.primary" borderRadius="10px" backgroundColor="brand.white" type="tel" placeholder="Busca tu película favorita" />
                </InputGroup>
                {
                    uid === "Th1NLjQWVLao0xs1jr0yxbMvKE23"
                    ?<GoCrud />
                    :null
                }
                <Icon fontSize="30px" color="red" cursor="pointer" onClick={()=>dispatch(startLogout())} as={GiExitDoor} />
                
            </HStack>
        </Flex>
    )
}

export default NavbarMain
