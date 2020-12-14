import React, { Component } from 'react';
import {BlocInitial} from "../index"

// Représente la page entière

class ResinCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resinNeeded : 0,
            actualResin : 0,
            amountOfTime : 0,
            amountOfHours : 0,
            realTimeDate : 0,
            realTimehours : 0,
            realTimeminutes : 0,
            realTimedays: 0,
            blockInitialValue : 0,
            intervalHandler : 0,
            unitNames : {
                r: "Génération de Résine",
                t: "Temps (en minutes)"
            }
        }

        this.resinNeededChange = this.resinNeededChange.bind(this);
        this.actualResinChange = this.actualResinChange.bind(this);
        this.amountOfTimeChange = this.amountOfTimeChange.bind(this);
        this.amountOfHoursChange = this.amountOfHoursChange.bind(this);
        this.realTimeDateChange = this.realTimeDateChange.bind(this);
        this.realTimeHoursChange = this.realTimeHoursChange.bind(this);
        this.realTimeminutesChange = this.realTimeminutesChange.bind(this);
        this.realTimedaysChange = this.realTimedaysChange.bind(this);
        this.blockInitialValueChange = this.blockInitialValueChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)

    }

    handleInputChange(value) { // TODO remonter encore d'un cran
    // this.props.onValueChange(value);
    console.log("Final change " + value );

    this.setState({blockInitialValue : value})
    console.log(this.state)
}



    resinNeededChange(resinNeed){
        this.setState({resinNeed});
    };

    actualResinChange(actualResin){
        this.setState({actualResin});
    };

    amountOfTimeChange(amountOfTime){
        this.setState({amountOfTime});
    };

    amountOfHoursChange(amountOfHours){
        this.setState({amountOfHours});
    };

    realTimeDateChange(realTimeDate){
        this.setState({realTimeDate});
    };

    realTimeHoursChange(realTimeHours){
        this.setState({realTimeHours});
    };

    realTimeminutesChange(realTimeminutes){
        this.setState({realTimeminutes});
    };

    realTimedaysChange(realTimedays){
        this.setState({realTimedays});
    };

    blockInitialValueChange(blockInitialValue){
        this.setState({blockInitialValue})
    }

    render() {

        const blockInitialValue = this.state.blockInitialValue;

        return (
            <main>
                <BlocInitial value = {blockInitialValue} onValueChange={this.handleInputChange} />
            </main>
        );
    }
}

export { ResinCalculator };