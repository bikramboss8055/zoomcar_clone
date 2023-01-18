import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Slider from '../components/Slider'
import "../CSS/HomePage.css"
import firstimg from "../img/firstimg.png"

const HomePage = () => {
    return (
        <Box>
            <Box style={{ border: "1px solid red",height:"660px" }}>
                <Image h={"100%"} w={"100%"} src={firstimg}/>
                <Box  w={"40%"} style={{ border: "1px solid red",position:"absolute",top:"20%",left:"50%", transform:"translate(-50%)"}}>
                    <Heading style={{background:"rgba(0,0,0,0.4)"}} padding="20px" size='xl'>The perfect car for your next trip is just around the corner</Heading>
                </Box>
            </Box>
            <Slider/>
        </Box>
    )
}

export default HomePage