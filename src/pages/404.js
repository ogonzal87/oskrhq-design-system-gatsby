import React from 'react'
import { DSButton } from 'oskrhq-design-system'
import Link from "gatsby-link";

const goBack = () => {
  console.log(location)
}

const NotFoundPage = () => (
  <div className="ds-main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column' }}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness 😞</p>

    <Link to="/">
      <DSButton
        type="primary"
        size=""
        onClick={goBack}>
        Go Home
      </DSButton>
    </Link>
  </div>
)

export default NotFoundPage
