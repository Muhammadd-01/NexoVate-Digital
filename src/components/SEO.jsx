import { Helmet } from "react-helmet"

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title} | GrowHub Solutions</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content="/og-image.jpg" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  )
}

export default SEO

