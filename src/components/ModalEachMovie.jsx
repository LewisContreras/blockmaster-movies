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

function ModalEachMovie() {

    const modal = useSelector(state => state.movies.modal)
    const dispatch = useDispatch()
    console.log(modal);
    return (
        !modal
        ?<Box display="none" ></Box>
        :<Flex  justifyContent="center" bgColor="rgba(15,14,23,0.9)"  position="fixed" top="0" width="100vw" h="100vh" p="40px" zIndex="100" >
            <HStack position="relative" spacing="30px" maxWidth="700px" >
                <Img src={modal.imageUrl} alt="Hard Kill" />
                <Icon onClick={()=>dispatch(movieModal(null))} cursor="pointer" fontSize="30px" top="40px" right="40px" position="absolute" as={MdClose} />
                <VStack alignItems="start" >
                    <Text>{modal.nameMovie}</Text>
                    <Text>{modal.description}</Text>
                    <Text>{`${modal.year} * ${modal.genre} * ${modal.duration}`}</Text>
                    <HStack >
                        <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary"  >VER AHORA</Button>
                        <Button leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
                </VStack>
            </HStack>
        </Flex>
    )
}

export default ModalEachMovie
