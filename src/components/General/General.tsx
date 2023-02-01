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
import Form from "../Form/Form"
import Hotels from "../Hotels/Hotels"
import Intro from "../Intro/Intro"
import Place from "../Place/Place"
import Regalo from "../Regalo/Regalo"
import When from "../When/When"

const GeneralPage = () => {
  return (
    <>
      <Intro />
      <When />
      <Place />
      <Hotels />
      <Form />
      <Regalo/>
    </>
  )
}

export default GeneralPage
