import React from "react"
import { GlobalStyles, SiteWrapper, Primary } from "./Layout.styles"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <SiteWrapper>
      <GlobalStyles />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </SiteWrapper>
  )
}

export default Layout
