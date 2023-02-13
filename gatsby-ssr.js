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
  ])
}
