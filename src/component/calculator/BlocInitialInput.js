import React, { Component } from 'react';


class BlocInitialInput extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(e) {
        this.props.onValueChange(e.target.value);
        console.log("Input : " + e.target.value)

    }
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