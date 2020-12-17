import React, { Component } from 'react';
import flagFr from '../img/flagFr.png'
import flagUk from '../img/flagUk.png'
import logo_merenween from '../img/logo_merenween.png'
import {UserPreferences} from '../component/UserPreferences'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Footer extends Component {

    constructor(props) {
        super(props);
        
        this.imgClick = this.imgClick.bind(this);
    }

    static contextType = UserPreferences;

    imgClick(e) {
        const {setLangage} = this.context
        if (e.target.name === "Français") {
            setLangage(e.target.name)
            
        }
        else if (e.target.name === "English"){
            setLangage(e.target.name)
        }
    }
    

    render() {
        const { preferences } = this.context;

        return (
            <>
            <div>
            <img src={logo_merenween} alt="Logo" className="logo-footer"/>
        </div>
            <Navbar bg="black" expand="lg" className="d-flex justify-content-between">
            <div>
                
            </div>
                <div>
                <p className="color-white">© 2020 Merenween Shari'fal</p>
                </div>
                <Nav className="flex-column text-center">
                    <div className="d-flex justify-content-center">
                        <div style={{ display: "inline", marginRight: 20 }}>
                            <img className="logo-language" src={flagFr} alt="Icon Français" name="Français" onClick={this.imgClick}/>
                        </div>
                        <div className="d-flex align-content-center">
                            <img className="logo-language" src={flagUk} name="English" alt="English flag" onClick={this.imgClick}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                    </div>
                </Nav>
            </Navbar>
            </>
        );
    }
}

export {Footer}; 