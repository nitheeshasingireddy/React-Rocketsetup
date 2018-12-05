import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import './AppHeader.css';

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello' };
      }
      render() {
        return (
  <div className="Home">
    <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="##"><Glyphicon glyph="align-justify" /></a>
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
      </Navbar.Header>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="##"><Glyphicon glyph="user" /></a>
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
      </Navbar.Header>
      <Navbar.Header pullRight>
        <Navbar.Brand>
          <a href="##"><Glyphicon glyph="bell" /></a>
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
      </Navbar.Header>
    </Navbar>
  </div>
    );
  }
}
export default AppHeader;