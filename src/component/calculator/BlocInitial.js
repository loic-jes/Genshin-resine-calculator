import React, { Component } from 'react';
import { BlocInitialInput, BlocInitialOutput } from '../index';
import { UserPreferences } from '../UserPreferences'


class BlocInitial extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    static contextType = UserPreferences;

    handleInputChange(value) {
        this.props.onValueChange(value);
    }


    render() {
        const value = this.props.value;
        const { preferences } = this.context


        return (

            <div>
                {preferences === "Français" ? <h1>Calculateur de résine</h1> : <h1>Resin Generation Calculator</h1>}
                <div className="row mt-5">
                    <div className="col-7">
                        <BlocInitialInput value={value} onValueChange={this.handleInputChange} />
                        <BlocInitialOutput value={value} />
                    </div>
                </div>

            </div>
        );
    }
}

export { BlocInitial };