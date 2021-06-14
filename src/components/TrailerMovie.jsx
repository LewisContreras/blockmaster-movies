import { Box, Center, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { movieTrailer } from '../actions/moviesActions'
import "../styles/animations.css"

const TrailerMovie = () => {
    const dispatch = useDispatch()
    const trailer = useSelector(state => state.movies.trailer)

    return (
        !trailer
        ?<Box display="none" className="scene_element scene_element--fadeinleft" ></Box>
        :<Center className="scene_element scene_element--fadeinright" bgColor="brand.background" position="fixed" top="0" h="100vh" width="100vw" zIndex="200" >
            <Icon  position="absolute" cursor="pointer" top="30px" left="40px" fontSize="30px" onClick={async (e)=>dispatch(movieTrailer(null))} as={FaArrowLeft} />
            <Box as="iframe" src={`https://embed.api.video/vod/${trailer}`} width="80%" height="80%"  allowFullScreen={true} ></Box>         
        </Center>
    )
}

export default TrailerMovie
