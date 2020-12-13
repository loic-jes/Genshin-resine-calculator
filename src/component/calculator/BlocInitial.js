import React, { Component } from 'react';
import { BlocInitialInput, BlocInitialOutput } from '../index';
import {ResinCalculatorContext} from './ResinCalculatorContext'



class BlocInitial extends Component {

    static contextType = ResinCalculatorContext;


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