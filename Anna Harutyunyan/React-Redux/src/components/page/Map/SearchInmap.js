import React, { Component } from 'react';
import { Button, FormControl, Col, Row, Container } from 'react-bootstrap';

class SearchInMap extends Component {

    render () {
        return (
            <React.Fragment> 
                <Container fluid>
                    <Row>
                        <Col md={9}><FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
                                    placeholder="Find a store" className="py-4 mt-4" /></Col>
                        <Col md={3}><Button variant="light" className="mt-4">Filter</Button></Col>
                    </Row>
                </Container>
                <div className="text-center mt-4 mb-5">
                    <h5>Zoomed out too far</h5>
                    <p>Try searching for a location or zooming in to see results.</p>
                </div>
                <div className="text-muted mt-5">
                    <span className="border-right p-3">Privacy Statement</span>
                    <span className="p-3">Terms of Use</span>
                </div>
            </React.Fragment>
        );
    } 
}

export default SearchInMap;