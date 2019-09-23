import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { userActions } from '../../.././actions/user.actions';
import icon from '../../.././assets/logo/icon.png';
import '../../.././styles/LoginPage.scss'
import ErrorBoundary from '../../errorBoundary/errorBoundary';

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return ( 
            <React.Fragment>
                <ErrorBoundary>
                    <Container fluid>
                        <Row className="my-4">
                            <Col md={6} className="border-right" style={{height: '600px' }}> 
                                <Row>
                                    <Col md={2} >
                                        <Image src={icon} roundedCircle fluid />
                                    </Col>
                                </Row>
                                <h2 className="mt-5">Create an account</h2>           
                            </Col>
                            <Col md={6}>
                                <div className="m-5 bg-light">
                                    <p className="m-5">PERSONAL INFORMATION</p>
                                    <Form name="form" onSubmit={this.handleSubmit} className="m-5">
                                        <Form.Group className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>                        
                                            <Form.Control size="lg" type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                                            {submitted && !user.firstName &&
                                                <Form.Text className="help-block">First Name is required</Form.Text>
                                            }
                                        </Form.Group>
                                        <Form.Group className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>                        
                                            <Form.Control size="lg" type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                                            {submitted && !user.lastName &&
                                                <Form.Text className="help-block">Last Name is required</Form.Text>
                                            }
                                        </Form.Group>
                                        <p>ACCOUNT SECURITY</p>
                                        <Form.Group className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>                       
                                            <Form.Control size="lg" type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                                            {submitted && !user.username &&
                                                <Form.Text className="help-block">Username is required</Form.Text>
                                            }
                                        </Form.Group>
                                        <Form.Group className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>                        
                                            <Form.Control size="lg" type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                            {submitted && !user.password &&
                                                <Form.Text className="help-block">Password is required</Form.Text>
                                            }
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <button className="btn btn-success my-button py-2 px-3 mt-4">Create Account</button>
                                            {registering && 
                                                <Image alt="foto" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            }
                                            <NavLink to="/login" className="btn btn-outline-secondary my-button mt-4 float-right">Cancel</NavLink>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </ErrorBoundary>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };