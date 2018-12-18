import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import './AppFooter.css';

import { Link } from 'react-router-dom';

class AppFooter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { greeting: 'Hello' };
    //   }
      render() {
        return (
  <div className="footer">
    <Navbar fixedBottom style ={{backgroundColor:"white"}}>
      <Navbar.Header>
        <Navbar.Brand>
        <Link to="/home"><button onClick={this.props.start(1)}><Glyphicon glyph="home" /></button></Link>
          {/* <a href="##"><Glyphicon glyph="home" /></a> */}
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
      </Navbar.Header>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="##"><Glyphicon glyph="user" /></a>
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
      </Navbar.Header>
      <Navbar.Header >
        <Navbar.Brand>
          <a href="##"><Glyphicon glyph="envelope" /></a>
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
      </Navbar.Header>
      <Navbar.Header >
        <Navbar.Brand>
          <a href="##"><Glyphicon glyph="search" /></a>
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
      </Navbar.Header>
    </Navbar>
    </div>
    );
  }
}
export default AppFooter;