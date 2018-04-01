import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/FooterMessage';
import { DSAvatar } from '../../../node_modules/oskrhq-design-system/lib/index.js'
import styled from 'styled-components'
import MichaelScottImg from '../../assets/avatar-page/michael-scott.jpg'

const SpecimenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  margin-bottom: 24px;
  align-items: end;
  justify-items: center;
`

const Specimen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class AvatarPage extends React.Component {

  render() {
    return (
      <div className="ds-app-grid">
        <DSLeftNav />

        <div className="ds-main-content">
          <div className="ds-container">
            <h1>Avatar</h1>

            <h3 className="subheading">Avatars allow to display a person's Profile Image.</h3>

            <SpecimenWrapper>
              <Specimen>
                <DSAvatar userImg={MichaelScottImg} size="small" /> 
                <code style={{ marginTop: '8px' }}>small</code>
              </Specimen>  
              <Specimen>
                <DSAvatar userImg={MichaelScottImg} />
                <code style={{ marginTop: '8px' }}>base</code>
              </Specimen>
              <Specimen>
                <DSAvatar userImg={MichaelScottImg} size="medium" />
                <code style={{ marginTop: '8px' }}>medium</code>
              </Specimen>  
              <Specimen>
                <DSAvatar userImg={MichaelScottImg} size="large" />
                <code style={{ marginTop: '8px' }}>large</code>
              </Specimen>  
            </SpecimenWrapper>

            <h4 className="ds-usage-title">Usage</h4>

            <p>Avatars are Presentational React Components that you can use by simply instantiate a <code>DSAvatar</code> tag and pass attributes for userImg <code>(string | obj)</code>, and size <code>(string)</code>.</p>

            <Highlight className='jsx'>
              {`import Img from './img.jpg'

class DemoPage extends React.Component {
  render() {
    return (
      <DSAvatar
        userImg={Img}
        size="large"
      />
    )
  }
}`}
            </Highlight>

          </div>

          <FooterMessage />

        </div>
      </div>
    );
  }
}


export default AvatarPage;