import {
  Box,
  Center,
  Container,
  Grid,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"
import { ImageSlide } from "react-chakra-slide-show"
import CuentaAtras from "../CuentaAtras/CuentaAtras"

import "./General.css"

const GeneralPage = () => {
  const captions = useMemo(() => [], [])

  return (
    <Container maxWidth={"80vh"}>
      <Box minHeight={"400px"} >
        <Center>
          <Heading fontSize={"90px"}>Julen eta Maitane</Heading>
        </Center>
        <Center>
          <Heading fontSize={"60px"}>Eskontza</Heading>
        </Center>
        <StaticImage
          src="../../images/portada.jpg"
          alt="portada"
          class="portadaImagen"
        />
      </Box>

      <Box mt="20" minHeight={"300px"} >
        <Center>
          <Heading fontSize={"60px"}>Non? / Donde?</Heading>
        </Center>
       <Center> <Heading fontSize={"30px"}>Garena Jatetxea</Heading></Center>

        <ImageSlide
          auto={0}
          images={[
            "https://etxauribaserria.eus/wp-content/uploads/2021/05/1-slide_1_loquesomos.jpg",
            "https://www.gastroactitud.com/wp-content/uploads/2020/08/garena-ga-15-1024x744.jpg",
            "https://res.cloudinary.com/tf-lab/image/upload/restaurant/c9fe83e6-9593-401d-a26c-5ffbad35ceb3/892a0d3f-f9bf-46ef-9e72-3d2118a24ac4.jpg",
            ,
          ]}
          captions={captions}
        />
      </Box>
      <Box mt="20" minHeight={"300px"} >
        <Center>
          <Heading fontSize={"60px"}>Noiz? / Cuando?</Heading>
        </Center>
        <Center mt={10}>
          <Heading fontSize={"30px"}>27/05/2023</Heading>
        </Center>
        <Center mt={10}>
        <CuentaAtras />
        </Center>
      </Box>
    </Container>
  )
}

export default GeneralPage
