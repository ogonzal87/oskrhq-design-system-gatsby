import React from 'react'
import Link from 'gatsby-link'
import './ds-left-nav-footer.scss'
import ProfilePic from '../../../assets/profile-pic/profile-pic.jpeg'
import SketchImg from '../../../assets/logo/sketch-brand-mark.png'
import GithubImg from '../../../assets/logo/github-brand-mark.png'

const DSLeftNavFooter = () => (
  <div className="ds-leftnav-footer-wrapper">

    {/* <img src={ProfilePic} className="ds-profile-avatar" />
    <div className="text">
      <span>Oscar Gonzalez</span>
      <a href="https://oskrhq.com/" target="_blank">oskrhq.com/</a>
    </div> */}

    <div className="ds-leftnav-resources-container">
      <a href="https://github.com/ogonzal87/oskrhq-uikit" target="_blank" className="ds-leftnav-resource">
        <img src={SketchImg} />
        {/* <span className="ds-caption-text-style">UI KIT</span> */}
      </a>
      <a href="https://github.com/ogonzal87/oskrhq-design-system-react" target="_blank" className="ds-leftnav-resource">
        <img src={GithubImg} className="github-img" />
        {/* <span className="ds-caption-text-style">Github Repo</span> */}
      </a>
    </div>
  </div>
)

export default DSLeftNavFooter