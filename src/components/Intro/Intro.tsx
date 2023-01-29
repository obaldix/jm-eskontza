import { Box } from "@chakra-ui/react"
import React from "react"
import { HeadingStyled } from "../General/styled"
import {
  CenterText,
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
import "react-slideshow-image/dist/styles.css"

const Intro = () => {
  const images = [
    "../../images/portada1.jpg",
    "../../images/portada2.jpg",
    "../../images/portada3.jpg",
    "../../images/portada4.jpg",
    "../../images/portada5.jpg",
    "../../images/portada6.jpg",
    "../../images/portada7.jpg",
    "../../images/portada8.jpg",
    "../../images/portada9.jpg",
  ]
  return (
    // <IntroStyled>
    //   <LayerOverPhoto>
    //     <IntroBox >
    //     <CenterText>
    //       <IntroText>Julen eta Maitane</IntroText>
    //     </CenterText>
    //     <CenterText>
    //       <IntroText2>Nos casamos! -   27/05/2023 </IntroText2>
    //     </CenterText>
    //     </IntroBox>
    //   </LayerOverPhoto>

    // </IntroStyled>
    <Fade>
      {images.map((pic)=>
      <SlideEach className="each-slide-effect">
        <SlideDiv
          style={{ backgroundImage: `url(${pic})`, height: "100vh" }}
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
)}
    </Fade>
  )
}

export default Intro
