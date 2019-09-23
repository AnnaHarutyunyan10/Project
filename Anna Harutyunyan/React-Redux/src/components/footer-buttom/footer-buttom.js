import React, { Component } from 'react';
import '../.././styles/footer.scss'
 
class FooterButtom extends Component {

    render () { 
        const navFooter = [
            'Web Accessibility',
            'Privacy Policy',
            'Terms of Use',
            'Contact Us',
            'Partners',
            'Site Map'
        ];
        return (
            <div className="m-3">
                <div className="ml-4">FLAG</div>
                <nav className="navbar navbar-expand-sm bg-light">
                    <ul className="navbar-nav">
                        {
                            navFooter.map((i) => 
                                <li className="nav-item">
                                    <a className="nav-link text-dark border-right" href="#" key={i}>
                                        {i}
                                    </a>
                                </li>
                        )}
                    </ul>
                </nav>
                <div class=" small text-md-left text-dark text-muted ml-4 mt-4">                                               
                    &copy; {(new Date().getFullYear())} Starbucks Coffee Company. All rights reserved.                                                   
                </div>
                <div className="bg-dark p-2 w-100 mt-5"></div>
            </div> 
        );
    }
}

export default FooterButtom;