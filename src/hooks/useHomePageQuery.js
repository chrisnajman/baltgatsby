import { useStaticQuery, graphql } from "gatsby"

export const useHomePageQuery = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      wpPage(databaseId: { eq: 69 }) {
        id
        title
        metaDescription {
          metaDescription
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 1188
                )
              }
            }
            altText
          }
        }
        content
      }
    }
  `)

  return data
}
