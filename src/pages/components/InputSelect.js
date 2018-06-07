import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/FooterMessage';
import styled from 'styled-components'
import { DSInputSelect } from 'oskrhq-design-system'

const InputSelectPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Input Select</h1>

        <h3 className="subheading">
          Select inputs allow users to select an option from a list.
        </h3>

        <div className="ds-col-container">
          <div className="ds-col-6">
            <DSInputSelect label="Marital Status" placeholder="Select">
              <option value="" selected>
                Choose...
              </option>
              <option value="">Single</option>
              <option value="">Married</option>
              <option value="">It's Complicated</option>
            </DSInputSelect>
          </div>
          <div className="ds-col-6">
            <DSInputSelect label="Input Label" placeholder="Select">
              <option value="">Choose...</option>
              <option value="">This is an Item</option>
              <option value="" selected>
                And another one
              </option>
              <option value="">And one more...</option>
            </DSInputSelect>
          </div>
        </div>

        <h4 className="ds-usage-title">Usage</h4>

        <p className="ds-subheading-text-style">
          Input Selects are Presentational React Components that you can
          instantiating by <code>DSInputSelect</code> opening and closing tags
          and passing an attribute for label <code>(string)</code>. You are able
          to transclude the options.
        </p>

        <Highlight className="html">
          {`<DSInputSelect label="Marital Status">
  <option value="" selected>Choose...</option>
  <option value="">This is an Item</option>
  <option value="">And another one</option>
  <option value="">And one more...</option>
</DSInputSelect>`}
        </Highlight>
      </div>

      <FooterMessage />
    </div>
  </div>
);

export default InputSelectPage;