import React from 'react'
// import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <div>
                <Link to="/"> Resine calculator </Link>
                <Link to="/trololo"> trololo </Link>
            </div>
        );
    }
}

export {Header};