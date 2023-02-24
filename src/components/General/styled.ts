import { Box, Heading } from "@chakra-ui/react"
import styled from "@emotion/styled"

export const HeadingStyled = styled(Heading)`
  font-size: 20px;
`

export const LoaderDiv = styled(Box)`
  top: 30%;
  position: relative;
  left: 50%;
  color: #000;
`

export const Loader = styled(Box)`
  background-image: url(./images/loader.svg);
  width: 100px;
  height: 100px;
`
export const Area = styled(Box)`
  margin-top: 70px;
`
