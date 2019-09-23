import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Form, Button } from 'react-bootstrap';
import { useSignUpForm } from './customHooks';

const Forms = () => {

    const signup = () => {
        alert(`User Created!
               Name: ${inputs.firstName} ${inputs.lastName}
               Email: ${inputs.email}`);
    };

    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);

    return (
        <div className="m-auto w-50 border p-5">
            <h4 className="mb-4">Sign up whit Mail</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" required
                        placeholder="Enter your first name" 
                        onChange={handleInputChange} 
                        value={inputs.firstName} />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" required
                        placeholder="Enter your last name" 
                        onChange={handleInputChange} 
                        value={inputs.lastName} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" required
                        placeholder="Enter email address" 
                        onChange={handleInputChange} 
                        value={inputs.email}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"
                        placeholder="Enter Password" 
                        onChange={handleInputChange} 
                        value={inputs.password} />
                </Form.Group>

                <Button variant="outline-info" type="submit" className="w-25 ml-5">
                    Sign Up
                </Button>
                <NavLink to="/" >
                    <Button variant="outline-info" type="submit" className="float-right w-25 mr-5">
                        Cansel
                    </Button>
                </NavLink>
            </Form>
        </div>
    );
}

export default Forms;