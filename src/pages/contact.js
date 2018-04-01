import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/dracula.css'
import PresentationPic from '../assets/profile-pic/duotone.png'
import FooterMessage from '../components/FooterMessage'
import styled from 'styled-components'

const H2HeadingContactPage = styled.h2`
  font-size: 32px;
  line-height: normal;
  margin-bottom: 0;
`;

const Contact = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Let's Talk...</h1>

        <H2HeadingContactPage className="ds-contact-subheading">I created and maintain this System as a personal project but if you would like to consume it, fork it or contribute, check out the <a href="https://github.com/ogonzal87/oskrhq-design-system-react" target="_blank">repo</a> to get started.</H2HeadingContactPage>

        <H2HeadingContactPage className="ds-contact-subheading" style={{ marginBottom: "80px" }}>For more info about this Design System and others I have created, feel free to email me @ <a href="mailto:oscar@oskrhq.com?Subject=Hello!" target="_top">oscar@oskrhq.com</a>. I would love to geek out.</H2HeadingContactPage>

        <div className="ds-contact-presentation-pic-container">
          <img src={PresentationPic} className="ds-contact-presentation-pic" />
        </div>

      </div>

      <FooterMessage />

    </div>
  </div>
)

export default Contact