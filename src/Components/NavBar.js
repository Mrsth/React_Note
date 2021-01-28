import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


const heading = {
    fontSize: '20px',
    padding: '10px',
}

function NavBar() {
    return (
        <div>
            <Navbar expand="lg" variant="dark" bg="light">
                <Nav>
                    <Link style={heading} to="/Sales">Sales</Link>
                    <Link style={heading} to="/Purchase">Purchase</Link>
                    <Link style={heading} to="/new_sales_purchase">Balance Sheet</Link>
                    {/* <Nav.Link href="/Sales">Sales</Nav.Link>
                    <Nav.Link href="/Purchase">Purchase</Nav.Link>
                    <Nav.Link href="/bs">Balance Sheet</Nav.Link> */}
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;