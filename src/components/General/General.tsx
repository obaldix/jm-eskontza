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

import CuentaAtras from "../CuentaAtras/CuentaAtras"
import Intro from "../Intro/Intro"
import Place from "../Place/Place"
import When from "../When/When"

import "./General.css"

const GeneralPage = () => {
  return (
    <Container maxWidth={"80vh"}>
      <Intro />
      <Place />
      <When />
    </Container>
  )
}

export default GeneralPage
