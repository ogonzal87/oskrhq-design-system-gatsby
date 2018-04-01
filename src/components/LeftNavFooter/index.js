import React from 'react'
import Link from 'gatsby-link'
import './ds-left-nav-footer.scss'
import ProfilePic from '../../assets/profile-pic/profile-pic.jpeg'
import SketchImg from '../../assets/logo/sketch-brand-mark.png'
import GithubImg from '../../assets/logo/github-brand-mark.png'

const DSLeftNavFooter = () => (
  <div className="ds-leftnav-footer-wrapper">
    <div className="ds-leftnav-resources-container">
      <a href="https://github.com/ogonzal87/oskrhq-uikit" target="_blank" className="ds-leftnav-resource">
        <img src={SketchImg} />
      </a>
      <a href="https://github.com/ogonzal87/oskrhq-design-system-react" target="_blank" className="ds-leftnav-resource">
        <img src={GithubImg} className="github-img" />
      </a>
    </div>
  </div>
)

export default DSLeftNavFooter