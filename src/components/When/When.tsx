import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import { ImageSlide } from "react-chakra-slide-show"
import { HeadingStyled } from "../General/styled"
import CuentaAtras from "../CuentaAtras/CuentaAtras"

const When = () => {
  return (
    <Box mt="20" minHeight={"300px"}>
      <Center>
        <HeadingStyled fontSize={"60px"}>Noiz? / Cuando?</HeadingStyled>
      </Center>
      <Center mt={10}>
        <HeadingStyled>27/05/2023</HeadingStyled>
      </Center>
      <Center mt={10}>
        <CuentaAtras />
      </Center>
    </Box>
  )
}

export default When
