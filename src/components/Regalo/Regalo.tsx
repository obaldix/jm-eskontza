import { Box, Center, Heading, Text } from "@chakra-ui/react"
import React from "react"


const Regalo = () => {
  return (
    <Box mt="200px" height="400px">
      <Center>
        <Heading as="h2" fontSize={55}>Regalo</Heading>
      </Center>
      <Center  mt="30px"><Text textAlign={"center"}>Tres cosas hay en la vida; salud, dinero y amor. Afortunadamente nos sobra salud y amor.</Text></Center>
      <Center> <Text fontWeight={600} fontSize={14}>IBAN ES30 2095 0022 00 9119734674 </Text></Center>
    </Box>
  )
}

export default Regalo
