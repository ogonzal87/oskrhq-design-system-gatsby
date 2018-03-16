import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';

import './index.scss'
import '../scss/_styles.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="OSKRHQ Design System"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
