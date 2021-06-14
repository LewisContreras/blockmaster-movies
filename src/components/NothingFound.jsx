import { Img } from '@chakra-ui/image'
import { Center, Text } from '@chakra-ui/layout'
import React from 'react'

function NothingFound() {
    return (
        <Center mb="20px" flexDirection="column">
            <Img src="https://i.imgur.com/gJYLZ6P.png" alt="Imagen que indica que nada ha sido encontrado" />
            <Text>No se han encontrado similitudes para su búsqueda</Text>
        </Center>
    )
}

export default NothingFound
