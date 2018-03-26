import React from 'react'
import Link from 'gatsby-link'
import '../../scss/_styles.scss'

const clickHandler = () => {
  console.log("Click Handler Fired!")
}

const DSSwitch = (props) => (
  <div className="ds-switch-container is-active">
    <div className="ds-switch-nob"></div>
    <input type="checkbox" className={`ds-circle-btn`} onClick={clickHandler} />
  </div>  
);

export default DSSwitch;