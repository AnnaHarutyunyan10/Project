import React, { Component } from 'react';
import Header from '../.././header/header';
import FooterTop from '../.././footer-top/footer-top';
import FooterMiddle from '../.././footer-middle/footer-middle';
import FooterButtom from '../.././footer-buttom/footer-buttom';
import AddCard from '../.././addCard/addCard';
import '../../.././styles/header.scss'; 

class PageCardsAdd extends Component {
 
    render () {
        const buttonStyle = {
            btn: 'btn navbar-btn btn-light p-2 d-none',
            bg: 'my-bg-for-addCard-page-header',
        };
        return (
            <div className="bg-light">
                <Header btnStyles={ buttonStyle.btn } 
                        backgroundNavBar={ buttonStyle.bg }
                        btn_show_hide="d-none" 
                />
                <AddCard />
                <FooterTop />
                <FooterMiddle />
                <FooterButtom />
            </div>
        );
    } 
}

export default PageCardsAdd;