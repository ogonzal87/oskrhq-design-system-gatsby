import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import '../components/_components.scss'
import '../scss/_styles.scss'

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="OSKRHQ Design System"
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
