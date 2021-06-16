import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from "swiper"
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { Box } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';
import { HStack } from '@chakra-ui/layout';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { movieTrailer } from '../actions/moviesActions';

SwiperCore.use([Navigation, Pagination])


function SliderMain() {

    const dispatch = useDispatch()

    return (
        <Box  height="400px" px="20px" mt="120px">
            <Swiper
        spaceBetween={8}
        navigation pagination 
        >
          <SwiperSlide>
              <Box  position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/HjNNUVp.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} onClick={()=>dispatch(movieTrailer("viRkiLYfyu9QUR67Z6nyU1U"))} color="brand.black" bgColor="brand.primary"  >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/WmJVBQB.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("vi356BgM6nqjj86PFplx4OjJ"))}  >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
              
        </SwiperSlide>
        <SwiperSlide>
        <Box position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/tmGy9lQ.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("vi5KJYJIjjMQNqUI7GpbEjX1"))}  >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box height="360px"  position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/zytsah1.jpeg" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("vi1LyarpLtlUn9r1eWtefEw6"))} >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box height="360px" position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/YnqRzkn.jpeg" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("vi3qqOeg6YuSRhnT31AOHOZ5"))} >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
              
        </Swiper>
        </Box>
      );
}

export default SliderMain
