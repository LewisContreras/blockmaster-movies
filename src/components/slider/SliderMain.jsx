import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { Img } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { HStack, Box } from "@chakra-ui/layout";
import { FaPlay, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { movieTrailer } from "../../actions/moviesActions";
import { sliderImages } from "../../localData/sliderImages";

SwiperCore.use([Navigation, Pagination]);

function SliderMain() {
  const dispatch = useDispatch();

  return (
    <Box
      height={["220px", "220px", "400px"]}
      px="20px"
      mt={["10px", "10px", "120px"]}
    >
      <Swiper spaceBetween={8} navigation pagination>
        {sliderImages.map((imgInfo, index) => (
          <SwiperSlide key={index}>
            <Box height={["200px", "200px", "360px"]} position="relative">
              <Img
                borderRadius="10px"
                width="100%"
                height="100%"
                src={imgInfo.url}
                alt={imgInfo.alt}
              />
              <HStack position="absolute" bottom="20px" left="20px">
                <Button
                  leftIcon={<FaPlay />}
                  color="brand.black"
                  bgColor="brand.primary"
                  onClick={() =>
                    dispatch(
                      movieTrailer(
                        `https://res.cloudinary.com/dfx4uggfe/video/upload/${imgInfo.moviePath}`
                      )
                    )
                  }
                >
                  VER AHORA
                </Button>
                <Button
                  disabled
                  leftIcon={<FaPlus />}
                  border="2px solid"
                  borderColor="brand.primary"
                  color="brand.primary"
                  bgColor="brand.background"
                >
                  VER DESPUÉS
                </Button>
              </HStack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default SliderMain;
