import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container404 } from "../styles/globalStyles"
import { UnderlineWord } from "../styles/homeStyles"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container404>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to={`/`} style={{ marginTop: "1.5rem" }}>
        Get back to <UnderlineWord>homepage</UnderlineWord> ?
      </Link>
    </Container404>
  </Layout>
)

export default NotFoundPage
