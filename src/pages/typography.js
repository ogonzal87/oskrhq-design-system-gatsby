import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'

const Typography = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Typography</h1>
        <h3 className="subheading">Based on Material’s Design typographic styles, I use these for both Web and Mobile.</h3>

        <p className="ds-button-text-style ds-typography-typeface">Lato Typeface</p>

        <h3 className="ds-typography-specimen">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789!@#$%</h3>

        <p className="ds-subheading-text-style ds-typography-type-sample">Lorem ipsum dolor amet austin whatever sriracha fixie cold-pressed coloring book. Pug hexagon prism, try-hard viral man bun la croix vice cardigan. Typewriter lo-fi gochujang seitan. Knausgaard shoreditch craft beer, trust fund messenger bag direct trade pork belly artisan roof party scenester activated charcoal semiotics.</p>

        <div className="ds-typography-type-syles-definition-container">
          <div className="ds-typography-type-syles-definition">
            <span className="ds-display4-text-style">Display 4</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Light, 112px)</span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-display3-text-style">Display 3</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 56px)</span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-display2-text-style">Display 2</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 45px)</span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-display1-text-style">Display 1</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 34px)</span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-headline-text-style">Headline</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 24px)</span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-title-text-style">Title</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Bold, 20px)</span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-subheading-text-style">Subheading</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 16px)</span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-body2-text-style">Body 2</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Bold, 14px)</span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-body1-text-style">Body 1</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 14px)</span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-caption-text-style">Caption</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 12px)</span>
          </div>

          <div className="ds-typography-type-syles-definition">
            <span className="ds-button-text-style">Button</span>
            <span className="ds-caption-text-style ds-typography-caption-secondary">(Lato, Regular, 14px)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Typography
