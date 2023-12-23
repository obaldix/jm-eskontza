import { Box, Button, Center, Heading, Text } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { Area, HeadingStyled } from "../General/styled"
import { Link } from "gatsby"
import { isMobile } from "react-device-detect"
const Form = () => {
  return (
    <Area>
      <Box
        mt="20"
        minHeight={"500px"}
        backgroundImage={"./images/flor1.png"}
        backgroundRepeat="no-repeat"
        backgroundSize={isMobile ? "73px" : "200px"}
        backgroundPosition="left"
      >
        <Center>
          <Heading
            as="h2"
            fontSize={55}
            textAlign="center"
            fontFamily={"'Dancing Script', cursive"}
            fontWeight="600"
          >
            ¿Te Apuntas?
          </Heading>
        </Center>
        <Center mt="50px" textAlign={"center"}>
          <Text>
          Para confirmación de asistencia, alojaliento, autobuses y demás, haz click aquí:
          </Text>
        </Center>
        <Center mt="50px" textDecoration={"none"}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSctcrLgGqZbGPANQ3m3MqiqkJBO2hag_c-cw6o9iC2fzqOpow/viewform"
            target="_blank"
          >
            <Button colorScheme={"blue"} size="lg">
              ¡Apúntate aquí!
            </Button>
          </a>
        </Center>
        <Center mt="60px">
        <Text textAlign={"center"}>
        Ya que vivir en Gran vía e irse de safari no es barato, ayudanos a quedarnos en Tanzania mas rato.
        </Text>
      </Center>
      <Center mt="30px">
        <Text fontWeight={600} fontSize={20}>
          IBAN ES31 0239 0806 7422 6538 5225{" "}
        </Text>
      </Center>
      </Box>
    </Area>
  )
}

export default Form
