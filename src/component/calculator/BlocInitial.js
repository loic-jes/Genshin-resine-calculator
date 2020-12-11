import React, { Component } from 'react';
import { BlocInitialInput, BlocInitialOutput } from '../index';


class BlocInitial extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = { value: "" };

    }

    handleInputChange(value) {
        this.props.onValueChange(value);
    }

    render() {
        const value = this.state.value;

        return (

            <div>

            <h1>Calculateur de résine</h1>

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