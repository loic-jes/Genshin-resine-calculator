
// Pour le fastConvertor
let unitNames = {
    r:"Génération de Résine",
    t:"Temps (en minutes)"
} 

function toResin(value){
    return Math.floor(value / 8);
}

function toTime(value) {
    return value *8;
}

function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function FastConvertorTimeTranslation(props) {
    if (props.time >= 60) {

        let hours =0;
        let minutes = props.time;

        if (minutes > 1280) {
           return <p>Ca fait longtemps la dis donc</p>;
        }

        while (minutes >= 60) {
            hours++;
            minutes -= 60;
        };      

        return (<p>{hours} heures, {minutes} minutes</p>)
     

    } else {return null}
}
let amountOfTime = 0;
let amountOfHours = 0;
// let resinNeeded = 0;
// let actualResin = 0;

// let realTimeDate;
// let realTimehours;
// let realTimeminutes;
// let realTimedays;
// let intervalHandler;



export {unitNames, toResin, toTime, tryConvert, FastConvertorTimeTranslation, amountOfTime, amountOfHours};