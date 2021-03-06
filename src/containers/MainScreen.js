import React, { useCallback, useEffect, useRef, useState } from 'react'
import NavbarMain from "../components/NavbarMain.jsx"
import CardsContainer from "../components/CardsContainer.jsx"
import ModalEachMovie from "../components/ModalEachMovie"
import { useDispatch, useSelector } from 'react-redux'
import { movieSearch, startMovieSelected } from '../actions/moviesActions.js'
import SliderMain from "../components/SliderMain"
import TrailerMovie from '../components/TrailerMovie.jsx'
import TitleSearch from '../components/TitleSearch.jsx'

function MainScreen() {
    
    
    return (
        <div  >
            <NavbarMain  />
            <SliderMain/>
            <TitleSearch/>
            <CardsContainer />
            
            <ModalEachMovie/>
            <TrailerMovie/>
            
        </div>
    )
}

export default MainScreen
