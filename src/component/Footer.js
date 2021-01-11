import React, { Component } from 'react';
// import logo_merenween from '../../public/assets/img/logo_merenween.png'
import { UserPreferences } from '../component/UserPreferences'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";




class Footer extends Component {

    constructor(props) {
        super(props);

        this.imgClick = this.imgClick.bind(this);
    }

    static contextType = UserPreferences;

    imgClick(e) {
        const { setLangage } = this.context;
        // const { setUser } = this.context;

        if (e.target.name === "Français") {
            setLangage(e.target.name)
            localStorage.setItem('langue', "Français")
        }

        else if (e.target.name === "English") {
            setLangage(e.target.name)
            localStorage.setItem('langue', "English")
        } 
        
        // else if (e.target.name === "user1"){ // TODO : A virer (aussi en html)

        //     // localStorage.setItem("name", e.target.name)
        //     // localStorage.setItem("role", 1)
        //     // setUser(e.target.name)

        //     let user = {name:"user1", role:"1", token : "12"}
        //     setUser(user)


        //     console.log(localStorage)

        // } else if (e.target.name === "user2"){ // TODO : A virer (aussi en html)
            
        //     let user = {name:"user2", role:"2", token : "32"}
        //     setUser(user)

        //     console.log(localStorage)

        // }
    }




    render() {

        return (
            <>
                <div> 
                <Link to="/">
                <img src="assets/img/logo_merenween.png" alt="Logo" className="logo-footer"/>
                </Link>

                    
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
                                <img className="logo-language" src="assets/img/flagFr.png" alt="Icon Français" name="Français" onClick={this.imgClick} />
                            </div>
                            <div className="d-flex align-content-center">
                                <img className="logo-language" src="assets/img/flagUk.png" name="English" alt="English flag" onClick={this.imgClick} />
                            </div>
                            {/* <div className="d-flex align-content-center">
                                <img className="logo-language" src="assets/img/flagUk.png" name="user1" alt="English flag" onClick={this.imgClick} /> 
                            </div>
                            <div className="d-flex align-content-center">
                                <img className="logo-language" src="assets/img/flagUk.png" name="user2" alt="English flag" onClick={this.imgClick} />
                            </div> */}
                        </div>
                        <div className="d-flex justify-content-center">
                        </div>
                    </Nav>
                </Navbar>
            </>
        );
    }
}

export { Footer }; 