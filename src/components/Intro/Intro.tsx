import React from "react"
import {
  CenterText,
  IntroBox,
  IntroBoxMobile,
  IntroGeneral,
  IntroGeneralMobile,
  IntroText,
  IntroText2,
  IntroText2Mobile,
  IntroTextMobile,
} from "./styled"
import {
  isMobileOnly,
} from "react-device-detect"
import "react-slideshow-image/dist/styles.css"


const Intro = () => {
  return (
    <>
      {isMobileOnly ? (
        <>
          <IntroBoxMobile top={"50px"}>
            <CenterText>
              <IntroTextMobile>Bea eta Unai</IntroTextMobile>
            </CenterText>
            <CenterText>
              <IntroText2Mobile>¡Nos casamos! -  27/07/2024 </IntroText2Mobile>
            </CenterText>
          </IntroBoxMobile>
          <IntroGeneralMobile top={"100px"}/>
        </>
      ) : (
        <IntroGeneral>
          <IntroBox>
            <CenterText>
              <IntroText>Bea eta Unai</IntroText>
            </CenterText>
            <CenterText>
              <IntroText2>¡Nos casamos! - 27/07/2024 </IntroText2>
            </CenterText>
          </IntroBox>
        </IntroGeneral>
      )}
    </>
  )
}

export default Intro
