import {
  Box,
  Center,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import React from "react"
import { Area, HeadingStyled } from "../General/styled"

const Hotels = () => {
  return (
    <Area>
      <Center>
        <Heading
          as="h2"
          fontSize={55}
          textAlign="center"
          fontFamily={"'Dancing Script', cursive"}
          fontWeight="600"
        >
          Hoteles
        </Heading>
      </Center>
      <Center textAlign={"center"}>
        <Text my="30px" paddingX={"10px"}>¿Estáis mirando algun hotel? Te recomendamos estos</Text>
      </Center>
      <Center>
        <UnorderedList>
          <ListItem><Link href="https://www.hotelbalnearioareatza.com/" color={"blue"}>Hotel Balneario Areatza</Link></ListItem>
          <ListItem><Link href="https://www.ilunionbilbao.com/" color={"blue"}>Ilunion Bilbao</Link> </ListItem>
          <ListItem><Link href="https://www.ilunionsanmames.com/" color={"blue"}>Ilunion San Mamés</Link></ListItem>
        </UnorderedList>
      </Center>
    </Area>
  )
}

export default Hotels
