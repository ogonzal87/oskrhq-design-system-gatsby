import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/ds-website-components/LeftNav'
import logoBrush from '../assets/brush/brush.svg'
import Splash from '../assets/brush/splash.svg'
import FooterMessage from '../components/ds-website-components/FooterMessage'
import BrushSegment from '../assets/brush/brush-segment.png'

const IndexPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">

      <div className="ds-intro-first-section-container">
        <img src={logoBrush} className="ds-intro-logo-brush" />

        <h3 className="subheading">A mostly reasonable although opinionated approach to building Responsive User Interfaces sharing the same anatomy.</h3>

        <img src={Splash} className="ds-intro-splash" />
        
        <div className="ds-circle-arrow-view-more">
          <i className="material-icons ds-icon-small">expand_more</i>
        </div>
      </div>

      <div className="ds-intro-second-section-container">
        <p className="ds-button-text-style ds-intro-subtitle">What is this?</p>

        <div className="ds-col-container">
          <div className="ds-col-5">
            <p>OSKRHQ.DS is a Styleguide AND a Component Library written in React for both web and mobile. Although this website consumes the system, the site of is just a face for what it really is. The magic is in the code and how Design and Code are able to coexists in one sole language, allowing teams to compose many products from the same Brand Identity.</p>

            <p>Every UI element you see here was composed from the same 5 foundational elements or what I call <a href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf" target="_blank">The Anatomy of UI</a>; Color, Typography, Space, Motion, and Depth</p>
          </div>

          <div className="ds-col-7">
            <p className="ds-headline-text-style"><span>Design System (noun)</span>: A <span className="ds-accent-text">product</span> made of living guidelines that communicates a <span className="ds-accent-text">unified</span> set of UX and design decisions which promotes <span className="ds-accent-text">harmony</span> across various media outputs.A mostly reasonable although opinionated approach to building Responsive User Interfaces sharing the same anatomy.</p>
          </div>
        </div>

        <img src={BrushSegment} className="ds-intro-brush-segment-img" />
      </div>

      

      <div className="ds-intro-second-section-container">
        <p className="ds-button-text-style ds-intro-subtitle">Why is this even a thing?</p>

        <div className="ds-col-container">
          <div className="ds-col-5">
            <p>Everything you see was designed at some point. However, as Brian Reed would say, few things are designed well. In most companies, interfaces are crafted in silos by smaller teams. This isolation creates fragmented experiences in the form of inconsistencies looking at the product holistically. Coupled with headaches when trying to communicate designs to developers, it can get really ugly for the user since their experience is the interaction with the whole product, not just a specific interface.</p>
          </div>

          <div className="ds-col-7">
            <p className="ds-headline-text-style">The System is a <span className="ds-accent-text">Visual Language</span>. A language that allows designers and developers to communicate with one another, amongst each other, and it allows your <span className="ds-accent-text">brand</span> to communicate with your users through carefully crafted and hopefully cohesive experiences.</p>
          </div>
        </div>
        
        <img src={BrushSegment} className="ds-intro-brush-segment-img" />
      </div>

      

      <div className="ds-intro-second-section-container">
        <p className="ds-button-text-style ds-intro-subtitle">How Do I use it?</p>

        <div className="ds-col-container">
          <div className="ds-col-12">
            <p>If you are a Designer... I got you. I created a <a href="https://github.com/ogonzal87/oskrhq-uikit" target="blank">UI Kit</a> that mirrors the components you see in this website. That way, you can create experiences with the same building blocks (components) the Developers have. It also has all the design assets you will need to get started.</p>

            <p>If you are a Developer, check the <a href="https://github.com/ogonzal87/oskrhq-design-system-react" target="blank">Github repo</a> from guidance. And if you feel like contributing, it would make my day 😎</p>
          </div>
        </div>
      </div>
      
      <FooterMessage />

    </div>
  </div>
)

export default IndexPage
