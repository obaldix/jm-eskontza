import { Box, Center, Heading, Text } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { Fade } from "react-slideshow-image"

export const IntroStyled = styled(Box)`
  background-image: url(../../images/portada.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
`

export const LayerOverPhoto = styled(Box)`
  width: 100%;
  height: 100vh;
`

export const CenterText = styled(Center)``

export const IntroGeneral = styled(Box)`
  background-image: url(../../images/portada1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
  align-items: center;
  justify-content: center;
  display: grid;
`
export const IntroGeneralMobile = styled(Box)`
  background-image: url(../../images/portada1.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height:400px;
  position: relative;

`

export const IntroBox = styled(Box)`
  border: 1px solid #fff;
  justify-content: center;
  width: 600px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

export const IntroBoxMobile = styled(Box)`
  justify-content: center;
  position: relative;
  width: 100%;
  margin: auto;
`

export const IntroText = styled(Text)`
  font-size: 60px;
  color: white;
`

export const IntroTextMobile = styled(Text)`
  font-size: 50px;
  color: black;
`
export const IntroText2 = styled(Text)`
  font-size: 30px;
  color: white;
`

export const IntroText2Mobile = styled(Text)`
  font-size: 30px;
  color: black;
`
/*******SLIDE */

export const SlideDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 350px;
`

export const SlideSpan = styled.span`
  padding: 20px;
  font-size: 20px;
  background: #efefef;
  text-align: center;
`

export const SlideEach = styled.div``

export const FadeStyled = styled(Fade)`
width:100vh
top:300px`
