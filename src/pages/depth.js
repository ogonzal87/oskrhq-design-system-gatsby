import React from 'react'
import DSLeftNav from '../components/LeftNav/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/FooterMessage/FooterMessage'
import styled from 'styled-components'

const SectionCopy = styled.div`
  margin: 200px 0 40px 0;
`

const SectionCode = styled.div`
  margin-top: 32px;
`

const SectionCodePen = styled.div`
  margin: 200px 0;
`

const Depth = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Depth</h1>

        <h4 className="subheading">Nature has 3 dimensions. Using shadows we communicate surface, mimicking the real world digitally.</h4>

        <div className="ds-depth-specimens-container">
          <div className="ds-depth-specimen ds-depth-specimen1"></div>
          <div className="ds-depth-specimen ds-depth-specimen2"></div>
          <div className="ds-depth-specimen ds-depth-specimen3"></div>
          <div className="ds-depth-specimen ds-depth-specimen4"></div>
          <div className="ds-depth-specimen ds-depth-specimen5"></div>
        </div>

        <div className="ds-depth-specimens-container" style={{ marginTop: '32px' }}>
          <span className="ds-depth-specimen-text"><code>ds-depth(100)</code></span>
          <span className="ds-depth-specimen-text"><code>ds-depth(200)</code></span>
          <span className="ds-depth-specimen-text"><code>ds-depth(300)</code></span>
          <span className="ds-depth-specimen-text"><code>ds-depth(400)</code></span>
          <span className="ds-depth-specimen-text"><code>ds-depth(500)</code></span>
        </div>


        <SectionCopy>
          <div className="ds-col-container">
            <div className="ds-col-8">
              <p className="ds-overline-text-style">Rationale</p>
              <p  >Since <i>Copying Nature</i> is one of our Design Principles, OSKRHQ.DS is heavily influenced by how the physical world behaves. The user interacts with analog objects all the time. So, if we are able to translate nature digitally, they will feel more at ease. In the physical world, objects can be stacked or affixed to one another, but cannot pass through each other. Objects also cast shadows and reflect light.</p>
            </div>
          </div>



        </SectionCopy>


        <SectionCopy>
          <h4 className="ds-usage-title">Usage</h4>

          <p  >By making use of the sass function <code>ds-depth($range)</code>, where <code>$range</code> is a value from 100 through 500, you can create levels of visual hierarchy. The higher the number, the more elevated an item will appear. Use this when you are trying to emphasize sections of UI like containers or buttons.</p>
        </SectionCopy>



        <Highlight className='scss'>
          {`.my-new-cool-container-coming-at-you {
  box-shadow: ds-depth(500);
  background: ds-color(secondary, 300);
  width:      ds-space(super-loose);
  height:     ds-space(super-loose);
}`}
        </Highlight>

        <SectionCodePen>
          <h4>Playground</h4>
          <p  >Feel free to play around with the utility funtions. Just scroll all the way to the bottom of the SCSS file, and create some sufaces with the functions provided.</p>
          <iframe height='398' scrolling='no' title='oskrhq-design-system-depth' src='//codepen.io/ogonzal87/embed/xYvLrw/?height=398&theme-id=dark&default-tab=css,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{ width: '100%' }}>See the Pen <a href='https://codepen.io/ogonzal87/pen/xYvLrw/'>oskrhq-design-system-depth</a> by Oscar (<a href='https://codepen.io/ogonzal87'>@ogonzal87</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>

        </SectionCodePen>


      </div>

      <FooterMessage />

    </div>
  </div>
)

export default Depth