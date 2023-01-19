import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Slider from '../components/Slider'
import Slider2 from '../components/Slider2'
import "../CSS/HomePage.css"
import firstimg from "../img/firstimg.png"
import secimg from "../img/secimg.png"


const HomePage = () => {
    return (
        <Box bg={"#f5f5f5"}>
            <Box h={660} style={{ border: "1px solid red" }}>
                <Image h={"100%"} w={"100%"} src={firstimg} />
                <Center w={[360, 480, 700, 900, 1100]} p={30} style={{ background: "rgba(0,0,0,0.4)", border: "1px solid red", position: "absolute", top: "60px", left: "50%", transform: "translate(-50%)" }}>
                    <Flex flexDirection={'column'}>
                        <Box><Heading textAlign="center" color={"white"} margin="0" size={["md", "lg", 'xl']}>The perfect car for your next trip is just around the corner</Heading></Box>
                        <Center><Box><Heading color={"white"} margin="0" size={["md", "lg", 'lg']}>Book your drive now!</Heading></Box></Center>
                    </Flex>
                </Center>
            </Box>

            <Center style={{ height: "140px", }}>

                <Heading fontWeight="" fontSize={["lg", "3xl", "3xl", '4xl']} >CHOOSE FROM OUR WIDE RANGE OF CARS</Heading>

            </Center>

            <Slider2 />

            <Box h={660} position={'relative'}>
                <Image h={"100%"} w={"100%"} src={secimg} />
                <Center w={[360, 480, 700, 900, 950]} p={30} style={{ background: "rgba(0,0,0,0.4)", position: "absolute", top: "60px", left: "50%", transform: "translate(-50%)" }}>
                    <Flex flexDirection={'column'}>
                        <Box><Heading textAlign="center" color={"white"} margin="0" size={["md", "lg", 'xl']}>Largest car sharing marketplace</Heading></Box>
                        <Box><Heading paddingTop="10px" textAlign="center" color={"white"} margin="0" size={["xs", "md", 'md']}>Sedans for short distances, SUVs for tough terrains, luxury cars for surprises - we’ve got it all!</Heading></Box>
                    </Flex>
                </Center>
            </Box>
            
            <Box style={{ height: "130px", marginTop:"12px" }}>
                <Center p={30}>
                    <Flex flexDirection={'column'}>
                        <Box><Heading textAlign="center" color={"black"} fontWeight="" margin="0" size={["md", "lg", 'xl']}>UNMATCHED BENEFITS</Heading></Box>
                        <Center><Box><Heading textAlign="center" color={"black"} fontWeight="xl" margin="0" size={["md", "md", 'md']}>Drive everywhere with freedom</Heading></Box></Center>
                    </Flex>
                </Center>
            </Box>

            <Slider />


            <Box style={{ height: "130px", marginTop:"12px" }}>
                <Center p={30}>
                    <Flex flexDirection={'column'}>
                        <Box><Heading textAlign="center" color={"black"} fontWeight="" margin="0" size={["md", "lg", 'xl']}>WE LOVE GIVING BEST EXPERIENCES</Heading></Box>
                        <Center><Box><Heading textAlign="center" color={"black"} fontWeight="xl" margin="0" size={["md", "md", 'md']}>We cover you under all the circumstances to the best journey</Heading></Box></Center>
                    </Flex>
                </Center>
            </Box>



            <Box h={660} position={'relative'} marginTop={10}>
                <Image h={"100%"} w={"100%"} src={secimg} />
                <Center w={[360, 480, 600, 600, 600]} p={30} style={{ background: "rgba(0,0,0,0.4)", position: "absolute", top: "60px", left: "50%", transform: "translate(-50%)" }}>
                    <Flex flexDirection={'column'}>
                        <Box><Heading textAlign="center" color={"white"} margin="0" size={["md", "lg", 'xl']}>Drive worry free with Zoomcar!</Heading></Box>
                        <Box><Heading paddingTop="10px" textAlign="center" color={"white"} margin="0" size={["xs", "md", 'md']}>24X7 Roadside assistance whenever you need</Heading></Box>
                    </Flex>
                </Center>
            </Box>


            

            





        </Box>
    )
}

export default HomePage