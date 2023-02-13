import { Box, Button, Center, Heading } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { HeadingStyled } from "../General/styled"
import { Link } from "gatsby"
import { isMobile } from "react-device-detect"
const Form = () => {
  return (
    <Box
      mt="20"
      minHeight={"300px"}
      backgroundImage={"./images/flor1.png"}
      backgroundRepeat="no-repeat"
      backgroundSize={isMobile ? "73px" : "200px"}
      backgroundPosition="left"
    >
      <Center>
        <Heading as="h2" fontSize={55} textAlign="center" fontFamily={"gistesy"}>
          Te Apuntas?
        </Heading>
      </Center>
      <Center mt="150px" textDecoration={"none"}>
        <a
          href="https://docs.google.com/forms/d/1z91gGgV1rws5xt062haK7YZbnbE1T3uCz3xZ5oMfLsE"
          target="_blank"
        >
          <Button colorScheme={"blue"} size="lg">
            {" "}
            Apúntate aquí!{" "}
          </Button>
        </a>
      </Center>
    </Box>
  )
}

export default Form
