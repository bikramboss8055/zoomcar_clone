import { Box, Flex, Text, Button, GridItem, Grid, SimpleGrid, Input, InputGroup, InputRightElement, IconButton, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Image, Avatar } from '@chakra-ui/react'
import React from 'react'
import { BiCar, BiRupee } from "react-icons/bi"
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineStar } from "react-icons/ai"
import { IoLocationOutline, IoCarSportSharp, IoCarSport, IoCarSportOutline } from "react-icons/io5"
import { GrCar } from "react-icons/gr"
import { GiPathDistance, GiGearStickPattern } from "react-icons/gi"
import { FaBullhorn, FaCarSide, FaHandHoldingWater, FaRegStar } from "react-icons/fa"
import { MdAirlineSeatReclineNormal } from "react-icons/md"
import { FcRating } from "react-icons/fc"
import { BsArrowRightCircle } from "react-icons/bs"


import "./Car.css"
import { ArrowRightIcon, PhoneIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons'

const Car = () => {


    return (
        <div className="mainDiv">
            <Flex h="100%" w="100%" style={{}} >
                <Box className="mainfilterBox" w="30%">
                    <Box className="filterBox">
                        <Box className="filterOne">
                            <Box display="flex" justifyContent="space-between" marginTop="10px">
                                <Box >
                                    <Text fontSize='2xl' as="b"  >Sort & Filters</Text>
                                </Box>
                                <Box overflow="hidden" >

                                    <Button w="auto" fontSize='2xl' as='b' color="#10A310" cursor="pointer">RESET</Button>

                                </Box>
                            </Box>

                            <Box marginTop="15px">
                                <Text fontSize='xl' fontWeight="600">Sort-By</Text>
                            </Box>

                            <Box marginTop="15px" h="auto"  >
                                <SimpleGrid gap={2} columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center" >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <BiCar style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Relevance</Text>

                                        </Box>



                                    </Box>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <Box display="flex" justifyContent="space-evenly" w="auto">
                                                <BiRupee style={{ height: "30px", width: "25px", }} />
                                                <AiOutlineArrowUp style={{ height: "30px", width: "25px", }} />

                                            </Box>

                                            <Text fontWeight="600" fontSize='13.5px' as="b">High to Low</Text>

                                        </Box>

                                    </Box>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <Box display="flex" justifyContent="space-evenly" w="auto">
                                                <BiRupee style={{ height: "30px", width: "25px", }} />
                                                <AiOutlineArrowDown style={{ height: "30px", width: "25px", }} />

                                            </Box>

                                            <Text fontWeight="600" fontSize='13.5px' as="b">Low to High</Text>

                                        </Box>

                                    </Box>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <AiOutlineStar style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Best Rated</Text>

                                        </Box>

                                    </Box>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <IoLocationOutline style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Distance</Text>

                                        </Box>

                                    </Box>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <GrCar style={{ height: "30px", width: "25px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Car Age</Text>

                                        </Box>

                                    </Box>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <GiPathDistance style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Kms Driven</Text>

                                        </Box>

                                    </Box>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <FaBullhorn style={{ height: "30px", width: "24px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Popularity</Text>

                                        </Box>

                                    </Box>
                                </SimpleGrid>
                            </Box>

                            <hr />

                            <Box border="1px solid white" marginTop="35px" h="auto">
                                <Box marginTop="5px" h="auto" display='flex'>
                                    <Box >
                                        <BiCar style={{ height: "35px", width: "45px", margin: "auto" }} />
                                    </Box>
                                    <Box>
                                        <Text fontWeight="600" fontSize='16.5px' as="b">Include specific cars </Text><br />
                                        <Text fontWeight="600" fontSize='13.5px' as="b" color="gray"> Any specific model in mind? Find it here. We will include them to search</Text>
                                    </Box>

                                </Box>

                                <Box marginTop="10px" display="flex">
                                    <Box w="10%">

                                    </Box>
                                    <Box w="85%">
                                        <InputGroup>
                                            <InputRightElement
                                                pointerEvents='none'
                                                children={<Search2Icon color='gray.500' marginTop="-8px" />}
                                            />
                                            <Input type='tel' placeholder='Type search "Hero Honda' size='sm' />
                                        </InputGroup>

                                    </Box>

                                </Box>

                                <Box border="1px solid white" h="20px" marginTop="5px">

                                </Box>




                            </Box>

                            {/* //////  Car TYpe  ///////////// */}

                            <Box marginTop="25px">
                                <Text fontSize='xl' fontWeight="600">Car-type</Text>
                            </Box>


                            <Box marginTop="25px" h="auto"  >
                                <SimpleGrid gap={2} columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <FaCarSide style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Hatchback</Text>

                                        </Box>



                                    </Box>

                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <IoCarSportSharp style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Sedan</Text>

                                        </Box>



                                    </Box>


                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <IoCarSport style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">SUV</Text>

                                        </Box>

                                    </Box>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <IoCarSportOutline style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Luxury</Text>

                                        </Box>

                                    </Box>


                                </SimpleGrid>
                            </Box>

                            {/* //////  Seats ///////////// */}

                            <Box marginTop="25px">
                                <Text fontSize='xl' fontWeight="600">Seats-type</Text>
                            </Box>


                            <Box marginTop="25px" h="auto"  >
                                <SimpleGrid gap={2} columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <MdAirlineSeatReclineNormal style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">4 Seater</Text>

                                        </Box>



                                    </Box>

                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <MdAirlineSeatReclineNormal style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">5 Seater</Text>

                                        </Box>



                                    </Box>


                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <MdAirlineSeatReclineNormal style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">7 Seater</Text>

                                        </Box>

                                    </Box>



                                </SimpleGrid>
                            </Box>

                            {/* //////  Fulel TYpe  ///////////// */}

                            <Box marginTop="25px">
                                <Text fontSize='xl' fontWeight="600">Fuel-type</Text>
                            </Box>


                            <Box marginTop="25px" h="auto"  >
                                <SimpleGrid gap={2} columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <FaHandHoldingWater style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Pertrol</Text>

                                        </Box>



                                    </Box>

                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <FaHandHoldingWater style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Diesel</Text>

                                        </Box>



                                    </Box>


                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <FaHandHoldingWater style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">CNG</Text>

                                        </Box>

                                    </Box>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <FaHandHoldingWater style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Electric</Text>

                                        </Box>

                                    </Box>


                                </SimpleGrid>
                            </Box>


                            {/* //////  Gear TYpe  ///////////// */}

                            <Box marginTop="25px">
                                <Text fontSize='xl' fontWeight="600">Transmission-type</Text>
                            </Box>


                            <Box marginTop="25px" h="auto"  >
                                <SimpleGrid gap={2} columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <GiGearStickPattern style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Manual</Text>

                                        </Box>



                                    </Box>

                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <GiGearStickPattern style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">Automatic</Text>

                                        </Box>



                                    </Box>





                                </SimpleGrid>
                            </Box>





                            {/* //////  Ratings TYpe  ///////////// */}

                            <Box marginTop="25px">
                                <Text fontSize='xl' fontWeight="600">Ratings</Text>
                            </Box>


                            <Box marginTop="25px" h="auto"  >
                                <SimpleGrid gap={2} columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <FcRating style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">3+ Rated</Text>

                                        </Box>



                                    </Box>

                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <FcRating style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">4+ Rated</Text>

                                        </Box>



                                    </Box>


                                    <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                        <Box h="auto" marginTop="8px" cursor='pointer' >
                                            <FcRating style={{ height: "30px", width: "40px", margin: "auto" }} />
                                            <Text fontWeight="600" fontSize='13.5px' as="b">All </Text>

                                        </Box>

                                    </Box>



                                </SimpleGrid>
                            </Box>



                            {/* *************** KMS Running */}
                            <Box marginTop="25px">
                                <Text fontSize='xl' fontWeight="600">Kms run</Text>
                            </Box>


                            <Box marginTop="25px" w="90%">
                                <RangeSlider defaultValue={[0, 10]} min={0} max={100} step={5} w="100%">
                                    <RangeSliderTrack bg='gray.300' h="10px" >
                                        <RangeSliderFilledTrack bg='#10A310' />
                                    </RangeSliderTrack>

                                    <RangeSliderThumb boxSize={14} index={1} bg="white" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius="90%"   >800KM</RangeSliderThumb>
                                </RangeSlider>
                            </Box>


                            {/* *************** Car Age */}
                            <Box marginTop="25px">
                                <Text fontSize='xl' fontWeight="600">Car Age</Text>
                            </Box>


                            <Box marginTop="25px" w="90%">
                                <RangeSlider defaultValue={[0, 10]} min={0} max={100} step={5} w="100%">
                                    <RangeSliderTrack bg='gray.300' h="10px" >
                                        <RangeSliderFilledTrack bg='#10A310' />
                                    </RangeSliderTrack>

                                    <RangeSliderThumb boxSize={14} index={1} bg="white" borderRadius="90%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >8 Years</RangeSliderThumb>
                                </RangeSlider>
                            </Box>

                            <Box border="1px solid white" h="100px">




                            </Box>




                        </Box>



                    </Box>

                </Box>




                <Box border="1px solid green" w="70%">
                    <Box className='searchBar' h="100px" border="1px solid green">


                    </Box>


                    <Box className='carBox'>
                        <SimpleGrid columns={2} spacing={6}>
                            <Box border="1px solid red" height='400px'>
                                <Box className='imagBox' h="60%" border="1px solid black">
                                    <Image w="100% " h="100%" src="https://zoomcar-assets.zoomcar.com/photographs/original/13284dce101cd7020c977103e2cb5f33bee3b0e9.png?1663874479" />

                                </Box>
                                <Box h="13%" border="1px solid black" marginTop="-25px" display="flex" justifyContent="space-between">
                                    <Box h="100%" w="18%" border="1px solid blue" bg="white" borderLeftRadius="0px" borderRightRadius="10px"  >
                                        <Box margin="auto" display="flex" w="auto" h="auto" border="1px solid blue" justifyContent="space-around" >
                                            <Image h="80%" w="30%" src="https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533" />
                                            <Text fontSize='18px' >4.4</Text>
                                        </Box>

                                    </Box>
                                    <Box border="1px solid black" w='15%' >

                                        <Avatar
                                            cursor="pointer"
                                            bg="#10a310"
                                            aria-label='Call Segun'
                                            size='md'
                                            icon={<ArrowRightIcon />}
                                        />



                                    </Box>

                                </Box>
                                <Box h="30%" border="1px solid yellow">
                                    <Box border="1px solid black" h="33%" w="auto" marginLeft="10px">
                                        <Text fontSize="2xl" fontWeight="600" color="#1F1F1F" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif">Suzuki Ignis</Text>

                                    </Box>
                                    <Box border="1px solid black" h="33%" display="flex">
                                        <Box border="1px solid orange" h="100%" w="auto" marginLeft="10px">
                                            <Text fontSize="md" color="#A8A8A8" fontFamily="apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif">Manual</Text>
                                        </Box>
                                        <Box border="1px solid orange" h="100%" w="auto" marginLeft="10px">
                                            <Text fontSize="md" color="#A8A8A8" fontFamily="apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif">Petrol</Text>
                                        </Box>
                                        <Box border="1px solid orange" h="100%" w="auto" marginLeft="10px">
                                            <Text fontSize="md" color="#A8A8A8" fontFamily="apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif">5 Seats</Text>
                                        </Box>

                                    </Box>
                                    <Box border="1px solid black" h="33%" display="flex" justifyContent="space-between" marginLeft="10px">
                                        <Box border="1px solid black" h="100%" display="flex">
                                            <Text fontSize="2xl" fontWeight="600" color="#1F1F1F" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif">$7,104</Text>{" "}
                                            <Box marginLeft="15px">

                                            </Box>
                                            <Text margin="auto" fontSize="md" fontWeight="600" color="#A8A8A8" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif" as='s'>$9,100</Text>


                                        </Box>
                                        <Box border="1px solid black" h="100%"  >
                                           
                                                <Text marginTop="5px"  border="1px solid black" fontSize="md" fontWeight="600" color="#1F1F1F" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif"  >4.1 km away</Text>
                                           

                                        </Box>


                                    </Box>

                                </Box>


                            </Box>
                            <Box border="1px solid red" height='400px'></Box>
                            <Box border="1px solid red" height='400px'></Box>
                            <Box border="1px solid red" height='400px'></Box>
                            <Box border="1px solid red" height='400px'></Box>
                        </SimpleGrid>


                    </Box>



                </Box>
            </Flex>


        </div>
    )
}

export default Car