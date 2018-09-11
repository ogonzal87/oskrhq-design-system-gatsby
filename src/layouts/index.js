import React from 'react'
import Helmet from 'react-helmet';
import '../components/_components.scss'
import '../scss/_styles.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="OSKRHQ Design System" />
    <div>
      {children()}
    </div>
  </div>
)

export default TemplateWrapper
