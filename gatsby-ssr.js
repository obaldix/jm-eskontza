import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Inter-roman.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/gistesy.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="gistesy"
    />,
    <link
      rel="preload"
      href="/fonts/migra.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="migra"
    />,
    <link
    as="font"
      href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
      rel="stylesheet"
      key="dancing"
    />,
  ])
}
