import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css';

class Footer extends Component {
    render () { 
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l12 m12 s12 center">
                            <h5 className="white-text footer-header">Learning</h5>
                            <p className="grey-text text-lighten-4 footer-text">Online courses</p>
                        </div>
                        <div className="col l12 m12 s12 center links">
                            <ul>
                                <li className="inline footer-margin"><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                                <li className="inline footer-margin"><a className="grey-text text-lighten-3" href="#!">Courses</a></li>
                                <li className="inline footer-margin"><a className="grey-text text-lighten-3" href="#!">Blog</a></li>
                                <li className="inline footer-margin"><a className="grey-text text-lighten-3" href="#!">Forume</a></li>
                                <li className="inline footer-margin"><a className="grey-text text-lighten-3" href="#!">Contact us</a></li>
                            </ul>
                        </div>
                        <div className="only-border"></div>   
                        <div className="col l12 m12 s12 center links">
                            <ul>
                                <li className="inline footer-margin"><a href="https://www.facebook.com/groups/228321510706889/"><i className="fa fa-facebook fb"></i></a></li>
                                <li className="inline footer-margin"><a href="https://twitter.com/reactjs"><i className="fa fa-twitter tw"> </i></a></li>
                                <li className="inline footer-margin"><a href="https://ru.reactjs.org/"><i className="fa fa-google-plus google"></i></a></li>
                                <li className="inline footer-margin"><a href="https://ru.reactjs.org/docs/hooks-intro.html"><i className="fa fa-dribbble map"> </i></a></li>
                                <li className="inline footer-margin"><a href="https://ru.reactjs.org/docs/context.html"><i class="fa fa-instagram insta" aria-hidden="true"></i></a></li>
                                <li className="inline footer-margin"><a href="https://www.linkedin.com/company/reactjs-nj"><i className="fa fa-linkedin in"> </i></a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container footer-buttom">
                        All Copyright reserved 
                        &copy; { (new Date().getFullYear()) } 
                        - Design and development by 
                        <span className="aist-text">AIST</span>
                        <a className="grey-text text-lighten-4 right" href="#!">Terms and conditions provacy</a>
                    </div>
                </div>
            </footer>
        );
    };
}

export default Footer;