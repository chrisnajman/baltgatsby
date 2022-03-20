import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"
// import Seo from "../../components/seo"

import { GatsbyImage } from "gatsby-plugin-image"

// components
import SeoHelmet from "../../components/SeoHelmet/SeoHelmet"
import Layout from "../../components/Layout/Layout"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import PostSidebar from "../../components/PostSidebar/PostSidebar"

// Styled components
const Wrapper = styled.div`
  max-width: 1188px;
  margin: 0 auto;
  /* padding: 20px; */
`

const ContentWrapper = styled.div`
  @media (min-width: 992px) {
    display: flex;
  }
`

const PostContent = styled.article`
  margin-top: 20px;
`

const StyledImg = styled(GatsbyImage)`
  margin-bottom: 2rem;
`

const PageHero = ({ img, altText }) => {
  return <StyledImg image={img} alt={altText} />
}

const PostTemplate = ({ data }) => {
  const postPath = data.post

  const imagePath =
    data.post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
  const altText = data.post.featuredImage.node.altText
  return (
    <Layout>
      <SeoHelmet
        title={data.post.title}
        description={data.post.metaDescription.metaDescription}
      />
      <Wrapper>
        <BreadCrumb
          parent={{
            uri: "/blog/all-posts",
            title: "blog",
          }}
        />

        <ContentWrapper>
          <PostSidebar
            postDate={postPath.date}
            postAuthor={postPath.author.node.name}
            postCategories={postPath.categories.nodes}
          />
          <PostContent>
            <h1>{postPath.title}</h1>
            <PageHero img={imagePath} altText={altText} />
            <div>{parse(postPath.content)}</div>
          </PostContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query ($id: String!) {
    post: wpPost(id: { eq: $id }) {
      metaDescription {
        metaDescription
      }
      title
      content
      author {
        node {
          name
        }
      }
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
      date(formatString: "DD MM YYYY")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`

/*

The nested route for blog pages (blog/name-of-post) is created
merely by creating a 'blog' folder inside 'Pages' folder
and creating a file called {wpPost.uri}.js
*/
