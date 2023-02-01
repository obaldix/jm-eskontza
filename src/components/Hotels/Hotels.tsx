import { Box, Center, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { HeadingStyled } from "../General/styled"

const Hotels = () => {
  return (
    <Box mt="50px">
      <Center>
        <Heading as="h2">Hoteles</Heading>
      </Center>
      <Text mt="30px">Hotel Balneario Areatza – Ilunion Bilbao – Ilunion San Mamés</Text>
    </Box>
  )
}

export default Hotels
