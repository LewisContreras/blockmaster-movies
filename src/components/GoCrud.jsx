import {  Center } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'

const GoCrud = () => {
    const history = useHistory()
    return (
        <Center h="40px" px="10px" borderRadius="10px" bgColor="brand.primary" cursor="pointer" fontWeight="600" color="brand.background" onClick={()=>history.push("/crud")} >CRUD</Center>
    )
}

export default GoCrud
