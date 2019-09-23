import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MapWithASearchBox from './Map';
import Header from '../../header/header';
import SearchInMap from './SearchInmap';

class MapPage extends Component {

    render () {
        const buttonStyle = {
            btn: 'btn navbar-btn btn-light p-2 d-none',
            bg: 'my-bg-for-addCard-page-header',
            sign_in: 'text-success float-right ml-5 mt-3'
        };
        return (
            <div>
                <Header btnStyles={ buttonStyle.btn }  
                    backgroundNavBar={ buttonStyle.bg }
                    btn_show_hide={ buttonStyle.sign_in } 
                    show_hide_sign_in="d-none"
                />
                <Container fluid>
                    <Row>
                        <Col md={5}>
                            <SearchInMap />
                        </Col>
                        <Col md={7}>
                            <MapWithASearchBox />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } 
}

export default MapPage;