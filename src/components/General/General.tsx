import { Box } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { BrowserView, MobileView } from "react-device-detect"
import Form from "../Form/Form"
import Hotels from "../Hotels/Hotels"
import Intro from "../Intro/Intro"
import LoaderPage from "../Loader/Loader"
import Place from "../Place/Place"
import Regalo from "../Regalo/Regalo"
import When from "../When/When"

const GeneralPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return loading ? (
    <>
      <BrowserView>
        <Box
          height={"100vh"}
          width={"100%"}
          backgroundImage="./images/fondo_web_flores.jpg"
          backgroundSize={"cover"}
        >
          <LoaderPage />
        </Box>
      </BrowserView>
      <MobileView>
        <Box
          height={"100vh"}
          width={"100%"}
          backgroundImage="./images/fondo_web.jpg"
        >
          <Box
            height={"100vh"}
            width={"100%"}
            backgroundImage="./images/flor2.png"
            backgroundPosition={"bottom right"}
            backgroundSize="150px"
            backgroundRepeat={"no-repeat"}
          >
            <Box
              height={"100vh"}
              width={"100%"}
              backgroundPosition={"top left"}
              backgroundImage="./images/flor1.png"
              backgroundSize="150px"
              backgroundRepeat={"no-repeat"}
            >
              <LoaderPage />
            </Box>
          </Box>
        </Box>
      </MobileView>
    </>
  ) : (
    <Box
      backgroundImage={"./images/fondo_web.jpg"}
      backgroundSize="contain"
      fontFamily="migra"
    >
      <Intro />
      <When />
      <Place />
      {/* <Hotels /> */}
      <Form />
      <Regalo />
    </Box>
  )
}

export default GeneralPage
