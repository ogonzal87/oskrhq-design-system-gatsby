import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/LeftNav'
import Highlight from 'react-highlight'
import { DSButton } from "oskrhq-design-system";
import FooterMessage from '../../components/FooterMessage';
import styled from 'styled-components'

const SpecimenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 16px;
  margin-bottom: 24px;
`
const SpecimenSizeWrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-row: repeat(3, 1fr);
  grid-row-gap: 16px;
`

const ButtonsPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Buttons</h1>

        <h3 className="subheading">
          Buttons make common actions immediately visible and easy to perform
          with one click or tap.
        </h3>

        <h4>Types</h4>
        <SpecimenWrapper>
          <DSButton type="primary">Primary</DSButton>
          <DSButton type="secondary">Secondary</DSButton>
          <DSButton type="success">Success</DSButton>
          <DSButton type="info">Info</DSButton>
          <DSButton type="danger">Danger</DSButton>
          <DSButton type="ghost">Ghost</DSButton>
        </SpecimenWrapper>

        <SpecimenWrapper>
          <DSButton icon="face" type="primary" circle />
          <DSButton icon="face" type="secondary" circle />
          <DSButton icon="face" type="success" circle />
          <DSButton icon="face" type="info" circle />
          <DSButton icon="face" type="danger" circle />
          <DSButton icon="face" type="ghost" circle />
        </SpecimenWrapper>

        <SpecimenSizeWrapper>
          <h4>Sizes</h4>
          <DSButton type="primary" size="small">
            Small
          </DSButton>
          <DSButton type="primary" size="medium">
            Medium
          </DSButton>
          <DSButton type="primary">Fluid</DSButton>
        </SpecimenSizeWrapper>

        <h4 className="ds-usage-title">Usage</h4>

        <p className="ds-subheading-text-style">
          Buttons are tools the user has to communicate something to the app and
          perform a desired action. In this system they are a Presentational
          React Components that you can use by simply instantiate by creating a{" "}
          <code>DSButton</code> tag and passing attributes for type{" "}
          <code>(string)</code>, and size <code>(string)</code>. You can also use a Circle Button by
          instantiating a <code>DSButton</code> tag and passing attributes for
          icon <code>(string)</code> and type <code>(string)</code>. Check out
          the Iconography page as well.
        </p>

        <Highlight className="html">
          {`<DSButton 
  type="primary"
  size="fluid"
  onClick="doSomething">
  Save
</DSButton>


<DSButton
  circle  
  icon="face" 
  type="primary"
/>`}
        </Highlight>
      </div>

      <FooterMessage />
    </div>
  </div>
);

export default ButtonsPage;