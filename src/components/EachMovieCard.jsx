import Icon from '@chakra-ui/icon'
import { Box, Center, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaStar } from 'react-icons/fa'

function EachMovieCard() {
    return (
        <Box position="relative" backgroundPosition="center" backgroundSize="cover" cursor="pointer" backgroundImage="https://i.imgur.com/p6nT4jy.png" w="220px" h="330px">
            <Center bgColor="rgba(0,0,0,0.5)"  color="brand.primary" px="30px"  position="absolute" height="64px" top="40px" border="2px solid" borderLeft="none" borderRadius="0 32px 32px 0" borderColor="brand.primary" >
                <Icon mr="10px"  as={FaStar} />
                <Text color="brand.white" >7.1</Text>
            </Center>
        </Box>
    )
}

export default EachMovieCard
