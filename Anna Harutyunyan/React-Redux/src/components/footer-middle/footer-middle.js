import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../.././styles/footer.scss'
 
class FooterMiddle extends Component {

    render () { 
        const footerMenu = [
            {
                footerItemTitle: 'ABOUT US',
                footerItem: [
                    'Our Company',
                    'Investor Relations',
                    'Starbucks Stories',
                    'Press Center'
                ]
            },  {
                footerItemTitle: 'CAREER CENTER',
                footerItem: [
                    'Working at Starbucks',
                    'College Plan',
                    'Current Partners',
                    'Corporate Careers',
                    'Manufacturing and Distribution',
                    'Retail Careers',
                    'International Careers'
                ]
            },  {
                footerItemTitle: 'FOR BUSINESS',
                footerItem: [
                    'Office Coffee',
                    'Starbucks Coffee International',
                    'Foodservice',
                    'Starbucks Card Corporate Sales',
                    'Landlord Support Center',
                    'Suppliers'
                ]
            },  {
                footerItemTitle: 'ONLINE COMMUNITY',
                footerItem: [
                    'Twitter',
                    'Facebook',
                    'Instagram',
                    'LinkedIn',
                    'Pinterest',
                    'YouTube',
                    'My Starbucks Idea'
                ]
            },  {
                footerItemTitle: 'QUICK LINKS',
                footerItem: [
                    'My Account',
                    'Store Locator',
                    'Nutrition Info',
                    'Customer Service'
                ]
            }
        ];
        return (
            <Container fluid className="m-4 mt-5">
                <Row>
                    {
                        footerMenu.map((i) => <Col md={2}>
                                            <p className="my-footer-hover font-weight-bold">
                                                {i.footerItemTitle}
                                            </p>
                                            <p key={i}>{i.footerItem.map((ii) => 
                                                <p className="my-footer-hover" key={ii}>
                                                    {ii}
                                                </p>)}
                                            </p>
                                        </Col>)
                    }
                </Row>
            </Container> 
        );
    }
}

export default FooterMiddle;