import React from 'react'
import { DSButton } from 'oskrhq-design-system'
import Link from "gatsby-link";
import styled from 'styled-components'

const Text = styled.div`
  z-index: 1;
  h1, h5 {
    background: #5252ed;
    color: white;
  }

  h5 {
    margin-bottom: 40px;
  }
`

const NotFoundPage = () => (
  <div className="ds-main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column', height: '100vh' }}>

    <Text>
      <h1>SIKEEE 404!</h1>
      <h5>You arrived to a place that doesn&#39;t exist...</h5>
      <Link to="/" >
        <DSButton style={{ float: 'right', marginTop: '40px' }}
          type="primary"
          size="medium">
          Go Home
        </DSButton>
      </Link>
    </Text>


    <div
      style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <iframe
        src="https://giphy.com/embed/1GIiIIDxPdzkQ"
        width={'100%'}
        height={'100%'}
        style={{ position: "absolute" }}
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen></iframe>
    </div>



  </div>
)

export default NotFoundPage