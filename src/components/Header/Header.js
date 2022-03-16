import React from "react"
import { Link } from "gatsby"
import { HeaderWrapper } from "./Header.styles"
import SiteLogo from "../SiteLogo/SiteLogo"
import Navigation from "../Navigation/Navigation"

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <SiteLogo />
      </Link>

      <Navigation />
    </HeaderWrapper>
  )
}

export default Header
