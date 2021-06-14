import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const TitleSearch = () => {

    const search = useSelector(state => state.movies.search)
    const selected = useSelector(state => state.movies.selected)
    let textSearch = ""
    if(!!search && !selected.length || search=== ""){
        textSearch = ""
    }else if(search === "Todas"){
        textSearch = search + " las películas"
    }else if(search === "Más valoradas"  || search === "Menos valoradas"  ){
        textSearch = "Películas " + search.toLowerCase()
    }else{
        textSearch = `"${search}"`
    }

    return (
        <Box px="22px" py="14px" fontSize="3xl" fontWeight="600" >
            {textSearch}
        </Box>
    )
}

export default TitleSearch
