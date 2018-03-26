import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/ds-website-components/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/ds-website-components/FooterMessage';
import DSButton from '../../components/Button/index'
import DSCircleButton from '../../components/CircleButton/index'
import styled from 'styled-components'
import '../../scss/_styles.scss'

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

        <h3 className="subheading">Buttons make common actions immediately visible and easy to perform with one click or tap.</h3>

        <h4>Types</h4>        
        <SpecimenWrapper>
          <DSButton label="Primary" type="primary"/>
          <DSButton label="Secondary" type="secondary"/>
          <DSButton label="success" type="success"/>
          <DSButton label="info" type="info"/>
          <DSButton label="danger" type="danger" />
          <DSButton label="ghost" type="ghost" />
        </SpecimenWrapper>

        <SpecimenWrapper>
          <DSCircleButton icon="face" type="primary" />
          <DSCircleButton icon="face" type="secondary" />
          <DSCircleButton icon="face" type="success" />
          <DSCircleButton icon="face" type="info" />
          <DSCircleButton icon="face" type="danger" />
          <DSCircleButton icon="face" type="ghost" />
        </SpecimenWrapper>

        <SpecimenSizeWrapper>
          <h4>Sizes</h4>
          <DSButton label="Small" type="primary" size="small" />
          <DSButton label="Medium" type="primary" size="medium" />
          <DSButton label="Fluid" type="primary" />
        </SpecimenSizeWrapper>        
        
        <h4 className="ds-usage-title">Usage</h4>

        <p>Buttons are tools the user has to communicate something to the system and perform a desired action. In the system they are a Presentational React Component that you can use by simply instantiate by creating a <code>DSButton</code> tag and passing attributes for type <code>(string)</code>, size <code>(string)</code>, and a label <code>(string)</code>. You can also use a Circle Button by instantiating a <code>DSCircleButton</code> tag and passing attributes for icon <code>(string)</code> and type <code>(string)</code>. Check out the Iconography page as well.</p>

        <Highlight className='html'>
          {`<DSButton 
  label="save"
  type="primary"
  size="fluid"
  onClick="doSomething"
/>

<DSCircleButton 
  icon="face" 
  type="primary" 
/>`}
        </Highlight>

      </div>

      <FooterMessage />
    </div>
  </div>
)

export default ButtonsPage;