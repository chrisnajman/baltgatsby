import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  margin-bottom: 2rem;
`

/*

import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)``

What this does is to output divs around the image, with
certain styles, and also outputs different sizes and file types (png/webp)


You can put additional styles inside the backticks- these will style
the outermost div (but you could also put classes there too.)

If you leave off the backticks Gatsby throws an error!!!!!

*/
