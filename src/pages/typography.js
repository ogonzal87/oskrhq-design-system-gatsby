import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/FooterMessage'
import styled from 'styled-components'

const SectionCopy = styled.div`
  margin: 200px 0 300px 0;
`

const SectionCode = styled.div`
  margin-top: 40px;
`

const SectionCodePen = styled.div`
  margin: 200px 0;
`

const Typography = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Typography</h1>
        <h3 className="subheading"><i>“Typography is more art than engineering—though engineering is certainly a part of it”</i> - Robert Bringhurst.</h3>

        <p className="ds-button-text-style ds-typography-typeface">Lato Typeface</p>

        <h3 className="ds-typography-specimen">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789!@#$%</h3>

        <p className="ds-subheading-text-style ds-typography-type-sample">Lorem ipsum dolor amet austin whatever sriracha fixie cold-pressed coloring book. Pug hexagon prism, try-hard viral man bun la croix vice cardigan. Typewriter lo-fi gochujang seitan. Knausgaard shoreditch craft beer, trust fund messenger bag direct trade pork belly artisan roof party scenester activated charcoal semiotics.</p>

        <div className="ds-typography-type-syles-definition-container">
          <div className="ds-typography-type-syles-definition">
            <span className="ds-display4-text-style">Display 4</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Light, 112px) - <code>.ds-display4-text-style</code></span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-display3-text-style">Display 3</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 56px) - <code>.ds-display3-text-style</code></span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-display2-text-style">Display 2</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 45px) - <code>.ds-display2-text-style</code></span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-display1-text-style">Display 1</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 34px) - <code>.ds-display1-text-style</code></span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-headline-text-style">Headline</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 24px) - <code>.ds-headline-text-style</code></span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-title-text-style">Title</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Bold, 20px) - <code>.ds-title-text-style</code></span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-subheading-text-style">Subheading</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 16px) - <code>.ds-subheading-text-style</code></span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-body2-text-style">Body 2</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Bold, 14px) - <code>.ds-body2-text-style</code></span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-body1-text-style">Body 1</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 14px) - <code>.ds-body1-text-style</code></span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-caption-text-style">Caption</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 12px) - <code>.ds-caption-text-style</code></span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-button-text-style">Button</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 14px) - <code>.ds-button-text-style</code></span>
          </div>
        </div>

        <SectionCopy>
          <div className="ds-col-container">
            <div className="ds-col-6">
              <p className="ds-typography-typeface ds-button-text-style">Typeface Rationale</p>
              <p className="ds-subheading-text-style">No. I did not choose <i>Lato</i> because it is a free Typeface (although it did influence my decision 😬). I really chose it because I wanted a Sans Serif that looked both professional and energetic (more energetic than professional, though), was readable in both web and mobile with fast render speeds and had support for Spanish Glyphs. I plan on translating the System so that was important for me. I considered using Libre Baskerville for Headings and Futura for body text but making them work under Material's Type scale just did not cut it.</p>
            </div>
          

            <div className="ds-col-6">
              <p className="ds-typography-typeface ds-button-text-style">Type Scale Rationale</p>
              <p className="ds-subheading-text-style">This scale is inspired by Material Design's Type scale since the team already solved for a scale that was extensible enough for both web and mobile and used an 8-point grid... Why reinvent the wheel? Part of me wanted to create my own, but I am a one-man shop. Type Scales that work well on any screen, are not as simple as just arbitrarily applying a Golden Ratio (1.6) or a Perfect Fifth (1.5). Let's just say, I deeply admire Typographers...</p>
            </div>
          </div>
        </SectionCopy>

        <h4>Usage</h4>

        <p className="ds-subheading-text-style">Every typographic style defined above already has a utility class you can use such as <code>.ds-display2-text-style</code>. Although not advised, you can create your own from a standard base of utility sass functions; <code>ds-font-size()</code>, <code>ds-font-weight()</code>, <code>ds-line-height()</code>, and <code>ds-color()</code>. When creating your own combination, keep in mind that these have to complement each other, specially line-height and font-size.</p>
        
        <SectionCode>
          <Highlight className='scss'>
          {`.my-new-ugly-big-text {
  font-size:   ds-font-size(display4);
  line-height: ds-line-height(display4);
  font-weight: ds-font-weight(display4, bold);
  color:       ds-color(secondary, 600);
}`}
          </Highlight>
        </SectionCode>

        <SectionCodePen>
          <h4>Playground</h4>
          <p className="ds-subheading-text-style">Feel free to play around with the utility funtions and classes. Just scroll all the way to the bottom of the SCSS file, and instantiate your new Typography Styles there.</p>
          <iframe height='506' scrolling='no' title='oskrhq-design-system-typography' src='//codepen.io/ogonzal87/embed/QQROOx/?height=506&theme-id=dark&default-tab=css,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{ width: '100%' }}>See the Pen <a href='https://codepen.io/ogonzal87/pen/QQROOx/'>oskrhq-design-system-typography</a> by Oscar (<a href='https://codepen.io/ogonzal87'>@ogonzal87</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
        </SectionCodePen>
      </div>

      <FooterMessage />

    </div>
  </div>
)

export default Typography
