import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Button, GridItem, Grid, SimpleGrid, Input, InputGroup, InputRightElement, IconButton, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Image, Avatar, AspectRatio, Radio } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import "./SingleCar.css"

import { FcApproval, FcHighPriority, FcBusinessman } from 'react-icons/fc'
import { BsDropletHalf, BsJournalBookmark, BsEmojiSunglasses, BsBootstrapFill } from 'react-icons/bs'
import { BiCar } from 'react-icons/bi'
import { CiPercent } from "react-icons/ci"
import { useDispatch } from 'react-redux'
import { getCarsbyId } from '../../redux/Car/action'






const Singlecar = () => {

    const dispatch = useDispatch()
    const { car_id } = useParams()
    console.log(car_id)
    const [data, setData] = useState({})

    const getData = async (url) => {

        try {
            let res = await fetch(url)
            let carData = await res.json()
            //console.log(carData)
            setData(carData)

        } catch (err) {
            console.log(err)

        }

    };

    useEffect(() => {
        getData(`http://localhost:8080/cars/${car_id}`)

    }, [car_id])


    console.log(data)


    return (
        <div className="mainDiv">






            <Flex h="100%" w="100%" justifyContent="space-around" >




                <Box w="63%" >
                    <Box boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                        <Box h="250px" w="70%" margin="auto">
                            <Image h="100%" w="100%" src={data.image} />

                        </Box>


                    </Box>

                    <Box className='secondBox' borderRadius="20px" h="auto" marginTop="25px" boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px">
                        <SimpleGrid gap={2} columns={{ base: 1, sm: 1, md: 1, lg: 2 }}>
                            <Box h="80px" >

                                <Box marginLeft="15px">
                                    <Text fontSize="2xl" fontWeight="600" color="#1F1F1F" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif">{data.title}</Text>

                                </Box>
                                <Box h="auto" display="flex" marginLeft="15px" >
                                    <Box h="100%" w="auto" >
                                        <Text fontSize="md" color="#A8A8A8" fontFamily="apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"> {data.transmission}</Text>
                                    </Box>
                                    <Box h="100%" w="auto" marginLeft="10px">
                                        <Text fontSize="md" color="#A8A8A8" fontFamily="apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif">{data.fueltype}</Text>
                                    </Box>
                                    <Box h="100%" w="auto" marginLeft="10px">
                                        <Text fontSize="md" color="#A8A8A8" fontFamily="apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif">{data.seat} seats</Text>
                                    </Box>


                                </Box>



                            </Box>
                            <Box h="80px" display="flex">
                                <Box marginLeft="15px">

                                    <Avatar marginTop="5px" size='lg' src='https://bit.ly/broken-link' />



                                </Box >
                                <Box h="auto" w="50%" marginLeft="10px" >
                                    <Text fontSize='lg' fontWeight="500" marginTop="6px">
                                        {data.owner}
                                    </Text>
                                    <Text fontSize='sm' fontWeight="300">
                                        Zoomhost since Dec'22
                                    </Text>

                                </Box>
                            </Box>


                        </SimpleGrid>

                        <Box h="40px"  >
                            <Box margin="auto" display="flex" w="auto" h="40px"  >
                                <Box h="60%" w="5%" marginLeft="15px">
                                    <Image h="80%" w="70%" src="https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533" />
                                </Box>
                                <Text fontSize='15px' marginLeft="2px">{data.rating}</Text>
                                <Text fontSize='15px' marginLeft="5px">1,698 kms driven</Text>
                            </Box>

                        </Box>

                        <SimpleGrid gap={2} columns={{ base: 1, sm: 1, md: 1, lg: 2 }}>
                            <Box h="80px" >

                                <Box marginLeft="10px" display="flex">
                                    <FcApproval style={{ width: "40px", height: "35px" }} />
                                    <Text marginLeft="10px" fontSize="xl" fontWeight="600" color="#1F1F1F" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif">Sat, 21 Jan, 08:00 AM</Text>

                                </Box>
                                <Box h="auto" w="auto" marginLeft="15px">
                                    <Text fontSize="sm" marginLeft="45px">Janakpuri , Delhi</Text>
                                </Box>


                            </Box>

                            <Box h="80px" >

                                <Box marginLeft="20px" display="flex">
                                    <FcHighPriority style={{ width: "40px", height: "35px" }} />
                                    <Text marginLeft="10px" fontSize="xl" fontWeight="600" color="#1F1F1F" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif">Sat, 21 Jan, 08:00 AM</Text>

                                </Box>
                                <Box h="auto" w="auto" marginLeft="25px"   >
                                    <Text fontSize="sm" marginLeft="45px">Janakpuri , Delhi</Text>
                                </Box>


                            </Box>


                        </SimpleGrid>





                    </Box>


                    <Box h="auto" marginTop="30px" >
                        <SimpleGrid gap={6} columns={{ base: 1, sm: 1, md: 1, lg: 2 }}>
                            <Box boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px">
                                <Box as="b" fontSize="2xl" marginLeft="20px" >
                                    Location Details
                                </Box>
                                <Box w="100%" marginLeft="15px" marginTop="10px">
                                    <AspectRatio maxW='92%' >
                                        <iframe height="300px"

                                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                                        >

                                        </iframe>
                                    </AspectRatio>


                                </Box>
                                <Box marginTop="10px">
                                    <Text fontSize="lg" marginLeft="20px">J3HJ+XV8, Janakpuri District Center, Janakpuri, Delhi, 110058, India</Text>
                                </Box>
                                <Box marginTop="10px">
                                    <Text fontSize="sm" marginLeft="20px" color="blue">Exact car location will be shared post booking</Text>
                                </Box>
                                <Box marginTop="20px"></Box>


                            </Box>
                            <Box h="auto" boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px">
                                <Box h="auto" marginLeft="15px">
                                    <Text as="b" fontSize="2xl">
                                        Keep In Mind
                                    </Text>
                                </Box>
                                <Box marginTop="20px" ></Box>
                                <Box display="flex" h="auto">
                                    <Box marginLeft="15px">
                                        <FcBusinessman style={{ width: "50px", height: "40px", }} />
                                    </Box>
                                    <Box marginLeft="15px">
                                        <Text fontSize="md" fontWeight="500">Driving License Mandatory</Text>
                                    </Box>



                                </Box>
                                <Box marginTop="20px" ></Box>
                                <Box display="flex" h="auto">
                                    <Box marginLeft="15px">
                                        <BsDropletHalf style={{ width: "50px", height: "40px", }} />
                                    </Box>
                                    <Box marginLeft="15px">
                                        <Text fontSize="md" fontWeight="400">Fare & Fuel Policy</Text>
                                        <Text fontSize="sm" fontWeight="400" color="#A8A8A8">Fare is inclusive of all taxes. Kindly return the car at the same fuel level as the trip start time</Text>
                                        <Text fontSize="md" fontWeight="400" as="u" color="#10a310">See Details</Text>


                                    </Box>


                                </Box>
                                <Box marginTop="20px" ></Box>
                                <Box display="flex" h="auto">
                                    <Box marginLeft="15px">
                                        <BiCar style={{ width: "50px", height: "40px", }} />
                                    </Box>
                                    <Box marginLeft="15px">
                                        <Text fontSize="md" fontWeight="400">Cancellation Policy</Text>
                                        <Text fontSize="sm" fontWeight="400" color="#A8A8A8">Hassle free cancellations and refunds at nominal charges</Text>
                                        <Text fontSize="md" fontWeight="400" as="u" color="#10a310">See Details</Text>


                                    </Box>

                                </Box>
                                <Box marginTop="20px" ></Box>
                                <Box display="flex" h="auto">
                                    <Box marginLeft="15px">
                                        <BsJournalBookmark style={{ width: "50px", height: "40px", }} />
                                    </Box>
                                    <Box marginLeft="15px">
                                        <Text fontSize="md" fontWeight="400">Agreement Policy</Text>
                                        <Text fontSize="sm" fontWeight="400" color="#A8A8A8">I hereby agree to the terms and conditions of the Lease Agreement with Host</Text>
                                        <Text fontSize="md" fontWeight="400" as="u" color="#10a310">See Details</Text>


                                    </Box>

                                </Box>
                                <Box marginTop="20px" ></Box>

                            </Box>

                        </SimpleGrid>


                    </Box>






                </Box>







                <Box className="mainfilterBox" w="30%">
                    <Box marginTop="15px" marginLeft="10px">
                    <Text  fontSize="20" as="b" marginLeft="15px" fontFamily="sans-serif">Other Charges</Text>

                    </Box>
                    <Box display="flex" h="70px"  marginTop="12px">
                        <Box marginLeft="15px">
                            <BiCar style={{ width: "50px", height: "40px", }} />


                        </Box>
                        <Box marginLeft="10px" marginTop="5px">
                            <Text fontSize="md" fontWeight="400">Convenience Fee (₹199) ₹99</Text>

                        </Box>


                    </Box>
                    <Box h="auto" >
                        <Box h="auto" marginLeft="15px">
                            <Text as="b" fontSize="19px" fontFamily="sans-serif">
                                TRIP PROTECTION PACKAGE
                            </Text>
                        </Box>
                        <Box marginTop="20px" ></Box>
                        <Box display="flex" h="auto"  justifyContent="space-between" w="90%">
                            <Box marginLeft="15px">
                                <FcBusinessman style={{ width: "50px", height: "40px", }} />
                            </Box>
                            <Box marginLeft="15px" >
                                <Text fontSize="md" fontWeight="500">Basic (₹185)</Text>
                                <Text fontSize="sm" fontWeight="400" color="#A8A8A8">You pay up to INR 3499 in case of any damage</Text>
                            </Box>

                            <Box  margin="auto" >
                                <Radio size='lg' name='1' colorScheme='green' />

                            </Box>





                        </Box>
                        <Box marginTop="20px" ></Box>
                        <Box display="flex" h="auto">
                            <Box marginLeft="15px" marginTop="10px">
                                <BsEmojiSunglasses style={{ width: "50px", height: "30px", }} />
                            </Box>
                            <Box marginLeft="15px">
                                <Text fontSize="md" fontWeight="400">Standard (₹369)</Text>
                                <Text fontSize="sm" fontWeight="400" color="#A8A8A8">You pay up to INR 999 in case of any damage</Text>
                                <Text fontSize="md" fontWeight="400" color="#10a310">RECOMMENDED FOR YOU</Text>


                            </Box>
                            <Box  margin="auto" >
                                <Radio size='lg' name='1' colorScheme='green' />

                            </Box>


                        </Box>
                        <Box marginTop="20px" ></Box>
                        <Box display="flex" h="auto">
                            <Box marginLeft="15px" marginTop="10px">
                                <BsBootstrapFill style={{ width: "50px", height: "28px", }} />
                            </Box>
                            <Box marginLeft="15px">
                                <Text fontSize="md" fontWeight="400">Peace of Mind (₹431)</Text>
                                <Text fontSize="sm" fontWeight="400" color="#A8A8A8">You pay up to INR 99 in case of any damage</Text>



                            </Box>
                            <Box  margin="auto" >
                                <Radio size='lg' name='1' colorScheme='green' />

                            </Box>



                        </Box>
                        <Box marginTop="30px" ></Box>
                        <Box h="auto" >
                            <Text marginLeft="18px" fontWeight="400" fontSize="17">How Trip Protection Works?</Text>
                            <Text marginLeft="18px" fontWeight="300" fontSize="15">Zoomcar will assist in damage repair costs up to the amount as per the maximum deductible limit. • Does not cover any third-party liability or any intentional damage or damage that occurred due to intoxication or high speed, rash, or negligent driving. • Please read Zoomcar policy to know more.</Text>


                        </Box>
                        <Box marginTop="60px"  h="200px">

                            <Box display="flex" >
                                <Box w="60%" marginLeft="15px">
                                    <Text marginLeft="10px" fontSize="2xl" fontWeight="600" color="#1F1F1F" fontFamily="Inter, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Sans-Serif">{`₹ ${data.price}`}</Text>

                                </Box>
                                <Box w="40%" display="flex">
                                    <CiPercent style={{ width: "40px", height: "35px" }} />
                                    <Text fontWeight="500" marginLeft="5px" marginTop="4px" fontSize="md">Apply Coupon</Text>

                                </Box>
                            </Box>

                            <Box w="100%"  marginTop="20px" justifySelf="center">
                               
                                <Button
                                    marginLeft="20px"
                                    size='md'
                                    height='58px'
                                    width='90%'
                                    border='2px'
                                    bg='#10a310'
                                    color="white"
                                    colorScheme="#10a310"
                                >
                                    PROCEED TO PAY ₹ {data.price}
                                </Button>

                                
                               

                            </Box>

                        </Box>

                    </Box>


                </Box>




            </Flex>


        </div>
    )
}

export default Singlecar
