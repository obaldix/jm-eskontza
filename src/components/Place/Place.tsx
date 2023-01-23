import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import { ImageSlide } from "react-chakra-slide-show"
import { HeadingStyled } from "../General/styled"

const Place = () => {
  return (
    <Box mt="20" minHeight={"300px"}>
      <Center>
        <HeadingStyled>Non? / Donde?</HeadingStyled>
      </Center>
      <Center my={10}>
        <HeadingStyled>Garena Jatetxea</HeadingStyled>
      </Center>
      <Box mb={5}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.822208283657!2d-2.768059183754949!3d43.12926097914285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fcb314b34b87d%3A0x468eec1e45347296!2sGarena!5e0!3m2!1ses!2ses!4v1674484254592!5m2!1ses!2ses"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
        <ImageSlide
          auto={0}
          images={[
            "https://etxauribaserria.eus/wp-content/uploads/2021/05/1-slide_1_loquesomos.jpg",
            "https://www.gastroactitud.com/wp-content/uploads/2020/08/garena-ga-15-1024x744.jpg",
            "https://res.cloudinary.com/tf-lab/image/upload/restaurant/c9fe83e6-9593-401d-a26c-5ffbad35ceb3/892a0d3f-f9bf-46ef-9e72-3d2118a24ac4.jpg",
            ,
          ]}
          captions={[]}
        />{" "}
      </Box>
    </Box>
  )
}

export default Place
