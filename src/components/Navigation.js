import React, { Component } from 'react';
import {Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            <React.Fragment>
            <h1>Science Body</h1>
            <Navbar light expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>                   
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home"> Home</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/blog"> Blog</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/about"> About Us</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact"> Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
        </React.Fragment>
        );
    }
}

export default Header;