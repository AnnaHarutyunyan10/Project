import React, { Component } from 'react';
import Header from '../.././header/header';
import StarbookFirstPage from '../.././starbook_foto/starbook_foto';
//foto_imports
import starbookFoto from '../../.././assets/first_page_foto/starbook_foto.png';
import coffeeFoto from '../../.././assets/first_page_foto/coffee.png';
import iceFoto from '../../.././assets/first_page_foto/ice.png';
import frappuccinoFoto from '../../.././assets/first_page_foto/frappuccino_foto.png';
import vegetrianFoodFoto from '../../.././assets/first_page_foto/vegetrian_food.png';
//footer 
import FooterTop from '../.././footer-top/footer-top';
import FooterMiddle from '../.././footer-middle/footer-middle';
import FooterButtom from '../.././footer-buttom/footer-buttom';

class PageFirst extends Component {
 
    render () {
        const buttonStyle = {
            btn: 'btn navbar-btn btn-light p-2 d-none',
            bg: 'bg-light'
        };
        return (            
            <div href="/" className="bg-light">
                <Header btnStyles={ buttonStyle.btn } 
                        backgroundNavBar={ buttonStyle.bg }
                        btn_show_hide="d-none" 
                        cardPage="Click here to go to the page to add cards"
                />
                <StarbookFirstPage 
                    starbookFoto={starbookFoto}
                    title="Join Starbucks® Rewards today"
                    text="Just sign up, keep drinking coffee, and you can get Rewards in as few as 2–3 visits."
                    className="btn btn-outline-secondary mt-4 text-white"
                    btn_text="JOIN WHIT HOOK COMPONENT"
                    btn_style="btn btn-outline-secondary text-white selected"
                    img_stayle="w-100"
                />
                <StarbookFirstPage 
                    starbookFoto={coffeeFoto}
                    title="YOUR FAVORITES ARE BACK"
                    text="S’mores, Mocha Cookie Crumble & Caramel Ribbon Crunch Frappuccino® drinks are here."
                    text_style="text-dark"
                    btn_style="btn  mt-4 text-dark border border-top-0 border-right-0 border-left-0  border-dark"
                    btn_text="AWWW YES"
                    img_stayle="w-100"
                />
                <StarbookFirstPage 
                    starbookFoto={iceFoto}
                    title="SUMMER REFRESHMENT, DELIVERED"
                    text="Long, lazy days call for sipping cold brew and soaking up the sun. Get the Starbucks® iced drinks you love delivered with Uber Eats."
                    text_style="text-dark"
                    btn_style="btn mt-4 text-dark border border-top-0 border-right-0 border-left-0  border-dark"
                    btn_text="ORDER NOW"
                    img_stayle="w-100"
                />
                <StarbookFirstPage 
                    starbookFoto={frappuccinoFoto}
                    title="IN PRIDE MONTH, IT’S ALL ABOUT KINDNESS"
                    text="In partnership with Lady Gaga’s Born This Way Foundation, The Starbucks Foundation is matching donations up to $250,000 in June to help create a kinder, braver world."
                    text_style="text-dark"
                    btn_style="btn mt-4 text-dark border border-top-0 border-right-0 border-left-0  border-dark"
                    btn_text="Join us"
                    img_stayle="w-100"
                />
                <StarbookFirstPage 
                    starbookFoto={vegetrianFoodFoto}
                    title="A VEGETARIAN DELIGHT"
                    text="The Baja Black Bean Veggie Wrap is a fresh, crunchy lunch you can feel great about."
                    text_style="text-dark font-weight-bold"
                    btn_style="btn font-weight-bold mt-4 text-dark border border-top-0 border-right-0 border-left-0  border-dark"
                    btn_text="IT’S A WRAP"
                    img_stayle="w-100"
                />
                <FooterTop />
                <FooterMiddle />
                <FooterButtom />
            </div>
        );
    }
}

export default PageFirst;