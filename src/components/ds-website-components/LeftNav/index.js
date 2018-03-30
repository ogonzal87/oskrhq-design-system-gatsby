import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../../assets/logo/ds-logo.svg'
import DSLeftNavFooter from '../LeftNavFooter'
import { NavLink } from 'react-router-dom'
import { withPrefix } from "gatsby-link"

class DSLeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sublistIsShowing: false };
  }

  toggleSublist = () => {
    this.setState({ sublistIsShowing: !this.state.sublistIsShowing });
  }

  render() {
    return (
      <div className="ds-left-nav">
        <img src={Logo} />

        <ul>
          <li><NavLink exact to="/" activeClassName="ds-nav-link-isActive">Introduction</NavLink></li>
          <li><NavLink exact to="/color/" activeClassName="ds-nav-link-isActive">Color</NavLink></li>
          <li><NavLink exact to="/typography/" activeClassName="ds-nav-link-isActive">Typography</NavLink></li>
          <li><NavLink exact to="/space/" activeClassName="ds-nav-link-isActive">Space</NavLink></li>
          <li><NavLink exact to="/depth/" activeClassName="ds-nav-link-isActive">Depth</NavLink></li>
          <li><NavLink exact to="/motion/" activeClassName="ds-nav-link-isActive">Motion</NavLink></li>
          <li><NavLink exact to="/iconography/" activeClassName="ds-nav-link-isActive">Iconography</NavLink></li>
          <li onClick={this.toggleSublist}><a className="ds-left-nav-component-anchor">Components</a>
            <ul className={`ds-leftnav-subnav-list ${this.state.sublistIsShowing || (typeof window !== 'undefined' && window.location.href.indexOf("components") > -1) ? 'ds-leftnav-subnav-list-is-showing' : ''}`}>
              <li><NavLink exact to="/components/Avatar/" activeClassName="ds-nav-link-isActive">Avatar</NavLink></li>
              <li><NavLink exact to="/components/buttons/" activeClassName="ds-nav-link-isActive">Button</NavLink></li>
              <li><NavLink exact to="/components/Checkbox/" activeClassName="ds-nav-link-isActive">Checkbox</NavLink></li>
              <li><NavLink exact to="/components/InputText/" activeClassName="ds-nav-link-isActive">Input Text</NavLink></li>
              <li><NavLink exact to="/components/Radio/" activeClassName="ds-nav-link-isActive">Radio</NavLink></li>
              <li><NavLink exact to="/components/Switch/" activeClassName="ds-nav-link-isActive">Switch</NavLink></li>
              <li><NavLink exact to="/components/TextArea/" activeClassName="ds-nav-link-isActive">Text Area</NavLink></li>
            </ul>
          </li>
          <li><NavLink exact to="/contact/" activeClassName="ds-nav-link-isActive">Contact</NavLink></li>
        </ul>

        <DSLeftNavFooter />
      </div>
    );
  };
};
  
export default DSLeftNav;