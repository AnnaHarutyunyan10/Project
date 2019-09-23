import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import icon from '../../.././assets/logo/icon.png';
import '../../.././styles/LoginPage.scss'
import { userActions } from '../../.././actions/user.actions';
import ErrorBoundary from '../../errorBoundary/errorBoundary';

class LoginPage extends Component {
    
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <React.Fragment>
                <ErrorBoundary>
                    <Container fluid>
                        <Row className="my-4">
                            <Col md={6} className="border-right" style={{height: '600px' }}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={icon} roundedCircle fluid />
                                    </Col>
                                </Row>
                                <h2 className="mt-5">Sign in or create an account 🌟</h2>
                            </Col>
                            <Col md={6}>
                                <Row className="m-5 bg-light">
                                    <Col md={12}>
                                        <Form name="form" onSubmit={this.handleSubmit} className="mt-5">
                                            <Form.Group className={"form-group" + (submitted && !username ? ' has-error' : '')}>           
                                                <Form.Control type="text" size="lg" className="form-control" name="username" placeholder="Username oe Email address" value={username} onChange={this.handleChange} />
                                                {submitted && !username &&
                                                    <Form.Text className="help-block">Username is required</Form.Text>
                                                }
                                            </Form.Group>
                                            <Form.Group className={'form-group' + (submitted && !password ? ' has-error' : '')}>                                   
                                                <Form.Control type="password" size="lg" className="form-control" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                                                {submitted && !password &&
                                                    <Form.Text className="help-block">Password is required</Form.Text>
                                                }
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <button className="btn btn-success my-button py-2 px-3 float-right">Sign In</button>
                                                {loggingIn &&
                                                    <Image src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                                }
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="bg-dark text-white mt-5 p-2 w-100">JOIN STARBUCKS® REWARDS</p>
                                        <NavLink to="/register" className="btn btn-outline-secondary my-button m-5">Join Now</NavLink>
                                        <h2 className="m-5">Create an account and bring on the Rewards!</h2>
                                        <p className="m-5">Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </ErrorBoundary>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 