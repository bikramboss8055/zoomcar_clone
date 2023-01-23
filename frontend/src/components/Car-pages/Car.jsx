import { Box, Flex, Text, Button, GridItem, Grid, SimpleGrid, Input, InputGroup, InputRightElement, IconButton, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Image, Avatar } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BiCar, BiRupee } from "react-icons/bi"
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineStar,AiOutlineArrowRight } from "react-icons/ai"
import { IoLocationOutline, IoCarSportSharp, IoCarSport, IoCarSportOutline } from "react-icons/io5"
import { HiOutlineArrowRight } from "react-icons/hi2"
import { GiPathDistance, GiGearStickPattern } from "react-icons/gi"
import { FaBullhorn, FaCarSide, FaHandHoldingWater, FaRegStar } from "react-icons/fa"
import { MdAirlineSeatReclineNormal } from "react-icons/md"
import { FcRating, FcApproval } from "react-icons/fc"
import { BsArrowRightCircle } from "react-icons/bs"


import "./Car.css"
import { ArrowRightIcon, PhoneIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getCars } from '../../redux/Car/action'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { Loading } from './Loading'
import Filter from './Filter'

const Car = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const dispatch = useDispatch();
    const {cars} = useSelector(store => store.car)
    const isLoading = useSelector(store => store.isLoading)
    const isError = useSelector(store => store.isError)
    // console.log(cars, "carsss")
    // console.log(location)

    // Fetching Data
    useEffect(() => {

        if (location || cars.length === 0) {
            const sortBy = searchParams.get('price')

            const getCarsParams = {
                params: {
                    fueltype: searchParams.get("fuel"),
                    cartype: searchParams.get("cartype"),
                    seat: searchParams.get("seat"),
                    transmission: searchParams.get("transmission"),
                    rating: searchParams.get("ratings"),
                    price: sortBy

                },
            }

            dispatch(getCars(getCarsParams))

        }




    }, [cars.length, dispatch, location.search])

    if (isError) {

        return <h1>...Error</h1>

    } else if (isLoading) {
        return <Loading />


    } else {

        return (
            <div className="mainDiv">
                <Flex h="100%" w="100%" justifyContent="space-between" >
                    <Box w="30%">
                        <Filter />

                    </Box>




                    <Box w="68%">
                        <Box className='searchBar' h="auto" >
                            <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={6}>
                                <Box h="60px" border="1px solid green" borderRadius="12px" boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                                    <Box display="flex" w="50%" h="100%" >
                                        <Box  w="30%" h="100%" >
                                            <FcApproval style={{ width: "50px", height: "30px", margin: "auto", marginTop: "10px" }} />
                                        </Box>
                                        <Box  w="auto" h="100%"  >
                                            <Box marginTop="12px">
                                                <Text fontSize="lg" as="b" marginTop="30px">Delhi NCR</Text>
                                            </Box>

                                        </Box>
                                    </Box>
                                </Box>
                                <Box h="60px" border="1px solid green" borderRadius="12px" boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                                    <Box display="flex" h="100%">
                                        <Box h="100%" w="33%">
                                            <Box marginTop="5px" marginLeft="15px">
                                                <Text noOfLines={1} fontSize="13px" fontWeight="500" color="#A8A8A8" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif">START DATE/TIME</Text>
                                            </Box>
                                            <Box marginLeft="15px">
                                                <Text noOfLines={1} fontSize="sm" as="b"  fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif"></Text>
                                            </Box>



                                        </Box>
                                        <Box  w="33%" h="100%">
                                            <HiOutlineArrowRight style={{ width: "50px", height: "30px", margin: "auto", marginTop: "10px" }}/>
                                        </Box>
                                        <Box  h="100%" w="33%">
                                            <Box marginTop="5px">
                                                <Text noOfLines={1} fontSize="13px" fontWeight="500" color="#A8A8A8" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif">END DATE/TIME</Text>
                                            </Box>
                                            <Box>
                                                <Text noOfLines={1} fontSize="sm" as="b"  fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif"></Text>
                                            </Box>



                                        </Box>
                                    </Box>
                                </Box>
                            </SimpleGrid>


                        </Box>


                        <Box className='carBox' marginTop="20px">
                            <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={6}>
                                {cars.length > 0 && cars.map((item) => {
                                    return (

                                        <Link to={`/car/${item._id}`} >
                                            <Box key={item._id} height='400px' boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" >
                                                <Box className='imagBox' h="60%" >
                                                    <Image w="100% " h="100%" src={item.image} />

                                                </Box>
                                                <Box h="13%" marginTop="-25px" display="flex" justifyContent="space-between">
                                                    <Box h="100%" w="18%" bg="white" borderLeftRadius="0px" borderRightRadius="10px"  >
                                                        <Box margin="auto" display="flex" w="auto" h="auto" justifyContent="space-around" >
                                                            <Image h="80%" w="30%" src="https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533" />
                                                            <Text fontSize='18px' >{item.rating}</Text>
                                                        </Box>

                                                    </Box>
                                                    <Box w='15%' >

                                                        <Avatar
                                                            cursor="pointer"
                                                            bg="#10a310"
                                                            aria-label='Call Segun'
                                                            size='md'
                                                            icon={<ArrowRightIcon />}
                                                        />



                                                    </Box>

                                                </Box>
                                                <Box h="30%" >
                                                    <Box h="33%" w="auto" marginLeft="10px">
                                                        <Text fontSize="2xl" fontWeight="600" color="#1F1F1F" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif">{item.title}</Text>

                                                    </Box>
                                                    <Box h="33%" display="flex">
                                                        <Box h="100%" w="auto" marginLeft="10px">
                                                            <Text fontSize="md" color="#A8A8A8" fontFamily="apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif">{item.transmission}</Text>
                                                        </Box>
                                                        <Box h="100%" w="auto" marginLeft="10px">
                                                            <Text fontSize="md" color="#A8A8A8" fontFamily="apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif">{item.fueltype}</Text>
                                                        </Box>
                                                        <Box h="100%" w="auto" marginLeft="10px">
                                                            <Text fontSize="md" color="#A8A8A8" fontFamily="apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif">{item.seat} Seats</Text>
                                                        </Box>

                                                    </Box>
                                                    <Box h="33%" display="flex" justifyContent="space-between" marginLeft="10px">
                                                        <Box h="100%" display="flex">
                                                            <Text fontSize="2xl" fontWeight="600" color="#1F1F1F" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif">${item.price}</Text>{" "}
                                                            <Box marginLeft="15px">

                                                            </Box>
                                                            <Text margin="auto" fontSize="md" fontWeight="600" color="#A8A8A8" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif" as='s'>${item.offprice}</Text>


                                                        </Box>
                                                        <Box h="100%"  >

                                                            <Text marginTop="5px" fontSize="md" fontWeight="600" color="#1F1F1F" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif"  >{item.km}</Text>


                                                        </Box>


                                                    </Box>

                                                </Box>


                                            </Box>

                                        </Link>




                                    )
                                })}

                            </SimpleGrid>
                            {/* <SimpleGrid columns={2} spacing={6}>
                                <Box  height='400px'>
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
                                
                            </SimpleGrid> */}


                        </Box>



                    </Box>
                </Flex>


            </div>
        )

    }




}

export default Car