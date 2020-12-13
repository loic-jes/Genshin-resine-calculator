import React, { Component } from 'react';
import {ResinCalculatorContext} from './ResinCalculatorContext'



class BlocInitialInput extends Component {

    static contextType = ResinCalculatorContext;

    render() {
        const value = this.props.value;

        return (
            <fieldset>
                <label> Votre stock actuel de résine (sur /160) &nbsp; </label>
                <input value={value} onChange={this.handleChange} type="text"/>
                {/* <input type="submit" name="valider" value="Valider" id="validate" /> */}
            </fieldset>
        );
    }
}

export {BlocInitialInput};