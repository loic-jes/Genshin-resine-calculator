import React, { Component } from 'react';
import {BlocInitial} from "../index"
import {ResinCalculatorContext} from './ResinCalculatorContext'

// Représente la page entière

class ResinCalculator extends Component {

   
    static contextType = ResinCalculatorContext;


    render() {

                const {resin, setResin} = this.context;
                console.log(resin);

        return (
            <main>
                <BlocInitial value = {resin.blockInitialValue} onChange={setResin} />
            </main>
        );
    }
}


export { ResinCalculator }