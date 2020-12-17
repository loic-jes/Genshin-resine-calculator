import React, { Component } from 'react';
import {FastConvertorInput} from '../index'
import {UserPreferences} from '../UserPreferences'


class FastConvertor extends Component {

    
    constructor(props){
        super(props);
        this.state = {value : "", unit :"r"};

        this.handleResinChange = this.handleResinChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.tryConvert = this.tryConvert.bind(this);
        this.toResin = this.toResin.bind(this);
        this.toTime = this.toTime.bind(this);
        this.FastConvertorTimeTranslation = this.FastConvertorTimeTranslation.bind(this)

    }

    static contextType = UserPreferences;

    handleResinChange(value) {
        this.setState({unit: "r", value})
    }

    handleTimeChange(value) {
        this.setState({unit : "t", value})
    }

    tryConvert(value, convert) {
        const input = parseFloat(value);
        if (Number.isNaN(input)) {
            return "";
        }

        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    toResin(value){
        return Math.floor(value / 8);
    }
    toTime(value) {
        return value *8;
    }


    FastConvertorTimeTranslation(props) {
        const {preferences} = this.context

        if (props.time >= 60) {
    
            let hours =0;
            let minutes = props.time;

    
            if (minutes > 1280) {
               return (<p>{preferences ==="Français" ? <>Ca fait longtemps la dis donc !</> : <>Woah, that's a lot of resin !</>}</p>);
            } 
    
            while (minutes >= 60) {
                hours++;
                minutes -= 60;
            };      
    
            return (<>{preferences ==="Français" ? <p>{hours} heures, {minutes} minutes</p> : <p>{hours} hours, {minutes} minutes</p>}</>)
         
    
        } else if (props.time < 0) {
            
            return (<p>Nani?</p>)
        } else {return null}
    }

    render() {


        const unit = this.state.unit;
        const value = this.state.value;
        const resin = unit === 't' ? this.tryConvert(value, this.toResin) : value;
        const time = unit === 'r' ? this.tryConvert(value, this.toTime) : value;



        return (
            <div style={{marginTop : 90, marginRight : 80}}>
                <FastConvertorInput unit="r" value={resin} onValueChange={this.handleResinChange} />
                <FastConvertorInput unit="t" value={time} onValueChange={this.handleTimeChange} />
                <this.FastConvertorTimeTranslation time={time} />
            </div>
        );
    }
}

    export {FastConvertor};






















