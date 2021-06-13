import React, { useEffect, useState } from 'react'
import NavbarMain from "../components/NavbarMain.jsx"
import CardsContainer from "../components/CardsContainer.jsx"
import ModalEachMovie from "../components/ModalEachMovie"
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@chakra-ui/react'
import { startMovieSelected } from '../actions/moviesActions.js'
import SliderMain from "../components/SliderMain"

function MainScreen() {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const search = useSelector(state => state.movies.search)

    
    const handleScroll = (e)=>{
        let scrollTop = document.scrollingElement.scrollTop
        let scrollHeight = document.scrollingElement.scrollHeight
        let viewport = document.scrollingElement.clientHeight
        if(scrollTop + viewport + 0.2 > scrollHeight ){
            console.log("estamoos abajooooo");
            setLoading(true)
            
            
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        if(loading && search === "Todas"){
            console.log("useeffect");
            dispatch(startMovieSelected(search))
            setLoading(false)
            
        }
        return ()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    }, [loading])

    
    
    
    return (
        <div  >
            <NavbarMain  />
            <SliderMain/>
            <CardsContainer />
            <Box my="20px"
            
             ></Box>
            <ModalEachMovie/>
            
        </div>
    )
}

export default MainScreen
