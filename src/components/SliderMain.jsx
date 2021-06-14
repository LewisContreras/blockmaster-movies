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
        <Box   px="20px" mt="120px">
            <Swiper
        spaceBetween={8}
        navigation pagination 
        >
          <SwiperSlide>
              <Box  position="relative">
                  <Img borderRadius="10px" maxWidth="100%" height="100%" src="https://i.imgur.com/HjNNUVp.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} onClick={()=>dispatch(movieTrailer("vi5N5BBteuJbavKhFF3wKcfX"))} color="brand.black" bgColor="brand.primary"  >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box position="relative">
                  <Img borderRadius="10px" maxWidth="100%" height="100%" src="https://i.imgur.com/WmJVBQB.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("vi3qTOODwdmjoSayJDcE7zYk"))}  >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
              
        </SwiperSlide>
        <SwiperSlide>
        <Box position="relative">
                  <Img borderRadius="10px" maxWidth="100%" height="100%" src="https://i.imgur.com/tmGy9lQ.png" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("vi6ZkGb8DIxGJoUNbht3DyCC"))}  >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box height="310px" position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/zytsah1.jpeg" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("vi1KFNGJt4RMIA8K7wyBuybW"))} >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box height="310px" position="relative">
                  <Img borderRadius="10px" width="100%" height="100%" src="https://i.imgur.com/YnqRzkn.jpeg" />
                  <HStack position="absolute" bottom="20px" left="20px">
                    <Button leftIcon={<FaPlay/>} color="brand.black" bgColor="brand.primary" onClick={()=>dispatch(movieTrailer("vi2PbWYbytA6g5R1mzvo4HK7"))} >VER AHORA</Button>
                    <Button disabled leftIcon={<FaPlus/>} border="2px solid" borderColor="brand.primary" color="brand.primary" bgColor="brand.background" >VER DESPUÉS</Button>
                  </HStack>
              </Box>
        </SwiperSlide>
              
        </Swiper>
        </Box>
      );
}

export default SliderMain
