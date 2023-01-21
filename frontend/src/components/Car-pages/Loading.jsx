import { Box, Flex, Heading, Image } from "@chakra-ui/react"

export const Loading = () => {
    return <Flex width='100%' h='70vh' bg='#f3f3f3' justify='center' align='center'>
        
        <Flex w='60%' minW='400px' bg="#fff" h={"400px"} borderRadius='25px' shadow={"xl"} justify='center' align='center' direction='column'>
            <Heading w='fit-content'>
                Please Wait
            </Heading>
            <Image h="80%" src='https://payload.cargocollective.com/1/3/116466/11796981/University_Illustration_V2-_9.gif' w='250px'/>

        </Flex>
    </Flex>
}