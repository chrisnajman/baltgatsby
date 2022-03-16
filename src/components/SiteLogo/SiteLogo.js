import React from "react"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { LogoWrapper } from "./SiteLogo.styles"
import { StaticImage } from "gatsby-plugin-image"

const SiteLogo = () => {
  const { site } = useMenuQuery()
  return (
    <LogoWrapper>
      <StaticImage
        src="../../images/logo.png"
        placeholder="BLURRED_SVG"
        layout="constrained"
        width={125}
        alt={`Logo - link to ${site.siteMetadata.title} Home page`}
      />
    </LogoWrapper>
  )
}

export default SiteLogo
