import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // send a POST request to your server for verification
    // axios.post("", formData)
    //   .then(response => {
    //     console.log(response.data);
    //     // handle successful login
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     // handle error
    //   });
  };

  return (
    <>
      <Box
        shadow="xl"
        p={"10"}
        width="500px"
        align="center"
        margin={"auto"}
        mt={"20px"}
      >
        <Image src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" />
        <form onSubmit={handleSubmit}>
          <Stack>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button mt={4} variantColor="teal" type="submit">
              Login
            </Button>
            <Text>Not a User ? SignUp</Text>
          </Stack>
        </form>
      </Box>
    </>
  );
}

export default Login;
