import React from "react"
import parse from "html-react-parser"
import { Link } from "gatsby"

import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent }) => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <span className="divider"></span>
      {parent ? (
        <>
          <Link to={parent.uri}>{parse(parent.title)}</Link>
          <span className="divider"></span>
        </>
      ) : null}
    </Wrapper>
  )
}

export default BreadCrumb
