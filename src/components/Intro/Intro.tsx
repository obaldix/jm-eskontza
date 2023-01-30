import React from "react"
import {
  CenterText,
  FadeStyled,
  IntroBox,
  IntroStyled,
  IntroText,
  IntroText2,
  LayerOverPhoto,
  SlideDiv,
  SlideEach,
  SlideSpan,
} from "./styled"
import { Fade } from "react-slideshow-image"
import {
  BrowserView,
  isMobile,
  MobileView,
  TabletView,
} from "react-device-detect"
import "react-slideshow-image/dist/styles.css"
import { Box, Center } from "@chakra-ui/react"

const Intro = () => {
  const images = [
    { src: "../../images/portada1.jpg", position: "right" },
    { src: "../../images/portada2.jpg", position: "center" },
    { src: "../../images/portada3.jpg", position: "center" },
    { src: "../../images/portada4.jpg", position: "center" },
    { src: "../../images/portada5.jpg", position: "center" },
    { src: "../../images/portada6.jpg", position: "center" },
    { src: "../../images/portada7.jpg", position: "center" },
    { src: "../../images/portada8.jpg", position: "center" },
    { src: "../../images/portada9.jpg", position: "top" },
  ]
  return (
    <>
      <MobileView>
        <IntroBox>
          <CenterText>
            <IntroText>Julen eta Maitane</IntroText>
          </CenterText>
          <CenterText>
            <IntroText2>Nos casamos! - 27/05/2023 </IntroText2>
          </CenterText>
        </IntroBox>
        <Box position={"relative"} left="26%" top={"100px"}>
          <FadeStyled autoplay={false}>
            {images.map(pic => (
              <SlideEach className="each-slide-effect">
                <SlideDiv
                  style={{
                    backgroundImage: `url(${pic.src})`,
                    height: "500px",
                    width: "100vh",
                    backgroundPosition: pic.position,
                  }}
                ></SlideDiv>
              </SlideEach>
            ))}
          </FadeStyled>
        </Box>
      </MobileView>
      <BrowserView>
        <Fade autoplay={false}>
          {images.map(pic => (
            <SlideEach className="each-slide-effect">
              <SlideDiv
                style={{
                  backgroundImage: `url(${pic.src})`,
                  height: "100vh",
                  backgroundPosition: pic.position,
                }}
              >
                <IntroBox>
                  <CenterText>
                    <IntroText>Julen eta Maitane</IntroText>
                  </CenterText>
                  <CenterText>
                    <IntroText2>Nos casamos! - 27/05/2023 </IntroText2>
                  </CenterText>
                </IntroBox>
              </SlideDiv>
            </SlideEach>
          ))}
        </Fade>
      </BrowserView>
    </>
  )
}

export default Intro
