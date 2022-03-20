import React from "react"
import { Helmet } from "react-helmet"

const SeoHelmet = ({ title, description }) => {
  const language = "en-GB"
  const twitterCreator = "@CN"
  const siteTitle = "Baltimore Classification of Viruses"
  return (
    <Helmet>
      <html lang={language} />
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SeoHelmet
