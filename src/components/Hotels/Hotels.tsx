import {
  Box,
  Center,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import React from "react"
import { HeadingStyled } from "../General/styled"

const Hotels = () => {
  return (
    <Box mt="50px">
      <Center>
        <Heading
          as="h2"
          fontSize={55}
          textAlign="center"
          fontFamily={"gistesy"}
        >
          Hoteles
        </Heading>
      </Center>
      <Center textAlign={"center"}>
        <Text my="30px">Estais mirando algun hotel? Te recomendamos estos</Text>
      </Center>
      <Center>
        <UnorderedList>
          <ListItem>Hotel Balneario Areatza</ListItem>
          <ListItem>Ilunion Bilbao </ListItem>
          <ListItem>Ilunion San Mamés</ListItem>
        </UnorderedList>
      </Center>
    </Box>
  )
}

export default Hotels
