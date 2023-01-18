import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import caro1 from "../img/caro1.png"
import caro2 from "../img/caro2.png"
import caro3 from "../img/caro3.png"
import caro4 from "../img/caro4.png"
import caro5 from "../img/caro5.png"


const Slider = () => {
  const responsive = {
    D: {
      breakpoint: { max: 1860, min: 975 },
      items: 5
    },
    LD: {
      breakpoint: { max: 1400, min: 975 },
      items: 4
    },
    d: {
      breakpoint: { max: 975, min: 691 },
      items: 3
    },
    t: {
      breakpoint: { max: 691, min: 464 },
      items: 2
    },
    m: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const offer = [
    {
      image: caro1,
      name: "Enjoy Unlimited kilometers"
    },
    {
      image: caro2,
      name: "Zero Security Deposit"
    },
    {
      image: caro3,
      name: "100% Free Cancelation"
    },
    {
      image: caro4,
      name: "Zero Toll Charges"
    },
    {
      image: caro5,
      name: "Resheduble FREE"
    },
    {
      image: caro1,
      name: "Enjoy Unlimited kilometers"
    },
    {
      image: caro5,
      name: "Zero Toll Charges"
    },
    {
      image: caro2,
      name: "Zero Security Deposit"
    }

  ];


  return (
    <Box w={"100%"} margin="auto" mt={8} >
      <Carousel responsive={responsive}  >
        {offer.map((e,i) => {
          return (
            <Box key={i}  w={[250,250, 250, 250, 290]} margin="auto" spacing={"auto"} mt={5}  >
              <Box  bg="white" borderRadius={8}>
                <Center height={"100%"} >
                  <Image
                    src={e.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="sm"

                    height={"85%"}
                    
                  />
                </Center>
                
                  <Heading
                    size="xl"
                    color={"white"}
                    position={'absolute'}
                    bottom="40px"
                  >
                    {e.name}
                  </Heading>
                
                <Divider />
              </Box>
            </Box>
          )
        })}
      </Carousel>;
    </Box>
  )
}

export default Slider