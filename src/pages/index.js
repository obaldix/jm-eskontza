import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import GeneralPage from "../components/General/General"

const IndexPage = () => (
  <ChakraProvider>
    <GeneralPage />
  </ChakraProvider>
)

export default IndexPage
