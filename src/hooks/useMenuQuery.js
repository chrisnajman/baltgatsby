import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "MainMenu" }) {
        menuItems {
          nodes {
            label
            url
            id
          }
        }
      }
    }
  `)

  return data
}
