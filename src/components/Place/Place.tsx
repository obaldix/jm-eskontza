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
        <Text>La celebración comenzará a las 13:30 en el Hotel & Spa Etxegana</Text>
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
          <Heading as="h2" fontSize={55}            fontFamily={"'Dancing Script', cursive"}
            fontWeight="600">
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
                  <Text>Pendiente de confirmación</Text>
                  {/* <Text>Vuelta: 22:00 y 01:00</Text> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.7289803259073!2d-3.023175922707004!3d43.319932573919985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e59a893dbe37d%3A0xae60d5acc829501a!2sCentro%20de%20Atenci%C3%B3n%20e%20Informaci%C3%B3n%20de%20la%20Seguridad%20Social%20n%C2%BA%2013!5e0!3m2!1ses!2ses!4v1703373700972!5m2!1ses!2ses"
                    width="100%"
                    height="300"
                  ></iframe>
                </CardBody>
                <CardFooter>
                  <Link href="https://www.google.com/maps/place/Bidezabal+(Metro)+(94),+48993+Getxo,+Vizcaya/@43.35684,-3.012096,16z/data=!4m6!3m5!1s0xd4e5be4a5780def:0xb9de087bd17c31d5!8m2!3d43.3568402!4d-3.0120962!16s%2Fg%2F1tfpq_pv?hl=es&gl=ESS">
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
                  <Text>Pendiente de confirmación</Text>
                  {/* <Text>Vuelta: 22:00 y 01:00</Text> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181.59109706969141!2d-2.9353697058878163!3d43.262789253719426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4fd786a87ff7%3A0x4191d44c756e26f4!2sMoyua%20Plaza%20(Ogasuna%2Fhacienda)%20(896)!5e0!3m2!1ses!2ses!4v1675022676338!5m2!1ses!2ses"
                    width="100%"
                    height="300"
                  ></iframe>
                </CardBody>
                <CardFooter>
                  <Link href="https://www.google.com/maps?ll=43.262648,-2.935427&z=20&t=m&hl=es&gl=ES&mapclient=embed&cid=4724790908941117172">
                    <Button colorScheme="blue"> Ver en maps</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Box>
          </Flex>
        </Center>
      </Box>
    </Box>
    </Area>
  )
}

export default Place
