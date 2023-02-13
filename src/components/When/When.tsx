import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import { ImageSlide } from "react-chakra-slide-show"
import { HeadingStyled } from "../General/styled"
import CuentaAtras from "../CuentaAtras/CuentaAtras"
import { isMobile } from "react-device-detect"

const When = () => {
  return (
    <Box
      mt="20"
      minHeight={"300px"}
      backgroundImage={"./images/flor2.png"}
      backgroundRepeat="no-repeat"
      backgroundPosition= "right"
      backgroundSize={isMobile? "126px":"300px"}
    >
      <Center mt={30}>
        <CuentaAtras />
      </Center>
    </Box>
  )
}

export default When
