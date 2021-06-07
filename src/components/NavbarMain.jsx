import { Img } from '@chakra-ui/image'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import {Flex, HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import {FaSearch} from "react-icons/fa"

function NavbarMain() {
    return (
        <Flex alignItems="center" position="fixed" top="0" zIndex="100" width="100%" h="112px" backgroundColor="brand.background">
            <HStack spacing={8} width="90%" mx="auto" >
                <Img src="https://i.imgur.com/pwIYVhf.png" />

                <HStack minWidth="400px" spacing={10}>
                    <Text cursor="pointer">Todas</Text>
                    <Text cursor="pointer" >Más valoradas</Text>
                    <Text cursor="pointer" >Menos valoradas</Text>
                </HStack>

                <InputGroup  >
                    <InputRightElement backgroundColor="brand.primary"
                        pointerEvents="none" width="72px"  borderRadius="0 10px 10px 0"
                        children={<FaSearch color="black" />}
                    />
                    <Input color="brand.black" border="2px solid" borderColor="brand.primary" borderRadius="10px" backgroundColor="brand.white" type="tel" placeholder="Busca tu película favorita" />
                </InputGroup>
            </HStack>
        </Flex>
    )
}

export default NavbarMain
