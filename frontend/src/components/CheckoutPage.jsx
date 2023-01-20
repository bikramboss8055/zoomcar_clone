import {
  Box,
  Divider,
  Flex,
  Image,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  FaCircle,
  FaRegDotCircle,
  FaRegStopCircle,
  FaStopCircle,
} from "react-icons/fa";

function CheckoutPage() {
  return (
    <div>
      <Flex mx="100px" mt="30px" justifyContent={"space-between"} gap="10px">
        {/*---------------------------------- Payment Details ------------------------------------------------------------ */}

        <Box w="69%">
          <Text as="b" fontSize="xl">
            Select a Payment method
          </Text>
          <Box>
            <Tabs
              //   borderTop={"1px solid lightgray"}
              border="0.5px solid lightgray"
              boxShadow="xl"
              mt="10px"
              variant="enclosed"
              align="start"
              orientation="vertical"
            >
              <TabList w="550px" px="10px">
                <Tab alignItems="start" justifyContent="start">
                  <Flex px="10px" py="10px" alignItems="start" gap="10px">
                    <Image
                      w="32px"
                      h="32px"
                      src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574"
                    />
                    <Box textAlign={"start"}>
                      <Text
                        fontSize="14px"
                        lineHeight="20px"
                        fontWeight={"400"}
                        letterSpacing="0.24px"
                        color="#1f1f1f"
                      >
                        UPI
                      </Text>
                      <Text
                        mt="3px"
                        fontSize="12px"
                        lineHeight="16px"
                        fontWeight={"400"}
                        letterSpacing="0.4px"
                        color="#a8a8a8"
                      >
                        GooglePay, PhonePe, BHIM UPI
                      </Text>
                    </Box>
                  </Flex>
                </Tab>
                <Tab alignItems="start" justifyContent="start">
                  <Flex px="10px" py="10px" alignItems="start" gap="10px">
                    <Image
                      w="32px"
                      h="32px"
                      src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494"
                    />
                    <Box textAlign={"start"}>
                      <Text
                        fontSize="14px"
                        lineHeight="20px"
                        fontWeight={"400"}
                        letterSpacing="0.24px"
                        color="#1f1f1f"
                      >
                        Credit / Debit / ATM Card
                      </Text>
                      <Text
                        mt="3px"
                        fontSize="12px"
                        lineHeight="16px"
                        fontWeight={"400"}
                        letterSpacing="0.4px"
                        color="#a8a8a8"
                      >
                        All Major card provider are supported
                      </Text>
                    </Box>
                  </Flex>
                </Tab>
                <Tab alignItems="start" justifyContent="start">
                  <Flex px="10px" py="10px" alignItems="start" gap="10px">
                    <Image
                      w="32px"
                      h="32px"
                      src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014"
                    />
                    <Box textAlign={"start"}>
                      <Text
                        fontSize="14px"
                        lineHeight="20px"
                        fontWeight={"400"}
                        letterSpacing="0.24px"
                        color="#1f1f1f"
                      >
                        Mobile wallet
                      </Text>
                      <Text
                        mt="3px"
                        fontSize="12px"
                        lineHeight="16px"
                        fontWeight={"400"}
                        letterSpacing="0.4px"
                        color="#a8a8a8"
                      >
                        All maojor wallets are supported
                      </Text>
                    </Box>
                  </Flex>
                </Tab>
                <Tab alignItems="start" justifyContent="start">
                  <Flex px="10px" py="10px" alignItems="start" gap="10px">
                    <Image
                      w="32px"
                      h="32px"
                      src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529"
                    />
                    <Box textAlign={"start"}>
                      <Text
                        fontSize="14px"
                        lineHeight="20px"
                        fontWeight={"400"}
                        letterSpacing="0.24px"
                        color="#1f1f1f"
                      >
                        Net Banking
                      </Text>
                      <Text
                        mt="3px"
                        fontSize="12px"
                        lineHeight="16px"
                        fontWeight={"400"}
                        letterSpacing="0.4px"
                        color="#a8a8a8"
                      >
                        All maojor Banks are supported
                      </Text>
                    </Box>
                  </Flex>
                </Tab>
              </TabList>

              <TabPanels w="550px" borderLeft="1px solid lightgrey">
                <TabPanel>
                  <Flex>
                    <Box>
                      <Box>
                        <Text
                          fontSize="16px"
                          lineHeight="24px"
                          fontWeight={"600"}
                          letterSpacing="0.24px"
                          color="#1f1f1f"
                        >
                          Select a UPI APP
                        </Text>
                        <Text
                          fontSize="12px"
                          lineHeight="16px"
                          fontWeight={"400"}
                          letterSpacing="0.4px"
                          color="#a8a8a8"
                        >
                          Amount:
                        </Text>
                      </Box>
                      <Flex
                        mt="20px"
                        px="10px"
                        py="10px"
                        alignItems="start"
                        gap="10px"
                      >
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            GooglePay
                          </Text>
                        </Box>
                      </Flex>
                      <Flex px="10px" py="10px" alignItems="start" gap="10px">
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            PhonPe
                          </Text>
                        </Box>
                      </Flex>
                      <Flex px="10px" py="10px" alignItems="start" gap="10px">
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            Paytm UPI
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      ml="200px"
                    >
                      <Image
                        w="150px"
                        src="https://i.ibb.co/G7KTpB4/frame.png"
                      />
                    </Box>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <Text
                      fontSize="16px"
                      lineHeight="24px"
                      fontWeight={"600"}
                      letterSpacing="0.24px"
                      color="#1f1f1f"
                    >
                      Enter Card details
                    </Text>
                    <Text
                      fontSize="12px"
                      lineHeight="16px"
                      fontWeight={"400"}
                      letterSpacing="0.4px"
                      color="#a8a8a8"
                    >
                      Amount:
                    </Text>
                  </Box>
                  <Input
                    mt="20px"
                    size="lg"
                    type="text"
                    placeholder="Card Number"
                  />
                  <Flex mt="50px" gap="25px">
                    <Input
                      type="text"
                      size="lg"
                      placeholder="mm/yy"
                      maxLength={5}
                    />
                    <Input
                      type="text"
                      size="lg"
                      placeholder="CVV"
                      maxLength={3}
                    />
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex>
                    <Box>
                      <Text
                        fontSize="16px"
                        lineHeight="24px"
                        fontWeight={"600"}
                        letterSpacing="0.24px"
                        color="#1f1f1f"
                      >
                        Mobile Wallet
                      </Text>
                      <Text
                        fontSize="12px"
                        lineHeight="16px"
                        fontWeight={"400"}
                        letterSpacing="0.4px"
                        color="#a8a8a8"
                      >
                        Amount:
                      </Text>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      ml="250px"
                    >
                      <Image
                        w="150px"
                        src="https://i.ibb.co/G7KTpB4/frame.png"
                      />
                    </Box>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex>
                    <Box>
                      <Box>
                        <Text
                          fontSize="16px"
                          lineHeight="24px"
                          fontWeight={"600"}
                          letterSpacing="0.24px"
                          color="#1f1f1f"
                        >
                          Net Banking
                        </Text>
                        <Text
                          fontSize="12px"
                          lineHeight="16px"
                          fontWeight={"400"}
                          letterSpacing="0.4px"
                          color="#a8a8a8"
                        >
                          Amount:
                        </Text>
                      </Box>
                      <Flex px="10px" py="10px" alignItems="start" gap="10px">
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/f380ffaa7f80bdc586f469a53a3caea8887d84a4.png?1584601955"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            Hdfc Bank
                          </Text>
                        </Box>
                      </Flex>
                      <Flex px="10px" py="10px" alignItems="start" gap="10px">
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/312f0e8f319287aa09b1e96b45a7d82cabf6184a.png?1584601979"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            ICICI NetBanking
                          </Text>
                        </Box>
                      </Flex>
                      <Flex px="10px" py="10px" alignItems="start" gap="10px">
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/d79d466d40fc7df794e2e1c907db212e52d4f47f.png?1584601931"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            Axis Bank
                          </Text>
                        </Box>
                      </Flex>
                      <Flex px="10px" py="10px" alignItems="start" gap="10px">
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/cf379c07cb78c1e7bc476990125e2f2dfc48c46c.png?1584602048"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            Kotak Bank
                          </Text>
                        </Box>
                      </Flex>
                      <Flex px="10px" py="10px" alignItems="start" gap="10px">
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/c60a9d56b73f754951266d949ebadaf86cc0bb3f.png?1584602027"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            Yes Bank
                          </Text>
                        </Box>
                      </Flex>
                      <Flex px="10px" py="10px" alignItems="start" gap="10px">
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/b231e4ec4fc0862465537b9f916908ceb9ad8486.png?1584454582"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            Canara Bank
                          </Text>
                        </Box>
                      </Flex>
                      <Flex px="10px" py="10px" alignItems="start" gap="10px">
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/27eac78721d3d14bc9df34231bce661e1d510e8f.png?1584602001"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            State Bank of India
                          </Text>
                        </Box>
                      </Flex>
                      <Flex px="10px" py="10px" alignItems="start" gap="10px">
                        <Image
                          w="32px"
                          h="32px"
                          src="https://zoomcar-assets.zoomcar.com/images/original/e240b3b08e01c6526a1e3a8eb8601f6c16e793e5.png?1584454522"
                        />
                        <Box textAlign={"start"}>
                          <Text
                            fontSize="14px"
                            lineHeight="20px"
                            fontWeight={"400"}
                            letterSpacing="0.24px"
                            color="#1f1f1f"
                            px="16px"
                          >
                            Union Bank of India
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      ml="150px"
                    >
                      <Image
                        w="150px"
                        src="https://i.ibb.co/G7KTpB4/frame.png"
                      />
                    </Box>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Flex mt="20px" gap={"20px"}>
            <Image
              w="48px"
              h="48px"
              src="https://zoomcar-assets.zoomcar.com/images/original/0e27560e692d8d95e0f2cce41ef6d50c5dce40f0.png?1584453313"
            />
            <Image
              w="48px"
              h="48px"
              src="https://zoomcar-assets.zoomcar.com/images/original/5403af9219d2cceb82302df4d7f3944a5e175903.png?1584453396"
            />
            <Image
              w="48px"
              h="48px"
              src="https://zoomcar-assets.zoomcar.com/images/original/5d72e13a3e88180595bce8246fa2110f4cf2bf5c.png?1584453438"
            />
            <Image
              w="48px"
              h="48px"
              src="https://zoomcar-assets.zoomcar.com/images/original/bf437ec8fa302637ad3d84959e440ed16d172bff.png?1584453417"
            />
          </Flex>
        </Box>

        {/*---------------------------------- Booking Details ------------------------------------------------------------ */}

        <Box w="29%">
          <Text as="b" fontSize="xl">
            Booking details
          </Text>
          <Box
            mt={"10px"}
            p={"5px"}
            boxShadow="2xl"
            border="0.5px solid lightgray"
          >
            <Flex
              p={"10px"}
              backgroundColor="rgb(245, 245, 245)"
              justifyContent="space-between"
            >
              <Box>
                <Text
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="24px"
                  letterSpacing="0.16px"
                  color={"#1f1f1f"}
                >
                  Maruti Swift MT Petrol
                </Text>
                <Flex mt={"7px"} gap="30px">
                  <Flex gap={"5px"}>
                    <Image
                      w="16px"
                      src="https://zoomcar-assets.zoomcar.com/images/original/2aceee9e84a7bf79ae8928ace92944abbac907d4.png?1584455088"
                    />
                    <Text
                      fontSize={"12px"}
                      lineHeight="16px"
                      fontWeight={"400"}
                      letterSpacing="0.4px"
                      color={"#666"}
                    >
                      Manual
                    </Text>
                  </Flex>
                  <Flex>
                    <Image
                      w="16px"
                      src="https://zoomcar-assets.zoomcar.com/images/original/4c611ba1fb54d1e42553020d9022e5ab2dac14ea.png?1584455110"
                    />
                    <Text
                      fontSize={"12px"}
                      lineHeight="16px"
                      fontWeight={"400"}
                      letterSpacing="0.4px"
                      color={"#666"}
                    >
                      Petrol
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <Image
                maxHeight={"100px"}
                src="https://zoomcar-assets.zoomcar.com/photographs/original/f1850c781ba0aeae715eaa922dc15b4dc3654a09.png?1663874619"
              />
            </Flex>
            <Box p="18px">
              <Flex my="10px" gap="20px" alignItems={"center"}>
                <FaRegDotCircle fontSize="16px" color="green" />
                <Text> Sun, 22JAN</Text>
              </Flex>
              <Flex my="10px" gap="20px" alignItems={"center"}>
                <FaRegStopCircle color="red" />
                <Text> Sun, 22JAN</Text>
              </Flex>
            </Box>
            <Box
              padding={"10px"}
              backgroundColor={"rgb(240, 244, 255)"}
              color="#5160c2"
              fontSize={"14px"}
            >
              Free cancelation upto 22Jan
            </Box>
            <Divider
              borderWidth={"1px"}
              borderColor="darkgray"
              variant={"solid"}
              mt="20px"
              orientation="horizontal"
            />
            <Text
              padding={"10px"}
              fontSize={"16px"}
              fontWeight="600"
              lineHeight={"24px"}
              letterSpacing="0.24px"
              color="#1f1f1f"
            >
              Final fare :
            </Text>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default CheckoutPage;
