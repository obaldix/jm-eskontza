import { Box, Text } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import Form from "../Form/Form"
import Hotels from "../Hotels/Hotels"
import Intro from "../Intro/Intro"
import LoaderPage from "../Loader/Loader"
import Place from "../Place/Place"
import Regalo from "../Regalo/Regalo"
import When from "../When/When"
import { Loader, LoaderDiv } from "./styled"

const GeneralPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])
  return loading ? (
    <Box height={"100vh"} width={"100%"}>
      <LoaderPage />
    </Box>
  ) : (
    <Box
      backgroundImage={"./images/fondo_portada_sin_flor.jpg"}
      backgroundSize="contain"
    >
      <Intro />
      <When />
      <Place />
      <Hotels />
      <Form />
      <Regalo />
    </Box>
  )
}

export default GeneralPage
