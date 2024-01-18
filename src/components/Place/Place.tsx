import React from "react"
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react"
import { ImageSlide } from "react-chakra-slide-show"
import { Area, HeadingStyled } from "../General/styled"
import { StaticImage } from "gatsby-plugin-image"
import { isMobile } from "react-device-detect"
const Place = () => {
  return (
    <Area>
      <Box minHeight={"300px"}>
        <Center>
          <Heading
            as="h2"
            fontSize={55}
            textAlign="center"
            fontFamily={"'Dancing Script', cursive"}
            fontWeight="600"
          >
            ¿Dónde lo celebramos?
          </Heading>
        </Center>
        <Center my={10} mt="100px" textAlign="center" paddingX={5}>
          <Text>
            La celebración comenzará a las 13:30 en el Hotel & Spa Etxegana
          </Text>
        </Center>

        <Box
          mb={5}
          backgroundImage={"./images/flor1.png"}
          backgroundRepeat="no-repeat"
          backgroundSize={isMobile ? "73px" : "200px"}
          backgroundPosition="left"
        >
          <Center>
            <Card maxW={"700px"} w="100%" backgroundColor="none">
              <CardHeader>
                <Heading size="md"> Hotel & Spa Etxegana</Heading>
              </CardHeader>
              <CardBody>
                <Image src="images/etxegana1.webp" alt="garena" />
              </CardBody>
              <CardFooter justifyContent={"space-between"}>
                <Box float={"left"}>
                  <Link
                    href="https://maps.app.goo.gl/VXC2mgP1rG3HbWPZ7"
                    target="_blank"
                  >
                    <Button>Ver en maps</Button>
                  </Link>
                </Box>
                <Box float={"right"}>
                  <Link
                    textDecoration={"none"}
                    href="https://etxegana.com/"
                    target="_blank"
                  >
                    <Button>Web</Button>
                  </Link>
                </Box>
              </CardFooter>
            </Card>
          </Center>
        </Box>

        <Box
          mt={"80px"}
          backgroundImage={"./images/flor2.png"}
          backgroundRepeat="no-repeat"
          backgroundSize={isMobile ? "126px" : "300px"}
          backgroundPosition="right"
        >
          <Center>
            <Heading
              as="h2"
              fontSize={55}
              fontFamily={"'Dancing Script', cursive"}
              fontWeight="600"
            >
              Autobuses
            </Heading>
          </Center>        

          <Center mt="50px">
            <Flex flexDir={isMobile ? "column" : "row"} gap="30px">
              <Box>
                <Card w={"300px"}>
                  <CardHeader>
                    <Heading size="xs"> Portugalete</Heading>
                  </CardHeader>
                  <CardBody>
                    <Box mb={3}>
                    <Text>Ida: 12:30</Text>
                    <Text>Vuelta: 00:00</Text>
                    </Box>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2902.8202528085794!2d-3.0250178238408507!3d43.318022071120104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDE5JzA0LjkiTiAzwrAwMScyMC44Ilc!5e0!3m2!1ses!2ses!4v1705609791455!5m2!1ses!2ses"
                      width="100%"
                      height="300"
                    ></iframe>
                  </CardBody>
                  <CardFooter>
                    <Link href="https://maps.app.goo.gl/URGQ4d11qFk3MJwr9">
                      <Button colorScheme="blue"> Ver en maps</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Box>
              <Box>
                <Card w={"300px"}>
                  <CardHeader>
                    <Heading size="xs"> Bilbao</Heading>
                  </CardHeader>
                  <CardBody>
                  <Box mb={3}>
                    <Text>Ida: 12:30</Text>
                    <Text>Vuelta: 00:00</Text>
                    </Box>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2905.4542593017063!2d-2.9382513238437467!3d43.262858271123356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDE1JzQ2LjMiTiAywrA1NicwOC40Ilc!5e0!3m2!1ses!2ses!4v1705610028028!5m2!1ses!2ses"
                      width="100%"
                      height="300"
                    ></iframe>
                  </CardBody>
                  <CardFooter>
                    <Link href="https://maps.app.goo.gl/eWQ9uNNULwPYgFPaA">
                      <Button colorScheme="blue"> Ver en maps</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </Box>
            </Flex>
          </Center>
          <Center mt={8} px={2}>
            <Text>Los autobuses de vuelta serán a las 00:00 con el fin de fiesta desde el hotel a las mismas paradas de Portugalete y Bilbao.</Text>
          </Center>
        </Box>
      </Box>
    </Area>
  )
}

export default Place
