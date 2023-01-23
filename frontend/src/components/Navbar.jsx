import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Hide,
  HStack,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CgMenuBoxed } from "react-icons/cg";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FaUserAlt, FaUserCog } from "react-icons/fa";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdLogout } from "react-icons/md";
import { auth_login, auth_logout } from "../redux/Auth/Auth.actionType";

function Navbar() {
  const { isAuth,name } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Box bgColor={"black"}>
        <Flex h={"80px"} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Hamburg />
            </Box>

            <Box cursor="pointer">
              <Image
                onClick={handleHome}
                src="https://i.ibb.co/6m3XQ8d/Quick-cars-Logoaaaa.png"
                h={"80px"}
                w={"180px"}
              />
            </Box>
          </HStack>
          <Flex
            w={400}
            mr={10}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Hide below="md">
              <Box>
                <Button size="lg" borderRadius={"30px"} gap="5px">
                  <Image
                    src="data:image/png;base64,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"
                    w={"30px"}
                    h={"30px"}
                  />
                  Become a Host
                </Button>
              </Box>
              <Box>
                {isAuth ? (
                  <>
                  <Text fontSize={'24px'} color={'white'}>{name}</Text>
                  </>
                ) : (
                  <>
                    <Button
                      color="white"
                      variant="ghost"
                      css={{
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                      fontSize="20px"
                      onClick={() => navigate("/login")}
                    >
                      Login/SignUp
                    </Button>
                  </>
                )}
              </Box>
            </Hide>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

function Hamburg() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLoginB = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch({ type: auth_logout });
  };

  return (
    <>
      <HamburgerIcon
        boxSize={"6"}
        color={"white"}
        onClick={onOpen}
      ></HamburgerIcon>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg="rgb(229, 232, 236)">
            <Box color={"Black"}>
              <Flex gap="7px" alignItems={"center"} onClick={handleLoginB}>
                <FaUserAlt />
                {isAuth ? name : "Login or Signup"}
              </Flex>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Box>
              <Flex>
                <IoLocationOutline
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                    fontSize: "25px",
                  }}
                />
                <Box mt={"5px"} ml={"15px"}>
                  Change City
                </Box>
              </Flex>
              <Flex mt={"10px"} ml={"-5px"} alignItems="center">
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX///9rtUVwvkUvj0Tq9eNyv0ZqvDt0wEq836los0Ly+e3f7tddsDAgijmXw59msz6z16P4+/Z5vFedzYa726xgsDaz26Clz5LS6Mfb7dKPxXXJ4r3k8d1nuzZzuU9/xVnD4LWFx2L1+vLR6sSMy2zF5LaMv5ciijq82sKfyaiHwmmiz41/vmCp15Kf0oRguCmWznjR5dXk8ec9l1EAgyd/t4tgp29Nnl6z1LqVyH2EwWaKwnDpSYpjAAAGsElEQVR4nO2dbXuaPBSAwVK7gF0EGwRRxphbV7Xd6tZu1v//vx5IeFUJUn3Gkevc/dISsdw9J280BkVBEARBEARBEARBEARBEARBEARBEARBEARBEARBEORyCfWmFE7WXMdxDLO1i6/Hffx805D+l/RkfbgiLIL6I7dNCQnGfNbvNWSWCpo2Y0TlEDrYTls1qcDuN/brZRHUVkwtQGnQpsphnmaN/XLBqU/VEoTdtWpzgKfmASxEcFcwgjmt+uxhnzWCPIqqLv2N/5jpOyLYkwpGdXHZqtIOzXO030u7hArBKIqAgqj/6DdlriXnVgqqkBobzf7QjK9Zf1ctqNJtm07n4lArmmWpD3n8diQywSiIYdvXdzKSFO2GYY3g5RvWCV58PawTVOmk7UuUUT/hrRVUWdCigBzJRPhaNtjeSVJYA9MC7rx6oigfbO+EcNyqRjWPkol+E0FiwWxJzZ+SaVQjQQrzZo35UzLJuE7ntPV1EG4z8yiLYBqUIwQJVEFXNtOvnQ8WUzRoU0PCvLoRvW4gCDZFFePHrIp5OiG8aEHFqJzwGulLjklRuIJHcNF18BguO0WPoPMpanQ9RV1CUJAC+19FI1y164K0XpBctCCmKArC5pg6iIKQ6X6Kdr4VxRRFQdgcUwdxqAaZ7qdo5wU7301gHbx0wc7P6DtfBzufop0X7PxQrfN1kA1qgbYKvxHaMnCMOrT690Haw3z++1HOt2dFt8t8+GJAXcG2y/rbr/v7Wym/XxT982xv5f7N3Ia5BKqE+fH29qqG22+K/unQkpR+f3ZjA6+g4WutHxf8XL3mpvcE8kN5CeGf+3rBjzJB7mjDXJAY83qE4EONYOz4CWpn+XBEij5U1MEysw9tuxwk/HWWCArFJ4hL9OtDWFsHC5n6s22dA/w5U4qCVQzrQthIMErUx7aNdnn+faY6mEURWnPzXR7DBnUwUzTqf+u/RG7YMEWF4SdYDarUsHGKcoB1i2tJPXxHinJuQM2ozPOmKKdvt21V4qVqVPpuwSiIoAbhzxUV8X11UDAL2rYqcXhq8d46yAE2snk+c4pyYM35/+7n6amC2e48QNibXpyUojF9aKPT71fFunh/9fdEwV5v3rbSLuuXq1sheX97/7JWtFNSNOYa1sgtZv3wGk/2f70+rBXly03v+jRmoIY1KeZ6veZ/enOqnUzbMgiCIAiCIAiCIAiCIBeEGSM9oJhTx/M8Rz9w5yw0ohLP1bIic5//6cKPJVxYluVv8gOOHx2wCgub3KVPOWQx3Ll35k1UUUStkRf/p8mcWHv4o38iUsmUkZj8Dz2OD7BhVr6l2cJvSlW7EBFtwbIiQqk/DhWNkj2o1W4UtXjLGaIWDOMDmeEdK21JQ5iV3SF0aXm3GsImin5gFTwBbWiz3eulfqKo730qIzoJouFUZuixNAdZlpA02fBxLMpovLafF8Y7zmo0SVNxmsjSlneilcUwDRPzR3eBvU0SlvHN5EOLl9GNo2lTb+kzMgjis7eTGF5IVvz7bcv7lstiuKQigHeiVJsIRb6pJT9PpekWpaaz2BRCNeJvAmNLdomhnqRo1nOYI6EVB9EV31YslwVomB/IDQNe0+gwLzNXPPv8MDUki8OLuyAZaiLzHNeJH/Pjuu6GpIb8MsstoWh6mJudR+lq7Bl7y0ogGU7TK2XJF0ka/iRgtLQZcCjamiAtFe0sJatx+dMWAA33uzbF9LlhUHp5bh0Uu8pIc1F0hGSoVRrqwrDclizyuG7KowFKC0KQDKtjGApDr/Tyt0Lm2qT8UcVB/lJIhkkMWUZeD3m3XWxK08xNx3TaOH5IVz76zhslSIZJDL2MSdZb8O9I6TkjhmhL8x5Sc4bLBUke1pXvbw3JUKvuD4e0fNkRG9EL7qxACD0xhMs39oRkKBnTGEJnlfd2nnBOwlroKEX/nytdiKFoOFX6loYsEHMGJlqUiRVkZyVjuCD9+VIM3YGoXurS1XXNW4g2hbzxFweM0NVQPOvQFd0/zYZwkAylM+Bl0uXFwxaaTJ6I8OAzq+igai3e/ER9BbctrTI0twceGBfwolFaEnWKSXfBYPaHUkMl3O7cxkgf+meu9u5vsMJj1i7HML5TUxi4EGZlTw/YsNKIhpae1wHJUIvqF2V+fmA4oJQO8ovTlj4T90QZXRWvmY9oktuljGxKE8VxXMBvawBgGs0J3UIXbsY/u8VJoe4MR9vtZhnszXan3nC0iYrG3s4YYP9NEARBEARBEARBEARBEARBEARBEARBEARBEARBEAS5EP4D8fK3WIu1GLAAAAAASUVORK5CYII="
                  h="40px"
                  w="40px"
                />
                <Box ml={"15px"}>Become a Host</Box>
              </Flex>
              <Flex mt={"10px"}>
                <CgMenuBoxed
                  style={{ marginRight: "10px", fontSize: "25px" }}
                />
                <Box ml={"15px"}>Zoomcar Fleet Vehicles Policies</Box>
              </Flex>
              <Flex mt={"10px"}>
                <CgMenuBoxed
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                    fontSize: "25px",
                  }}
                />
                <Box mt={"5px"} ml={"15px"}>
                  Zoomcar Host Vehicles Policies
                </Box>
              </Flex>
              <Flex mt={"10px"} mb={"10px"}>
                <IoCallOutline
                  style={{
                    marginRight: "10px",
                    marginTop: "5px",
                    fontSize: "25px",
                  }}
                />
                <Box mt={"5px"} ml={"15px"}>
                  Help & Support
                </Box>
              </Flex>
              {isAuth ? (
                <>
                  <Link to="/myaccount">
                    <Flex>
                      <FaUserCog
                        style={{
                          marginRight: "10px",
                          marginTop: "5px",
                          fontSize: "25px",
                        }}
                      />
                      <Box mt={"5px"} ml={"15px"}>
                        My Account
                      </Box>
                    </Flex>
                  </Link>

                  <Flex mt={"10px"} mb={"10px"}>
                    <MdLogout
                      style={{
                        marginRight: "10px",
                        marginTop: "5px",
                        fontSize: "25px",
                      }}
                    />
                    <Box mt={"5px"} ml={"15px"} onClick={handleLogout}>
                      LogOut
                    </Box>
                  </Flex>
                </>
              ) : (
                <Flex mt={"10px"} mb={"10px"}>
                  <MdLogout
                    style={{
                      marginRight: "10px",
                      marginTop: "5px",
                      fontSize: "25px",
                    }}
                  />
                  <Box mt={"5px"} ml={"15px"}>
                    LogIn
                  </Box>
                </Flex>
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
