import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import logoBrush from '../assets/brush/brush.svg'
import Splash from '../assets/brush/splash.svg'
import FooterMessage from '../components/FooterMessage'
import BrushSegment from '../assets/brush/brush-segment.png'
import smallBrushImg from '../assets/brush/small-brush.png'
import styled from 'styled-components'
import ThemingGIF from '../assets/theming/theming.gif'

const PrinciplesSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`

const PrincipleContainer = styled.div`
  margin: 40px 0 24px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const IndexPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">

      <div className="ds-intro-first-section-container">
        <img src={logoBrush} className="ds-intro-logo-brush" />

        <h4 className="subheading">A mostly reasonable although opinionated approach to building responsive Digital Interfaces sharing the same anatomy.</h4>

        <img src={Splash} className="ds-intro-splash" />

        <div className="ds-circle-arrow-view-more">
          <i className="material-icons ds-icon-small">expand_more</i>
        </div>
      </div>


      <div className="ds-intro-second-section-container">
        <p className="ds-overline-text-style ds-intro-subtitle">Design Principles</p>

        <PrinciplesSection>
          <PrincipleContainer>
            <img src={smallBrushImg} style={{ width: '96px', height: '37px', margin: '24px 0 8px 0', transform: 'rotate(-20deg)' }} />
            <span className="ds-H4-text-style ds-intro-principle-number">01.</span>
            <p className="ds-intro-principle-title">MEANINGFUL SIMPLICITY + BEAUTY</p>

            <p style={{ width: '260px' }}>
              Yes. Simple and beautiful are always good but make sure it solves a problem first.
            </p>
          </PrincipleContainer>

          <PrincipleContainer>
            <img src={smallBrushImg} style={{ width: '96px', height: '37px', margin: '24px 0 8px 0', transform: 'rotate(-20deg)' }} />
            <span className="ds-H4-text-style ds-intro-principle-number">02.</span>
            <p className="ds-intro-principle-title">BORROW FROM NATURE</p>

            <p style={{ width: '260px' }}>
              Nature is already perfect. Use natural forces to influence the user's senses through code and design.
            </p>
          </PrincipleContainer>

          <PrincipleContainer>
            <img src={smallBrushImg} style={{ width: '96px', height: '37px', margin: '24px 0 8px 0', transform: 'rotate(-20deg)' }} />
            <span className="ds-H4-text-style ds-intro-principle-number">03.</span>
            <p className="ds-intro-principle-title">BE THE BRAND</p>

            <p style={{ width: '260px' }}>
              The success of my message is rooted in the <i>consistency</i> of my personal Brand.
            </p>
          </PrincipleContainer>
        </PrinciplesSection>


        <img src={BrushSegment} className="ds-intro-brush-segment-img" />
      </div>

      <div className="ds-intro-second-section-container">
        <p className="ds-overline-text-style ">What is this?</p>

        <div className="ds-col-container">
          <div className="ds-col-6">
            <p>OSKRHQ.DS is a <i>themable</i> Styleguide AND a Component Library written in React for both web and mobile. I created the system for myself to showcase my personal Brand but you can fork it and make it your own. Although this website consumes the system, the site of is just a face for what it really is. The magic is in the code which allows Design and Code to coexists in one sole language. All this, so that I can compose products from the same Brand Identity and Anatomy.</p>

            <p>Every UI element you see here was composed of the same 5 foundational elements or what I call <i><a href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf" target="_blank">The Anatomy of UI</a></i>: Color, Typography, Space, Motion, and Depth.</p>
          </div>

          <div className="ds-col-6">
            <p className="ds-H6-text-style"><span>Design System (noun)</span>: A <span className="ds-accent-text">product</span> made of living guidelines that communicates a <span className="ds-accent-text">unified</span> set of UX and design decisions which promotes <span className="ds-accent-text">harmony</span> across various media outputs.</p>
          </div>
        </div>

      </div>

      <div className="ds-intro-second-section-container">
        <p className="ds-overline-text-style">Why is this even a thing?</p>

        <div className="ds-col-container">
          <div className="ds-col-6">
            <p>Every interface you interact with was designed at some point. And those interfaces were probably crafted by design teams divided into smaller teams. These silos create fragmented experiences looking at the product holistically. Coupled with headaches when trying to communicate designs to developers, it can get really ugly for the user since their experience is the interaction with the whole product, not just a specific part of it.</p>
          </div>

          <div className="ds-col-6">
            <p className="ds-H6-text-style">Design Systems are a <span className="ds-accent-text">Visual Language</span>. A language that allows designers and developers to communicate with one another, amongst each other, and it allows your <span className="ds-accent-text">brand</span> to communicate with your users through carefully crafted and hopefully cohesive experiences.</p>
          </div>
        </div>

      </div>


      <div className="ds-intro-second-section-container">
        <p className="ds-overline-text-style">How Do I use it?</p>

        <div className="ds-col-container">
          <div className="ds-col-6">
            <p>If you are a Designer... I got you. I created a <a href="https://github.com/ogonzal87/oskrhq-uikit" target="blank">UI Kit</a> that mirrors the components you see on this website. That way, you can create experiences with the same building blocks (components) the Developers have. It also has all the design assets you will need to get started.</p>
          </div>

          <div className="ds-col-6">
            <p>If you are a Developer, check the <a href="https://github.com/ogonzal87/oskrhq-design-system" target="blank">Github repo</a> for guidance. And if you feel like contributing, it would make my day 😎</p>
          </div>
        </div>
      </div>

      <div className="ds-intro-second-section-container">
        <p className="ds-overline-text-style">Can I theme it?</p>

        <div className="ds-col-container">
          <div className="ds-col-12">
            <p>Yep. OSKRHQ.DS supports theming out of the box. You can fork the code repo in Github, change a couple of values in one place and be able to have a Design System with your unique personality and brand identity. Below you can see theming in action shifting from one theme to another. For more info, checkout the <a href="https://github.com/ogonzal87/oskrhq-design-system" target="_blank">repo</a>.</p>
          </div>

          <iframe src="https://player.vimeo.com/video/282266378" width="1000" height="800" frameBorder="0" mozAllowFullScreen allowFullScreen></iframe>
        </div>
      </div>

      <FooterMessage />

    </div>
  </div>
)

export default IndexPage
