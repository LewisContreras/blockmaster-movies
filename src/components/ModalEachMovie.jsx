import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Img } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import {  Flex, HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { FaPlay, FaPlus } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { movieModal } from '../actions/moviesActions'
import { db } from '../firebase/firebase-config'

function ModalEachMovie() {

    const modal = useSelector(state => state.movies.modal)
    const uid = useSelector(state => state.auth.uid)
    const dispatch = useDispatch()

    const handleSeeAfter =  (modal)=>{
        let movie = {...modal}
        delete movie.id 
        db.collection(`${uid}/movies/verdespues`).add(movie)
    }

    return (
        !modal
        ?<Box display="none" ></Box>
        :<Flex  justifyContent="center" bgColor="rgba(15,14,23,0.9)"  position="fixed" top="0" width="100vw" h="100vh" p="40px" zIndex="100" >
            <HStack position="relative" spacing="30px" maxWidth="700px" >
                <Img h="330px" width="220px" src={modal.imageUrl} alt="Hard Kill" />
                <Icon onClick={()=>dispatch(movieModal(null))} cursor="pointer" fontSize="30px" top="40px" right="40px" position="absolute" as={MdClose} />
                <VStack alignItems="start" >
                    <Text>{modal.nameMovie}</Text>
                    <Text>{modal.description}</Text>
                    <Text>{`${modal.year} * ${modal.genre} * ${Math.floor(modal.duration/60)}h ${modal.duration%60}min`}</Text>
                    <HStack >
                        <Button disabled leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary"  >VER AHORA</Button>
                        <Button  leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" onClick={()=>handleSeeAfter(modal)} >VER DESPUÉS</Button>
                  </HStack>
                </VStack>
            </HStack>
        </Flex>
    )
}

export default ModalEachMovie
