import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            // <div>
            //     <Link to="/"> Resine calculator </Link>
            //     <Link to="/trololo"> trololo </Link>
            // </div>
            <Navbar bg="black" expand="lg" className="d-flex justify-content-between">
                <div>

                </div>
                <p className="color-white">Plus tard, ici, des liens</p>
                <p></p>



            </Navbar>
        );
    }
}

export { Header };