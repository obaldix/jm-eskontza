import {
  Box,
  Center,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Regalo = () => {
  return (
    <Box height="100%">
      <Center>
        {/* <Heading as="h2" fontSize={55} fontFamily={"gistesy"}>Regalo</Heading> */}
      </Center>
      <Center>
        <Text textAlign={"center"}>
          Tres cosas hay en la vida; salud, dinero y amor. Afortunadamente nos
          sobra salud y amor.
        </Text>
      </Center>
      <Center mt="30px">
        <Text fontWeight={600} fontSize={20}>
          IBAN ES30 2095 0022 00 9119734674{" "}
        </Text>
      </Center>
      <Center mt="30px">
        <Image src="./images/origenes.png" alt="cuadro" />
      </Center>
    </Box>
  )
}

export default Regalo
