import React from "react"
import { graphql } from "gatsby"

import parse from "html-react-parser"
import Layout from "../components/Layout/Layout"
import SeoHelmet from "../components/SeoHelmet/SeoHelmet"

// 'data' prop is a reserved word in gatsby - to get data from pageQuery
const PageTemplate = ({ data }) => {
  // variables

  const pagePath = data.wpPage

  return (
    <Layout>
      <SeoHelmet
        title={pagePath.title}
        description={pagePath.metaDescription.metaDescription}
      />
      <div>
        <h1>{pagePath.title}</h1>
      </div>
      <div>{parse(pagePath.content)}</div>
    </Layout>
  )
}

export default PageTemplate

// the { data } prop in PageTemplate pulls this in
export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      databaseId
      title
      metaDescription {
        metaDescription
      }
      content
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1188
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
          altText
        }
      }
    }
  }
`

/*
 //   console.log(data.wpPage.databaseId)
 
This might come in useful for making page variants. Get the databaseId of a page then duplicate the jsx with required variations.
Note that the query contains 'databaseId' - this will allow you to get the unique id of the page
(as displayed in the admin url for that page) by using an if statement (ternary in this case):

{data.wpPage.databaseId === 124 ? <p>About page</p> : <p>All other pages</p>}

Above displays different message for About page based on its databaseId (124)

*/
