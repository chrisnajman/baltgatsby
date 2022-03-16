import React from "react"
import parse from "html-react-parser"
import { FooterWrapper } from "./Footer.styles"

const Footer = () => {
  const copyright = parse("&copy;")
  let date = new Date().getFullYear()

  return (
    <FooterWrapper>
      <div>{`${copyright} CN ${date}`}</div>
    </FooterWrapper>
  )
}

export default Footer
