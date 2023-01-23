import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import { HeadingStyled } from "../General/styled"

const Intro = () => {
  return (
    <Box minHeight={"400px"}>
      <Center>
        <HeadingStyled>Julen eta Maitane</HeadingStyled>
      </Center>
      <Center>
        <Heading>Eskontza</Heading>
      </Center>
      <StaticImage
        src="../../images/portada.jpg"
        alt="portada"
        class="portadaImagen"
      />
    </Box>
  )
}

export default Intro
