import React from 'react'
import Link from 'gatsby-link'
import ProfilePic from '../../assets/profile-pic/profile-pic.jpeg'

const DSProfilePic = () => (
  <div className="ds-profile-avatar-wrapper">
    <img src={ProfilePic} className="ds-profile-avatar" />
    <div className="text">
      <span>Oscar Gonzalez</span>
      <a href="https://oskrhq.com/" target="_blank">oskrhq.com/</a>
    </div>
  </div>
)

export default DSProfilePic