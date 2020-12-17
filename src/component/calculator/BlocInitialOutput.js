import React, { Component } from 'react';
import { UserPreferences } from '../UserPreferences'

class BlocInitialOutput extends Component {

    constructor(props) {
        super(props);

        this.missingResinToTime = this.missingResinToTime.bind(this);
        this.renderPartUn = this.renderPartUn.bind(this);
        this.getFullReloadRealTime = this.getFullReloadRealTime.bind(this);
        this.getPartialReloadRealTime = this.getPartialReloadRealTime.bind(this);
        this.calculBreakPoints = this.calculBreakPoints.bind(this)

    }

    static contextType = UserPreferences;


    missingResinToTime() {

        let resinNeeded = 160 - this.props.value;
        let amountOfTime = resinNeeded * 8;
        let amountOfHours = 0;

        while (amountOfTime >= 60) {
            amountOfTime -= 60;
            amountOfHours++
        }

        const partUn = this.renderPartUn(amountOfHours, amountOfTime);
        const partDeux = this.getFullReloadRealTime(amountOfHours, amountOfTime);
        const partTrois = this.calculBreakPoints(this.props.value)


        return (
            <div>
                {partUn}
                {partDeux}
                {partTrois}
            </div>
        )
    }

    renderPartUn(hours, minutes) {

        const { preferences } = this.context

        return (
            <>
                {preferences === "Français" ?
                    <h5> Il vous faudra {hours} heures et {minutes} minutes pour atteindre les 160 résines. </h5> :
                    <h5> You'll need {hours} hours and {minutes} minutes to reach 160 resin. </h5>}
            </>
        )
    }


    getFullReloadRealTime(hours = 0, minutes = 0, daBoolForNotFullExpr = false) {

        let realTimeDate;
        let realTimehours;
        let realTimeminutes;
        let realTimedays;


        realTimeDate = new Date();             // Prend la date (heure / minute) actuelle

        realTimedays = 0                       // Reset le nombre de jour a 0 pour éviter le relicat d'un précédent calcul
        realTimehours = realTimeDate.getHours() + hours;      // ajoute le nombre d'heure estimé pour la recharge à l'heure actuelle
        realTimeminutes = realTimeDate.getMinutes() + minutes; // ajoute le nombre de minutes estimé pour la recharge  à l'heure actuelle


        while (realTimeminutes >= 60) {      // Si l'ajout fait déborder le nombre de minutes au dessus de 60

            realTimeminutes -= 60;
            realTimehours++
        }

        while (realTimehours >= 24) { // Si l'ajout fait déborder le nombre d'heures au dessus de 24

            realTimehours -= 24;
            realTimedays++  // Si on a débordé, on est sensé arriver le lendemain
        }


        let expr = `${realTimehours}h${realTimeminutes}`

        if (realTimehours < 10 && realTimeminutes < 10) {
            expr = `0${realTimehours}h0${realTimeminutes}`      // Ajoute des 0 pour éviter des chiffres comme "2h4" pour "02h04"
        } else if (realTimehours < 10) {
            expr = `0${realTimehours}h${realTimeminutes}`
        } else if (realTimeminutes < 10) {
            expr = `${realTimehours}h0${realTimeminutes}`
        }

        const { preferences } = this.context


        if (daBoolForNotFullExpr) {
            return (<>{expr}</>)
        }


        return (

            <>

                {preferences === "Français" ? <h5>Votre résine sera rechargée {realTimedays === 1 && <span> demain </span>} à {expr}.</h5> :
                    <h5> Your resin will be fully reloaded {realTimedays === 1 && <span> tomorrow </span>} at {expr}.</h5>}

            </>

        )
    }

    calculBreakPoints(actualResin) {

        let bp20 = 20;
        let bp40 = 40;
        let bp60 = 60;

        const { preferences } = this.context

        return (

            <>
                <p>{preferences === "Français" ? <span>Prochain donjon / fleur (20 résine) : </span> : <span> Next dungeon / leyline (20 resin) : </span>}{actualResin >= 20 ? <span><b>{preferences === "Français" ? <>Dispo</> : <>Available</>}</b></span> : <span><b>{this.getPartialReloadRealTime(actualResin, bp20)} </b></span>} {preferences !== "Français" ? <>(GMT+01:00)</> : null}</p>
                <p>{preferences === "Français" ? <span>Prochain élite d'ascension (40 résine) : </span> : <span> Next outdoor boss (40 resin) : </span>}{actualResin >= 40 ? <span><b>{preferences === "Français" ? <>Dispo</> : <>Available</>}</b></span> : <span><b>{this.getPartialReloadRealTime(actualResin, bp40)} </b></span>} {preferences !== "Français" ? <>(GMT+01:00)</> : null}</p>
                <p>{preferences === "Français" ? <span>Prochain weekly boss (60 résine) : </span> : <span> Next weekly boss (60 resin) : </span>}{actualResin >= 60 ? <span><b>{preferences === "Français" ? <>Dispo</> : <>Available</>}</b></span> : <span><b>{this.getPartialReloadRealTime(actualResin, bp60)}</b></span>} {preferences !== "Français" ? <>(GMT+01:00)</> : null}</p>

            </>
        );


    }

    getPartialReloadRealTime(resin, breakpoint) {

        let amountNeededForBP = breakpoint - resin;
        let amountMinuteNeededTimeCalcualtion = amountNeededForBP * 8;
        let amountHourNeededTimeCalcualtion = 0;

        while (amountMinuteNeededTimeCalcualtion >= 60) {

            amountMinuteNeededTimeCalcualtion -= 60;
            amountHourNeededTimeCalcualtion++
        }

        let daBoolForNotFullExpr = true;

        return (this.getFullReloadRealTime(amountHourNeededTimeCalcualtion, amountMinuteNeededTimeCalcualtion, daBoolForNotFullExpr));

    }


    render() {

        return (
            <div>

                {this.missingResinToTime()}

            </div>
        );
    }
}

export { BlocInitialOutput };

