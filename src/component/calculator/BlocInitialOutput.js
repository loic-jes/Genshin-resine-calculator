import React, { Component } from 'react';
import {amountOfHours, amountOfTime} from "./Calculator"

class BlocInitialOutput extends Component {



    render() {

       
        return (
            <div>
                  
      <h5> Il vous faudra {amountOfHours} heures et {amountOfTime} minutes pour atteindre les 160 résines </h5>
      
      
      <h5 id="estimatedTime"></h5>
      

                La value c'est {this.props.value}
            </div>
        );
    }
}

export {BlocInitialOutput};