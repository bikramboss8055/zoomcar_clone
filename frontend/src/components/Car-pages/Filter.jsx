//import { useState } from 'react'
import { Box, Flex, Text, Button, GridItem, Grid, SimpleGrid, Input, InputGroup, InputRightElement, IconButton, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Image, Avatar } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { getCars } from '../../redux/Car/action'
import { Link, useSearchParams } from 'react-router-dom'
import { Loading } from './Loading'

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const initialPrice = searchParams.getAll("price")
    console.log(initialPrice[0])

    const initialFuel = searchParams.getAll("fuel")
    console.log(initialFuel[0])

    const initialCarType = searchParams.getAll("cartype")
    console.log(initialCarType[0])

    const initialCarSeat = searchParams.getAll("seat")
    console.log(initialCarSeat[0])

    const initialTranse = searchParams.getAll("transmission")
    console.log(initialTranse[0])

    const initialRating = searchParams.getAll("ratings")
    console.log(initialRating[0])


    const [price, setPrice] = useState(initialPrice[0] || "")
    const [fuel, setFuel] = useState(initialFuel[0] || "")
    const [cartype, setCarType] = useState(initialCarType[0] || "")
    const [seat, setSeats] = useState(initialCarSeat[0] || "")
    const [transmission, setTransmission] = useState(initialTranse[0] || "")
    const [ratings, setRatings] = useState(initialRating[0] || "")


    //Filter By Fuel 






    useEffect(() => {
        let params = {}
        if (price) {
            params.price = price;
        }
        if (fuel) {
            params.fuel = fuel
        }
        if (cartype) {
            params.cartype = cartype
        }
        if (seat) {
            params.seat = seat
        }
        if (transmission) {
            params.transmission = transmission
        }
        if (ratings) {
            params.ratings = ratings
        }

        setSearchParams(params)

    }, [price, fuel, cartype, seat, ratings, transmission, setSearchParams])



    return (
        <div>
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
                                <button onClick={() => setPrice("desc")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <Box display="flex" justifyContent="space-evenly" w="auto">
                                            <BiRupee style={{ height: "30px", width: "25px", }} />
                                            <AiOutlineArrowUp style={{ height: "30px", width: "25px", }} />

                                        </Box>

                                        <Text fontWeight="600" fontSize='13.5px' as="b">High to Low</Text>

                                    </Box>

                                </button>


                            </Box>
                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                <button onClick={() => setPrice("asc")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <Box display="flex" justifyContent="space-evenly" w="auto">
                                            <BiRupee style={{ height: "30px", width: "25px", }} />
                                            <AiOutlineArrowDown style={{ height: "30px", width: "25px", }} />

                                        </Box>

                                        <Text fontWeight="600" fontSize='13.5px' as="b">Low to High</Text>

                                    </Box>


                                </button>

                            </Box>
                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                <button onClick={() => setRatings("desc")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <AiOutlineStar style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">Best Rated</Text>

                                    </Box>
                                </button>


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
                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center">
                                <button onClick={() => setCarType("Hatchback")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <FaCarSide style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">Hatchback</Text>

                                    </Box>
                                </button>

                            </Box>

                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center">

                                <button onClick={() => setCarType("Sedan")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <IoCarSportSharp style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">Sedan</Text>

                                    </Box>

                                </button>

                            </Box>


                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center">
                                <button onClick={() => setCarType("SUV")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <IoCarSport style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">SUV</Text>

                                    </Box>

                                </button>


                            </Box>
                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center">

                                <button onClick={() => setCarType("Luxury")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <IoCarSportOutline style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">Luxury</Text>

                                    </Box>

                                </button>


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
                                <button onClick={() => setSeats(4)}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <MdAirlineSeatReclineNormal style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">4 Seater</Text>

                                    </Box>
                                </button>




                            </Box>

                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                <button onClick={() => setSeats(5)}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <MdAirlineSeatReclineNormal style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">5 Seater</Text>

                                    </Box>
                                </button>





                            </Box>


                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                <button onClick={() => setSeats(7)}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <MdAirlineSeatReclineNormal style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">7 Seater</Text>

                                    </Box>
                                </button>


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
                                <button onClick={() => setFuel("Petrol")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <FaHandHoldingWater style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">Petrol</Text>

                                    </Box>


                                </button>



                            </Box>

                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                <button onClick={() => setFuel("Diesel")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <FaHandHoldingWater style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">Diesel</Text>

                                    </Box>


                                </button>



                            </Box>


                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                <button onClick={() => setFuel("CNG")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <FaHandHoldingWater style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">CNG</Text>

                                    </Box>

                                </button>


                            </Box>
                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >
                                <button onClick={() => setFuel("Electric")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <FaHandHoldingWater style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">Electric</Text>

                                    </Box>

                                </button>


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
                                <button onClick={() => setTransmission("Manual")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <GiGearStickPattern style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">Manual</Text>

                                    </Box>

                                </button>




                            </Box>

                            <Box w='100%' h='20' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" textAlign="center"  >

                                <button onClick={() => setTransmission("Automatic")}>
                                    <Box h="auto" marginTop="8px" cursor='pointer' >
                                        <GiGearStickPattern style={{ height: "30px", width: "40px", margin: "auto" }} />
                                        <Text fontWeight="600" fontSize='13.5px' as="b">Automatic</Text>

                                    </Box>
                                </button>





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
        </div>
    )
}

export default Filter