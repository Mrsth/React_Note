import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar>
                <Nav>
                    <Link to="/Sales">Sales</Link>
                    <Link to="/Purchase">Purchase</Link>
                    <Link to="/bs">Balance Sheet</Link>
                    {/* <Nav.Link href="/Sales">Sales</Nav.Link>
                    <Nav.Link href="/Purchase">Purchase</Nav.Link>
                    <Nav.Link href="/bs">Balance Sheet</Nav.Link> */}
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;