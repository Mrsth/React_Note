import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { Form, Button, Alert, Row, Col, InputGroup } from 'react-bootstrap'
import { AuthContext } from '../Context/authContext';
import { useHistory, Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa'
import './login.css'

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isLoggedin, setIsLoggedin] = useContext(AuthContext).login;


    const [user, setUser] = useContext(AuthContext).uso;
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            url: "http://localhost:4000/users/login/",
            method: "POST",
            data: { email, password },
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log(response, "response from login")
            const { token, user } = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user));
            setUser({
                token: localStorage.getItem("token"),
                user: JSON.parse(localStorage.getItem("user"))
            })
            // setIsAdmin(user.user?.role === 'admin')
            setIsLoggedin(true)
            setSubmitted(true)
            setShow(false)
            history.push('/')
            // window.location.reload();

        }).catch(err => {
            setShow(true)
            setError(err.response.data.msg)
        })
    }


    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>

            <div className="container" >
                <div className=" col-xl-5  offset-md-4  login  z-depth-2">
                    {show ? <Alert variant='danger'>
                        {error}
                    </Alert> : null}
                    {submitted && <Alert variant='success'>Success! You are logged in.</Alert>}

                    <h3 className="text-center my-3">LOGIN</h3>

                    <Form onSubmit={handleSubmit} >
                        <Form.Group controlId="formBasicEmail" className="my-1">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FaUserAlt />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e => setEmail(e.target.value)} />

                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Your Password</Form.Label>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <FaLock />
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Form.Group>

                        <Link to="/register" style={{ fontSize: "13px" }}>Don't have an account ? Register</Link> <br /> <br />
                        <div className="d-flex justify-content-center">
                            <Button variant="danger" className="w-50" type="submit">Login</Button>
                        </div>
                    </Form>
                </div>

            </div>

        </div>
    )
}

export default Login

