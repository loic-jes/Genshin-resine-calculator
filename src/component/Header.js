import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { UserPreferences } from '../component/UserPreferences'
import { Protected } from ".";
import { Link } from "react-router-dom";


class Header extends React.Component {
    static contextType = UserPreferences;

    imgClick(e) {
        const { setLangage } = this.context
        if (e.target.name === "Français") {
            setLangage(e.target.name)
            localStorage.setItem('langue', "Français")
        }

        else if (e.target.name === "English") {
            setLangage(e.target.name)
            localStorage.setItem('langue', "English")
        }
    }

    render() {
        const { setLangage, preferences } = this.context;

        return (
            // <div>
            //     <Link to="/"> Resine calculator </Link>
            //     <Link to="/trololo"> trololo </Link>
            // </div>
            <Navbar bg="black" expand="lg" className="d-flex justify-content-between">
                <div>
                <Protected noauth>
                  <Nav.Link as="div">
                    <Link to="/Login">Login</Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/Register">Register</Link>
                  </Nav.Link>
                </Protected>

                </div>
                <p className="color-white">{preferences === "Français" ? <>Plus tard, ici, des liens</> : <>Later, here, some links</>}</p>
                <Nav className="flex-column text-center">
                        <div className="d-flex justify-content-center">
                            <div style={{ display: "inline", marginRight: 20 }}>
                                <img className="logo-language" src="assets/img/flagFr.png" alt="Icon Français" name="Français" onClick={this.imgClick.bind(this)} />
                            </div>
                            <div className="d-flex align-content-center">
                                <img className="logo-language" src="assets/img/flagUk.png" name="English" alt="English flag" onClick={this.imgClick.bind(this)} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                        </div>
                    </Nav>



            </Navbar>
        );
    }
}

export { Header };