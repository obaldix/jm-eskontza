import { Box, Center, Heading, Image, List, ListItem, Text } from "@chakra-ui/react"
import React from "react"


const Regalo = () => {
  return (
    <Box mt="200px" height="400px">
      <Center>
        <Heading as="h2" fontSize={55} fontFamily={"gistesy"}>Regalo</Heading>
      </Center>
      <Center  mt="30px"><Text textAlign={"center"}>Tres cosas hay en la vida; salud, dinero y amor. Afortunadamente nos sobra salud y amor.</Text></Center>
      <Center textAlign={"center"}> <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Bizum.png/799px-Bizum.png" width={"200px"}/></Center>
      <List textAlign={"center"}>
        <ListItem>Julen : 616326046</ListItem>
        <ListItem>Maitane : 609285266</ListItem>
      </List>
     
    </Box>
  )
}

export default Regalo
