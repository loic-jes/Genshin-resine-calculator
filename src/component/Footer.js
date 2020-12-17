import React, { Component } from 'react';
import flagFr from '../img/flagFr.png'
import flagUk from '../img/flagUk.png'
import {UserPreferences} from '../component/UserPreferences'

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
      
        return (
            <>
               <img src={flagFr} style={{ height: 20, width:20 }} name="Français" alt="Drapeau français" onClick={this.imgClick} ></img>
               <img src={flagUk} style={{ height: 20, width:20 }} name="English" alt="English flag" onClick={this.imgClick} ></img>
            </>
        );
    }
}

export {Footer}; 