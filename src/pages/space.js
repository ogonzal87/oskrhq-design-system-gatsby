import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import gridExample2 from '../assets/space-page/gird-example2.jpg'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/FooterMessage'

const Space = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Space</h1>

        <h3 className="subheading">Every UI element uses Space. The system uses a geometric progression scale to create consistency and rhythm in space.</h3> 

        <h4>Fixed Space</h4>

        <div className="ds-col-container">
          
          <div className="ds-col-6">
            <p>Digital Screens are made of a grid of teeny-tiny pixels. Kinda like a <a href="https://youtu.be/UdWCUr1FDqU?t=51s" target="_blank">microscopic net</a>. Following this mental model, I use a combination of a Soft a Hard 8-Point-Grid System. This means that space uses multiples of 8px to define dimensions, padding, and margin of both block and inline elements. This ensures all measures follow the same spacing rules and avoids many headaches when designers are discussing space with developers.</p>
          </div>

          <div className="ds-col-6">
            <p><strong>Why 8px?</strong> Regardless of form-factor, most popular screen sizes are divisible by 8 on at least one axis - usually both. See <a href="https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632" target="_blank">this article</a> to learn more.</p>

            <p>The system has a predictable scale to measure fixed space - 4px (extra-tight), 8px (tight), 16px (base), 24px (bit-loose), 32px (loose), 48px (extra-loose), 64px (super-loose).</p>
          </div>

        </div>
        
        <img className="ds-space-page-grid-example-img" src={gridExample2} />

        <div className="ds-space-space-specimens-container">
          <div className="ds-space-space-specimen">
            <div className="ds-space-space-specimen1"></div>
            <code>ds-space(extra-tight)</code>
          </div>
          <div className="ds-space-space-specimen">
            <div className="ds-space-space-specimen2"></div>
            <code>ds-space(tight)</code>
          </div>
          <div className="ds-space-space-specimen">
            <div className="ds-space-space-specimen3"></div>
            <code>ds-space(base)</code>
          </div>
          <div className="ds-space-space-specimen">
            <div className="ds-space-space-specimen4"></div>
            <code>ds-space(bit-loose)</code>
          </div>
          <div className="ds-space-space-specimen">
            <div className="ds-space-space-specimen5"></div>
            <code>ds-space(loose)</code>
          </div>
          <div className="ds-space-space-specimen">
            <div className="ds-space-space-specimen6"></div>
            <code>ds-space(extra-loose)</code>
          </div>
          <div className="ds-space-space-specimen">
            <div className="ds-space-space-specimen7"></div>
            <code>s-space(super-loose)</code>
          </div>
        </div>

        <h4>Fluid Space</h4>

        <p>For containers or elements that need to be fluid, as in they need to expand a certain percentage of a container, the system uses a 12-column system along the x-axis with scss utility classes for its use. <strong>Just make sure you wrap the column elements with a div and assign it this css class: <code>.ds-col-container</code></strong>.</p>

        <div className="ds-col-container ds-space-col-specimen-container">
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

        <p>For fixed spacing, make use of the sass function <code>ds-space($variable)</code> where <code>$variable</code> is either extra-tight (4px), tight (8px), base (16px), bit-loose (24px), loose (32px), extra-loose (48px), or super-loose (64px). In most cases, you will use Fluid Space to layout content and elements on the screen, and Fixed Spacing when composing these elements.</p>

        <Highlight className='html'>
{`<div class="ds-col-container">
  <div class="ds-box ds-col-6">
    <div class="ball"></div>
  </div>
  <div class="ds-box ds-col-6">
    <div class="ball"></div>
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

      <FooterMessage />
    </div>
  </div>
)

export default Space
