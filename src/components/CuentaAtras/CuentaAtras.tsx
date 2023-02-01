import { Box, Text } from "@chakra-ui/react"
import React from "react"
import Countdown from "react-countdown"
import { BrowserView, MobileView } from "react-device-detect"

const CuentaAtras: React.FC = () => {
  return (
    // <Box style={{fontFamily: 'Harry Potter'}}>
    <Box mt="60px">
      <BrowserView>
        <Countdown
          date={new Date("2023-05-27")}
          renderer={props => (
            <Text fontSize={"60px"}>
              {props.days} días {props.hours} horas {props.minutes} minutos{" "}
              {props.seconds} segundos
            </Text>
          )}
        />
      </BrowserView>
      <MobileView>
        <Countdown
          date={new Date("2023-05-27")}
          renderer={props => (
            <>
              <Text fontSize={"30px"}>{props.days} días</Text>
              <Text fontSize={"30px"}>{props.hours} horas</Text>
              <Text fontSize={"30px"}>{props.minutes} mminutos </Text>
              <Text fontSize={"30px"}>{props.seconds} segundos</Text>
            </>
          )}
        />
      </MobileView>
    </Box>
  )
}

export default CuentaAtras
