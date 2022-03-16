import React from "react"
import parse from "html-react-parser"
import { useHomePageQuery } from "../../hooks/useHomePageQuery"
import { StyledImg } from "./HomePage.styles"

const HomePage = () => {
  const data = useHomePageQuery()
  const homeTitle = data.wpPage.title
  const imageData =
    data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData

  const imageAlt = data.wpPage.featuredImage.node.altText
  const homeContent = data.wpPage.content
  return (
    <div>
      <h1>{homeTitle}</h1>
      <StyledImg image={imageData} alt={imageAlt} />
      <div>{parse(homeContent)}</div>
    </div>
  )
}

export default HomePage

/*

import { getImage } from "gatsby-plugin-image"

... 

 const imageData = getImage(data.wpPage.featuredImage.node.localFile)

 vs:

 const imageData = data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData

 ... 

 <StyledImg image={imageData} alt={imageAlt} />

 What 'getImage' is doing is merely truncating the path:
 data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData

to: data.wpPage.featuredImage.node.localFile

I'm not going to use it for now as I want to see the full path from 
useHomePageQuery.js showing in this file.


*/
