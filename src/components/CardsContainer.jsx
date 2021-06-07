import { Grid } from '@chakra-ui/layout'
import React from 'react'
import EachMovieCard from './EachMovieCard'

function CardsContainer() {
    return (
        <Grid templateColumns="repeat(auto-fill,220px)" gap="10px" px="30px" mt="140px" justifyContent="space-between" >
            {
                Array(11).fill("").map((el, index) =><EachMovieCard key={index} />)
            }
            
        </Grid>
            
        
    )
}

export default CardsContainer
