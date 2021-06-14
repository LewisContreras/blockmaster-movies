import { Box, Button, HStack, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crudSearch } from '../../actions/crudActions'
import { db } from '../../firebase/firebase-config'

const SearchCrud = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState(false)
    const searchCrud = useSelector(state => state.crud.search)

    const handleSearchCrud = async (e)=>{
        e.preventDefault()
        let searched = e.target.firstElementChild.value.toUpperCase()
        let movieSearched = []
        let resp = await db.collection("movies").where("nameMovie", "==",searched).get().then(snap=>{
            snap.forEach(hijo=>{
                movieSearched.push({
                    id:hijo.id,
                    ...hijo.data()
                })
            })
            setError(false)
        }).catch(err =>setError(true))
        dispatch(crudSearch(movieSearched))
    }

    return (
        <div>
            <HStack as="form" onSubmit={handleSearchCrud} >
                <Input type="text" placeholder="Nombre de la película..." />
                <Button colorScheme="teal" type="submit" >Buscar</Button>
            </HStack>
            <Text>{searchCrud.length === 0 && Array.isArray(searchCrud)
            ?"No hay resultados para tu busqueda"
        :null}</Text>
        </div>
    )
}

export default SearchCrud

