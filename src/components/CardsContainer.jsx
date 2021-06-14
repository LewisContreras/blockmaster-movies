import Icon from '@chakra-ui/icon'

import { Grid, Center, Text, Box } from '@chakra-ui/layout'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { movieModal } from '../actions/moviesActions'
import NothingFound from "./NothingFound.jsx"
import "../styles/animations.css"

function CardsContainer() {

    const dispatch = useDispatch()
    const selectedMovies = useSelector(state => state.movies.selected)

    const handleClickModal = (movie)=>{
        dispatch(movieModal(movie))
    }

    return (
        
            !selectedMovies.length
            ?<NothingFound/>
            :<Grid pb="70px" className="scene_element scene_element--fadeinup" templateColumns="repeat(auto-fill,220px)" gap="10px" px="30px" mt="20px" justifyContent="space-between" >
            {
                selectedMovies.map((el, index) =><Box onClick={()=>handleClickModal(el)}
                position="relative" backgroundPosition="center" borderRadius="10px" backgroundSize="cover" cursor="pointer" backgroundImage={el.imageUrl} w="220px" h="330px" key={index} >
                   <Center bgColor="rgba(0,0,0,0.5)"  color="brand.primary" px="30px"  position="absolute" height="64px" top="40px" border="2px solid" borderLeft="none" borderRadius="0 32px 32px 0" borderColor="brand.primary" >
                       <Icon mr="10px"  as={FaStar} />
                       <Text color="brand.white" >{el.calification.toFixed(1)}</Text>
                   </Center>
               </Box>)
            }
            
        </Grid>

        
            
        
    )
}

export default CardsContainer
