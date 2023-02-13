import React from "react"
import {
  CenterText,
  FadeStyled,
  IntroBox,
  IntroBoxMobile,
  IntroStyled,
  IntroText,
  IntroText2,
  IntroText2Mobile,
  IntroTextMobile,
  LayerOverPhoto,
  SlideDiv,
  SlideEach,
  SlideSpan,
} from "./styled"
import { Fade } from "react-slideshow-image"
import {
  BrowserView,
  isMobile,
  isMobileOnly,
  MobileView,
  TabletView,
} from "react-device-detect"
import "react-slideshow-image/dist/styles.css"
import { Box, Center } from "@chakra-ui/react"

const Intro = () => {
  const images = [
    {
      src: "../../images/portada1.jpg",
      positionWeb: "right",
      positionMobile: "30em 0em",
    },
    {
      src: "../../images/portada2.jpg",
      positionWeb: "center",
      positionMobile: "30em 0em",
    },
    {
      src: "../../images/portada3.jpg",
      positionWeb: "center",
      positionMobile: "30em 0em",
    },
    {
      src: "../../images/portada4.jpg",
      positionWeb: "center",
      positionMobile: "38em 0em",
    },
    {
      src: "../../images/portada5.jpg",
      positionWeb: "center",
      positionMobile: "23em 0em",
    },
    {
      src: "../../images/portada6.jpg",
      positionWeb: "center",
      positionMobile: "34em 0em",
    },
    {
      src: "../../images/portada7.jpg",
      positionWeb: "center",
      positionMobile: "36em 0em",
    },
    {
      src: "../../images/portada8.jpg",
      positionWeb: "center",
      positionMobile: "33em -19em",
      size: "70%",
    },
    {
      src: "../../images/portada9.jpg",
      positionWeb: "top",
      positionMobile: "38em 0em",
    },
  ]
  return (
    <>
      {isMobileOnly ? (
        <>
          <IntroBoxMobile top={"50px"}>
            <CenterText>
              <IntroTextMobile>Julen eta Maitane</IntroTextMobile>
            </CenterText>
            <CenterText>
              <IntroText2Mobile>Nos casamos! - 27/05/2023 </IntroText2Mobile>
            </CenterText>
          </IntroBoxMobile>
          <Box position={"relative"} top={"100px"}>
            <FadeStyled autoplay={false}>
              {images.map(pic => (
                <SlideEach className="each-slide-effect">
                  <SlideDiv
                    style={{
                      backgroundImage: `url(${pic.src})`,
                      height: "500px",
                      width: "100vh",
                      backgroundPosition: pic.positionMobile,
                      backgroundSize: pic.size ? pic.size : "contain",
                    }}
                  ></SlideDiv>
                </SlideEach>
              ))}
            </FadeStyled>
          </Box>
        </>
      ) : (
        <Fade autoplay={false}>
          {images.map(pic => (
            <SlideEach className="each-slide-effect">
              <SlideDiv
                style={{
                  backgroundImage: `url(${pic.src})`,
                  height: "100vh",
                  backgroundPosition: pic.positionWeb,
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
      )}{" "}
    </>
  )
}

export default Intro
