import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import gridExample2 from '../assets/space-page/gird-example2.jpg'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'

const Space = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Space</h1>

        <h3 className="subheading">Space is present every where </h3> 

        <h4>Fixed Space</h4>
        
        <p>I use a combination of a Soft and Hard 8-Point-Grid System. This means the UI uses multiples of 8 to define dimensions, padding, and margin of both block and inline elements. This ensures all measures follow the same spacing rules and you automatically get a more consistent UI with this.</p>

        <p>Regardless of form-factor, most popular screen sizes are divisible by 8 on at least one axis - usually both. Additionally, some platforms’ style guides (like Material Design) call specifically for a grid of 4 or 8 points, making this system a natural fit.</p>

        <p>See <a href="https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632" target="_blank">this article</a> if you want to learn more.</p>

        <img className="ds-space-page-grid-example2-img" src={gridExample2} />

        <h4>Fluid Space</h4>

        <p>For containers or elements that need to be fluid, the system provides a column system with 12 individual columns and css classes for their use. Jsut make sure you wrap the columns with this css class: <code>.ds-col-container</code>.</p>

        <div className="ds-col-container">
          <div className="ds-box ds-col-12"><code>.ds-col-12</code></div>
          <div className="ds-box ds-col-6"><code>.ds-col-6</code></div>
          <div className="ds-box ds-col-6"><code>.ds-col-6</code></div>
          <div className="ds-box ds-col-4"><code>.ds-col-4</code></div>
          <div className="ds-box ds-col-4"><code>.ds-col-4</code></div>
          <div className="ds-box ds-col-4"><code>.ds-col-4</code></div>
          <div className="ds-box ds-col-3"><code>.ds-col-3</code></div>
          <div className="ds-box ds-col-3"><code>.ds-col-3</code></div>
          <div className="ds-box ds-col-3"><code>.ds-col-3</code></div>
          <div className="ds-box ds-col-3"><code>.ds-col-3</code></div>
          <div className="ds-box ds-col-8"><code>.ds-col-8</code></div>
          <div className="ds-box ds-col-4"><code>.ds-col-4</code></div>
        </div>

        <h4 className="ds-usage-title">Usage</h4>

        <Highlight className='html'>
{`<div className="ds-col-container">
  <div className="ds-box ds-col-6">
    <div className="ball"></div>
  </div>
  <div className="ds-box ds-col-6">
    <div className="ball"></div>
  </div>        
</div>`}
        </Highlight>

        <Highlight className='scss'>
{`.ball {
  height: ds-space(extra-loose);
  width: ds-space(extra-loose);
  border-radius: 50%;
  background: ds-color(primary, 300);
}`}
        </Highlight>

       <iframe height='265' scrolling='no' title='oskrhq-design-system-space' src='//codepen.io/ogonzal87/embed/qodxwN/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{width: '100%'}}>See the Pen <a href='https://codepen.io/ogonzal87/pen/qodxwN/'>oskrhq-design-system-space</a> by Oscar (<a href='https://codepen.io/ogonzal87'>@ogonzal87</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>

      </div>

      <span className="ds-subheading-text-style ds-footer-text">Made and maintained with tons of passion by <a href="https://www.oskrhq.com/" target="_blank">Oscar Gonzalez</a></span>
    </div>
  </div>
)

export default Space
