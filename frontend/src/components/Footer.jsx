import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Heading,
    Center,
    GridItem,
} from '@chakra-ui/react';


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const Footer = () => {
    return (
        <Box bg="#666666" color="white" marginTop="60px">
            <Container as={Stack} maxW={'90%'} py={10}>
                <Heading size="md" color="white">We operate in many other cities</Heading>
                <Heading pt={4} size="lg" color="white">INDIA</Heading>
                <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'center'}>
                        <Link href={'#'}>Bangalore</Link>
                        <Link href={'#'}>Chennai</Link>
                        <Link href={'#'}>Ahmedabad</Link>
                        <Link href={'#'}>Mangalore</Link>
                        <Link href={'#'}>Nagpur</Link>
                        <Link href={'#'}>Bhopal</Link>
                        <Link href={'#'}>Vadodara</Link>
                        <Link href={'#'}>Madurai</Link>
                    </Stack>
                    <Stack align={'center'}>
                        <Link href={'#'}>Pune</Link>
                        <Link href={'#'}>Hyderabad</Link>
                        <Link href={'#'}>Coimbatore</Link>
                        <Link href={'#'}>Mysore</Link>
                        <Link href={'#'}>Kochi</Link>
                        <Link href={'#'}>Lucknow</Link>
                        <Link href={'#'}>Nashik</Link>
                    </Stack>
                    <Stack align={'center'}>
                        <Link href={'#'}>Bangalore</Link>
                        <Link href={'#'}>Chennai</Link>
                        <Link href={'#'}>Ahmedabad</Link>
                        <Link href={'#'}>Mangalore</Link>
                        <Link href={'#'}>Nagpur</Link>
                        <Link href={'#'}>Bhopal</Link>
                        <Link href={'#'}>Vadodara</Link>
                        <Link href={'#'}>Madurai</Link>
                    </Stack>
                    <Stack align={'center'}>
                        <Link href={'#'}>Pune</Link>
                        <Link href={'#'}>Hyderabad</Link>
                        <Link href={'#'}>Coimbatore</Link>
                        <Link href={'#'}>Mysore</Link>
                        <Link href={'#'}>Kochi</Link>
                        <Link href={'#'}>Lucknow</Link>
                        <Link href={'#'}>Nashik</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <GridItem w='100%' h='0.2' bg='white' />

            <Box p={3}>
                <Center><Text>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2012-2022 © Zoomcar™ Ltd. All rights reserved.</Text></Center>
            </Box>

        </Box>
    )
}

export default Footer