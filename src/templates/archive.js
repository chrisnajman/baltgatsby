import React from "react"
import parse from "html-react-parser"
import { Link, graphql } from "gatsby"

// Components
import Seo from "../components/seo"
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import ArchiveSidebar from "../components/ArchiveSidebar/ArchiveSidebar"
import Pagination from "../components/Pagination/Pagination"

// Styles
import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
} from "./archive.styles"

const emdash = parse("&mdash;")

const archiveTemplate = ({
  data: { allWpPost },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage },
}) => {
  return (
    <Layout>
      <Seo title={`Blog ${emdash} ${catName}`} />
      <Wrapper>
        <BreadCrumb parent={{ uri: "/blog/all-posts", title: "blog" }} />
        <ContentWrapper>
          <ArchiveSidebar catId={catId} categories={categories.edges} />
          <PageContent>
            <h1>{catName}</h1>
            {allWpPost.edges.map(post => (
              <article key={post.node.id} className="entry-content">
                <Link to={`/blog${post.node.uri}`}>
                  <StyledH2>{post.node.title}</StyledH2>
                </Link>
                <StyledDate>{post.node.date}</StyledDate>

                {parse(post.node.excerpt)}
                <StyledReadMore to={`/blog${post.node.uri}`}>
                  Read More
                </StyledReadMore>
                <div className="dot-divider" />
              </article>
            ))}
            <Pagination
              catUri={catUri}
              page={currentPage}
              totalPages={numPages}
            />
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default archiveTemplate

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
        }
      }
    }
    wpMediaItem(databaseId: { eq: 160 }) {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData(
            width: 1188
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }
  }
`
