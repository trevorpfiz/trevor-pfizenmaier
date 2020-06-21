import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Page not found</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </Layout>
  )
}
