import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react'


function SliderMain() {
    return (
        <Splide 
        options={ {
            rewind : true,
            width  : 800,
            gap    : '1rem',
          } }
        >
            <SplideSlide>
                <img src="https://i.imgur.com/aat2ONt.png" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://i.imgur.com/aat2ONt.png" />
            </SplideSlide>
        </Splide>
    )
}

export default SliderMain
