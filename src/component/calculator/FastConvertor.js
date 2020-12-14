
import React, { Component } from 'react';
import {toResin, toTime, tryConvert, FastConvertorTimeTranslation} from './Calculator'
import {FastConvertorInput} from '../index'


class FastConvertor extends Component {

    
    constructor(props){
        super(props);
        this.handleResinChange = this.handleResinChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.state = {value : "", unit :"r"};
    }

    handleResinChange(value) {
        this.setState({unit: "r", value})
    }

    handleTimeChange(value) {
        this.setState({unit : "t", value})
    }

    render() {

        const unit = this.state.unit;
        const value = this.state.value;
        const resin = unit === 't' ? tryConvert(value, toResin) : value;
        const time = unit === 'r' ? tryConvert(value, toTime) : value;



        return (
            <div>
                <FastConvertorInput unit="r" value={resin} onValueChange={this.handleResinChange} />
                <FastConvertorInput unit="t" value={time} onValueChange={this.handleTimeChange} />
                <FastConvertorTimeTranslation time={time} />
            </div>
        );
    }











}

    export {FastConvertor};






















