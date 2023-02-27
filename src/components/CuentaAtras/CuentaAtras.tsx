import { Box, Center, Text } from "@chakra-ui/react"
import React from "react"
import Countdown from "react-countdown"
import { BrowserView, MobileView } from "react-device-detect"
import { Area } from "../General/styled"
import { CuentaAtrasDiv } from "./styled"

const CuentaAtras: React.FC = () => {
  return (
    // <Box style={{fontFamily: 'Harry Potter'}}>
<Area>
      <BrowserView>
        <Countdown
          date={new Date("2023-05-27")}
          renderer={props => (
            // <Text fontSize={"60px"}>
            //   {props.days} días {props.hours} horas {props.minutes} minutos{" "}
            //   {props.seconds} segundos
            // </Text>
            <Center>
              <CuentaAtrasDiv>
                <Text fontSize={"30px"} mr="10px">
                  {props.days}{" "}
                </Text>
                <Text fontSize={"20px"}> días</Text>
              </CuentaAtrasDiv>
              <CuentaAtrasDiv>
                <Text fontSize={"30px"} mr="10px">
                  {props.hours}
                </Text>
                <Text fontSize={"20px"}> horas</Text>
              </CuentaAtrasDiv>
              <CuentaAtrasDiv>
                <Text fontSize={"30px"} mr="10px">
                  {props.minutes}
                </Text>
                <Text fontSize={"20px"}> minutos </Text>
              </CuentaAtrasDiv>
              <CuentaAtrasDiv>
                <Text fontSize={"30px"} mr="10px">
                  {props.seconds}
                </Text>
                <Text fontSize={"20px"}> segundos</Text>
              </CuentaAtrasDiv>
            </Center>
          )}
        />
      </BrowserView>
      <MobileView>
        <Countdown
          date={new Date("2023-05-27")}
          renderer={props => (
            <>
              <Center>
                <CuentaAtrasDiv>
                  <Text fontSize={"30px"} >
                    {props.days}{" "}
                  </Text>
                  <Text fontSize={"20px"}> días</Text>
                </CuentaAtrasDiv>
              </Center>
              <Center>
              <CuentaAtrasDiv mt="5">
                <Text fontSize={"30px"} >
                  {props.hours}
                </Text>
                <Text fontSize={"20px"}> horas</Text>
                </CuentaAtrasDiv>
              </Center>
              <Center>
              <CuentaAtrasDiv mt="5">
                <Text fontSize={"30px"}>
                  {props.minutes}
                </Text>
                <Text fontSize={"20px"}> minutos </Text>
                </CuentaAtrasDiv>
              </Center>
              <Center>
              <CuentaAtrasDiv mt="5">
                <Text fontSize={"30px"}>
                  {props.seconds}
                </Text>
                <Text fontSize={"20px"}> segundos</Text>
                </CuentaAtrasDiv>
              </Center>
            </>
          )}
        />
      </MobileView>
    </Area>
  )
}

export default CuentaAtras
