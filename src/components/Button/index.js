import React from 'react'
import Link from 'gatsby-link'
import '../../scss/_styles.scss'


const clickHandler = () => {
  console.log("Click Handler Fired!");
}

const DSButton = () => (
  <button className="ds-button" onClick={clickHandler}>This is a button</button>
);

export default DSButton;