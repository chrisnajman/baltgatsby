import React from "react"

import SeoHelmet from "../components/SeoHelmet/SeoHelmet"
import Layout from "../components/Layout/Layout"

const NotFoundPage = () => (
  <Layout>
    <SeoHelmet
      title={`404: Not found`}
      description={`The page you requested cannot be found.`}
    />
    <h1>404: Not Found</h1>
    <p>The page you requested cannot be found.</p>
  </Layout>
)

export default NotFoundPage
