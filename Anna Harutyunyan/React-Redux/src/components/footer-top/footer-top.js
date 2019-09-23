import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../.././styles/footer.scss';
 
class FooterTop extends Component {

    onClick = () => {
            console.log('click');
    }

    render () { 
        return (
            <React.Fragment> 
                <Container fluid className="my-footer-top-bg p-4 pl-5">
                    <Row className="justify-content-between">
                        <Col md={4} className="text-md-left">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a href="https://web.facebook.com/Starbucks/" className="btn-floating btn-sm btn-fb mx-1 text-dark"><i className="fa fa-facebook my-icon-hover"></i></a></li>
                                <li className="list-inline-item"><a href="https://twitter.com/starbucks" className="btn-floating btn-sm btn-tw mx-1 text-dark"><i className="fa fa-twitter my-icon-hover"> </i></a></li>
                                <li className="list-inline-item"><a href="https://plus.google.com/117575809843355974839/" className="btn-floating btn-sm btn-gplus mx-1 text-dark"><i className="fa fa-google-plus my-icon-hover"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/starbucks/" className="btn-floating btn-sm btn-li mx-1 text-dark"><i className="fa fa-linkedin my-icon-hover"> </i></a></li>
                                <li className="list-inline-item"><a href="https://www.pinterest.com/starbucks/" className="btn-floating btn-sm btn-dribbble mx-1 text-dark"><i className="fa fa-dribbble my-icon-hover"> </i></a></li>
                            </ul> 
                        </Col>
                        <Col md={8} className="text-dark"> 
                            <Form.Label>Join our email list</Form.Label>
                            <Form className="form-inline">   
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email address" className="form-control w-50 mr-1"  />
                                    <Form.Control type="email" placeholder="Zip code" className="form-control w-25 mr-1" />                             
                                    <Button variant="secondary" onClick={this.onClick}>GET STARTED</Button>
                                </Form.Group> 
                            </Form>
                            <p className="mt-3">
                                By clicking "GET STARTED" I agree to receive news, promotions, information, and offers from Starbucks. See our 
                                <span>
                                    <a href="#" 
                                       className="font-weight-bold text-dark border border-top-0 border-right-0 border-left-0  border-dark text-decoration-none " >
                                       Privacy Statement
                                    </a>
                                </span> and
                                <span>
                                    <a href="#" 
                                       className="font-weight-bold text-dark border border-top-0 border-right-0 border-left-0  border-dark text-decoration-none " >
                                       Customer Service.
                                    </a>
                                </span>
                            </p>  
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default FooterTop;