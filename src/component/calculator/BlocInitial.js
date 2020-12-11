import React, { Component } from 'react';
import { BlocInitialInput, BlocInitialOutput } from '../index';


class BlocInitial extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(value) { // TODO remonter encore d'un cran
        // this.props.onValueChange(value);
        console.log("Initial change " + value );
        this.props.onChange(value);
    }

    render() {
        const value = this.props.value;

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