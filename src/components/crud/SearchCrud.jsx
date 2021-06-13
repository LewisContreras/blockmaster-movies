import { Box, Button, HStack, Input } from '@chakra-ui/react'
import React from 'react'
import { db } from '../../firebase/firebase-config'

const SearchCrud = () => {

    const handleSearchCrud = async (e)=>{
        e.preventDefault()
        let searched = e.target.firstElementChild.value.toUpperCase()
        let movieSearched = []
        db.collection("prueba").where("nameMovie", "==",searched).get().then(snap=>{
            snap.forEach(hijo=>{
                movieSearched.push({
                    id:hijo.id,
                    ...hijo.data()
                })
            })
        })
        .catch(err =>console.log(err))
        console.log(movieSearched);
    }

    return (
        <div>
            <HStack as="form" onSubmit={handleSearchCrud} >
                <Input type="text" placeholder="Nombre de la película..." />
                <Button colorScheme="teal" type="submit" >Buscar</Button>
            </HStack>
        </div>
    )
}

export default SearchCrud

