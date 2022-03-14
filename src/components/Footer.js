import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render () {
        return (
            <React.Fragment>
                <Navbar className="mb-2"></Navbar>
                <div className="container">
                    <div className="row">             
                        <div className="col-4 col-sm-2 offset-3">
                                <h5>Links</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                        </div>
                        <div className="col-4 col-sm-3 text-center mr-4">
                            <h5>Social</h5>
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;