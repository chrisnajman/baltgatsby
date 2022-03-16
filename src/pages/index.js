import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

import HomePage from "../components/HomePage/HomePage"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomePage />
  </Layout>
)

export default IndexPage
