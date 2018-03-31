import React from 'react'
import Link from 'gatsby-link'
import '../../scss/_styles.scss'

class DSInputText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ds-input-text-container">
        <label className="ds-body1-text-style ds-input-label">{this.props.label}</label>
        <input type={this.props.type} placeholder={this.props.placeholder} className="ds-input-field ds-subheading-text-style"  value={this.props.value}/>
      </div>
    )
  }
}

export default DSInputText