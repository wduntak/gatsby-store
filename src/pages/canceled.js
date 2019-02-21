import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CancelPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>You're purchase was cancelled. Sad husky.</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CancelPage
