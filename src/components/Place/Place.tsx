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
          fontFamily={"gistesy"}
        >
          ¿Donde lo celebramos?
        </Heading>
      </Center>
      <Center my={10} mt="100px" textAlign="center">
        <Text>La celebración comenzará a las 13:00 en el Garena Jatetxea.</Text>
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
              <Heading size="md"> Garena Jatetxea</Heading>
            </CardHeader>
            <CardBody>
              <Image src="images/garena.jpeg" alt="garena" />
            </CardBody>
            <CardFooter justifyContent={"space-between"}>
              <Box float={"left"}>
                <Link
                  href="https://www.google.com/maps?ll=43.129261,-2.76587&z=16&t=m&hl=es&gl=ES&mapclient=embed&cid=5084260644102107798"
                  target="_blank"
                >
                  <Button>Ver en maps</Button>
                </Link>
              </Box>
              <Box float={"right"}>
                <Link
                  textDecoration={"none"}
                  href="https://garena.restaurant/es/"
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
          <Heading as="h2" fontSize={55} fontFamily={"gistesy"}>
            Autobuses
          </Heading>
        </Center>
        <Center mt="50px">
          <Flex flexDir={isMobile ? "column" : "row"} gap="30px">
            <Box>
              <Card w={"300px"}>
                <CardHeader>
                  <Heading size="xs"> Bidezabal</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Ida: 12:00</Text>
                  <Text>Vuelta: 22:00 y 01:00</Text>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.965119758436!2d-3.0120962!3d43.3568402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9de087bd17c31d5!2sBidezabal%20(Metro)%20(94)!5e0!3m2!1ses!2ses!4v1675022621968!5m2!1ses!2ses"
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
                  <Heading size="xs"> Moyua</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Ida: 12:00</Text>
                  <Text>Vuelta: 22:00 y 01:00</Text>
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
