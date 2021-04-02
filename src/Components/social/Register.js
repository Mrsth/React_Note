import React, { Component } from 'react';
import { Form, Button, Col, InputGroup, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa'
import axios from 'axios'
import './register.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            email: "",
            password: "",
            passwordCheck: "",
            role: "customer",
            show: false,
            error: "",
            submitted: false

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            url: "http://localhost:4000/users/R",
            method: "POST",
            data: this.state,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({
                fullname: "",
                email: "",
                password: "",
                passwordCheck: "",
                role: "",
                submitted: true,
                show: false
            });
            console.log(response)
        }).catch(err => {
            console.log(err.response.data.msg)
            this.setState({
                show: true,
                error: err.response.data.msg
            })
        })

    }
    handleChange(event) {
        this.setState({ [event.target.getAttribute("name")]: event.target.value });
        console.log(this.state.role);

    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>

                <div className="container">

                    <div className="col-lg-5 col-md-5  offset-md-4  register z-depth-2">

                        {this.state.show ? <Alert variant='danger'>
                            {this.state.error}
                        </Alert> : null}
                        {this.state.submitted && <Alert variant='success'>Success! You are successfully registered.</Alert>}
                        <h3 className="text-center my-3">SIGN UP</h3>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group controlId="formBasicEmail" className="my-1">
                                <Form.Label>Email</Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <FaEnvelope />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername" className="my-1">
                                <Form.Label>Username</Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <FaUserAlt />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" placeholder="username" name="fullname" value={this.state.fullname} onChange={this.handleChange} />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="my-1">
                                <Form.Label>Password</Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <FaLock />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <FaLock />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="password" placeholder="Re-type Password" name="passwordCheck" value={this.state.passwordCheck} onChange={this.handleChange} />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>

                            <Link to="/login" style={{ fontSize: "13px" }}>Already have an account ? Login</Link> <br /> <br />
                            <div className="d-flex justify-content-center">
                                <Button variant="danger" className="w-50" type="submit">Register</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register