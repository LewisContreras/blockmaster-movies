import React from 'react'
import NavbarMain from "../components/NavbarMain.jsx"
import CardsContainer from "../components/CardsContainer.jsx"
import ModalEachMovie from "../components/ModalEachMovie"
import { useSelector } from 'react-redux'

function MainScreen() {

    const handleScroll = (e) =>{
        console.log(e);
        const {scrollTop, clientHeight, scrollHeight} = e.currentTarget
        console.log(scrollTop);
        console.log(clientHeight);
        console.log(scrollHeight);
    }

    
    
    return (
        <div onScroll={handleScroll} >
            <NavbarMain/>
            <CardsContainer />
            <ModalEachMovie/>
            <div id="visor" ></div>
        </div>
    )
}

export default MainScreen
