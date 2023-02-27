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
            Para confirmación de asistencia, autobuses y demás, haz click aquí
          </Text>
        </Center>
        <Center mt="50px" textDecoration={"none"}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSewteyUAeKwOh3e2zJC5Wo9hYynu9h3eMd_CQ4Fl4RrD8quag/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
          >
            <Button colorScheme={"blue"} size="lg">
              ¡Apúntate aquí!
            </Button>
          </a>
        </Center>
      </Box>
    </Area>
  )
}

export default Form
