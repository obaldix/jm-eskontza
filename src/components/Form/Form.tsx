import { Box, Button, Center, Link } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { HeadingStyled } from "../General/styled"

const Form = () => {
  return (
    <Box>
      <Center>
        <HeadingStyled>Etorriko zara? / Vienes?</HeadingStyled>
      </Center>
      <Center my={10}>
        <Button><Link href="https://docs.google.com/forms/d/1z91gGgV1rws5xt062haK7YZbnbE1T3uCz3xZ5oMfLsE" target={"_blank"}></Link> Formulario</Button>
      </Center>
    </Box>
  )
}

export default Form
