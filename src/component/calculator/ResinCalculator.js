import React, { Component } from 'react';
import { BlocInitial, BlocMiseAJour } from "../index"
// import gunnhildr from '../../../public/assets/img/gunnhildr.png'
import { FastConvertor } from './FastConvertor';


// Représente la page entière

class ResinCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = { blockInitialValue: "" }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(value) {
        this.setState({ blockInitialValue: value })
    }

    render() {

        const blockInitialValue = this.state.blockInitialValue;

        return (
            <main>

                <div className="row mt-5">
                    <div className="col-9">
                        <BlocInitial value={blockInitialValue} onValueChange={this.handleInputChange} />
                    </div>
                    <div className="col-3">
                        <FastConvertor />
                    </div>
                </div>




                <br />
                <img src="assets/img/gunnhildr.png" alt="Jean & Barbura" />
                <br />
                <br />
                <BlocMiseAJour />
            </main>
        );
    }
}

export { ResinCalculator };