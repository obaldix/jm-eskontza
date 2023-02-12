import { Box, Button, Center, Heading } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { HeadingStyled } from "../General/styled"
import { Link } from "gatsby"
const Form = () => {
  return (
    <Box mt="200px">
      <Center >
        <Heading as="h2" fontSize={55}>Etorriko zara? / Vienes?</Heading>
      </Center>
      <Center mt="150px" textDecoration={"none"}>
        <a
          href="https://docs.google.com/forms/d/1z91gGgV1rws5xt062haK7YZbnbE1T3uCz3xZ5oMfLsE"
          target="_blank"
        >
          <Button colorScheme={"blue"} size="lg"> Apúntate aquí! </Button>
        </a>
      </Center>
    </Box>
  )
}

export default Form
