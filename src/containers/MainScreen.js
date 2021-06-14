import React, { useCallback, useEffect, useRef, useState } from 'react'
import NavbarMain from "../components/NavbarMain.jsx"
import CardsContainer from "../components/CardsContainer.jsx"
import ModalEachMovie from "../components/ModalEachMovie"
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@chakra-ui/react'
import { startMovieSelected } from '../actions/moviesActions.js'
import SliderMain from "../components/SliderMain"
import TrailerMovie from '../components/TrailerMovie.jsx'
import TitleSearch from '../components/TitleSearch.jsx'

function MainScreen() {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const search = useSelector(state => state.movies.search)
    const observer = useRef()
    const lastItem = useCallback(node =>{{
        observer.current = new IntersectionObserver(entries =>{
            if(entries[0].isIntersecting){
                console.log("visible");
                setLoading(!loading) 
            }    
        })
        if(node){
            observer.current.observe(node)
        }
    }}   
    )

    useEffect(() => {
        console.log(search);
    }, [loading])
    
    // const handleScroll = (e)=>{
    //     let scrollTop = document.scrollingElement.scrollTop
    //     let scrollHeight = document.scrollingElement.scrollHeight
    //     let viewport = document.scrollingElement.clientHeight
    //     if(scrollTop + viewport + 1 > scrollHeight ){
    //         console.log("estamoos abajooooo");
    //         setLoading(!loading)
            
            
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll)
    //     if(loading && search === "Todas"){
    //         console.log("useeffect");
    //         dispatch(startMovieSelected(search))
    //         setLoading(!loading)
            
    //     }
    //     return ()=>{
    //         window.removeEventListener("scroll", handleScroll)
    //     }
    // }, [loading])

    
    
    
    return (
        <div  >
            <NavbarMain  />
            <SliderMain/>
            <TitleSearch/>
            <CardsContainer />
            <Box my="20px"
               
             > <div id="visor" ref={lastItem} ></div></Box>
            <ModalEachMovie/>
            <TrailerMovie/>
            
        </div>
    )
}

export default MainScreen
