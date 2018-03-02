import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'

const IndexPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">

        <h1>Introduction</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>

      </div>
    </div>
  </div>
)

export default IndexPage
