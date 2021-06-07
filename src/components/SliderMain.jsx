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

SwiperCore.use([Navigation, Pagination])


function SliderMain() {
    return (
        <Box px="20px" mt="120px">
            <Swiper
        spaceBetween={8}
        navigation pagination
        >
          <SwiperSlide>
              <Box position="relative">
                  <Img maxWidth="100%" height="100%" src="https://i.imgur.com/HjNNUVp.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary"  >VER AHORA</Button>
                    <Button leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box position="relative">
                  <Img maxWidth="100%" height="100%" src="https://i.imgur.com/HjNNUVp.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary"  >VER AHORA</Button>
                    <Button leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
              
        </SwiperSlide>
        <SwiperSlide>
        <Box position="relative">
                  <Img maxWidth="100%" height="100%" src="https://i.imgur.com/HjNNUVp.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary"  >VER AHORA</Button>
                    <Button leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>      
        </Swiper>
        </Box>
      );
}

export default SliderMain
