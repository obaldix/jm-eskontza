import { Box, Text } from "@chakra-ui/react"
import React from "react"
import Countdown from "react-countdown"

const CuentaAtras: React.FC = () => {
  return (
    <Box style={{fontFamily: 'Harry Potter'}}>
    <Countdown
      date={new Date("2023-05-27")}
      renderer={props => (
        <Text fontSize={"60px"} >{props.days} días {props.hours} horas {props.minutes} minutos {props.seconds} segundos</Text>
      )}
    /></Box>
  )
}

export default CuentaAtras
