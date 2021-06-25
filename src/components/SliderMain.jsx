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
        <Box  height={["220px","220px","400px"]} px="20px" mt={["10px","10px","120px"]}>
            <Swiper
        spaceBetween={8}
        navigation pagination 
        >
          <SwiperSlide>
              <Box height={["200px","200px","360px"]}  position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/HjNNUVp.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} onClick={()=>dispatch(movieTrailer("https://res.cloudinary.com/dfx4uggfe/video/upload/v1624650554/MUL%C3%81N_Tr%C3%A1iler_Espa%C3%B1ol_DOBLADO_2_Nuevo_2020_Disney_kemb9g.mp4"))} color="brand.black" bgColor="brand.primary"  >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box height={["200px","200px","360px"]} position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/WmJVBQB.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("https://res.cloudinary.com/dfx4uggfe/video/upload/v1624650574/RAYA_Y_EL_%C3%9ALTIMO_DRAG%C3%93N_Tr%C3%A1iler_Espa%C3%B1ol_Latino_DOBLADO_2_Disney_2021_NUEVO_ap7wgc.mp4"))}  >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
              
        </SwiperSlide>
        <SwiperSlide>
        <Box height={["200px","200px","360px"]} position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/tmGy9lQ.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("https://res.cloudinary.com/dfx4uggfe/video/upload/v1624650573/Unidos_de_Disney_y_Pixar_Tr%C3%A1iler_oficial_1_Subtitulado_mxnywn.mp4"))}  >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box height={["200px","200px","360px"]}  position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/zytsah1.jpeg" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("https://res.cloudinary.com/dfx4uggfe/video/upload/v1624650590/WALL_E_2008_Tra%C3%ADler_Oficial_Doblado_Latino_-_Clasicos_de_Pixar_e7iblo.mp4"))} >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box height={["200px","200px","360px"]} position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/YnqRzkn.jpeg" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("https://res.cloudinary.com/dfx4uggfe/video/upload/v1624650490/Kung_Fu_Panda_-_Trailer_Espa%C3%B1ol_HD_e5cpcs.mp4"))} >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
              
        </Swiper>
        </Box>
      );
}

export default SliderMain
