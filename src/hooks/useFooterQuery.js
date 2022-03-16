import { useStaticQuery, graphql } from "gatsby"

export const useFooterQuery = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      wpPage(databaseId: { eq: 206 }) {
        content
      }
    }
  `)

  return data
}
