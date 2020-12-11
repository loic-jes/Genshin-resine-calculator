let resinNeeded = 0;
let actualResin = 0;
let amountOfTime = 0;
let amountOfHours = 0;
let realTimeDate;
let realTimehours;
let realTimeminutes;
let realTimedays;
let intervalHandler;
let unitNames = {
    r:"Génération de Résine",
    t:"Temps (en minutes)"
} 


$(document).ready (function() {
    // missingResinToTime()       // N'est plus nécessaire maintenant que j'ai codé un bouton pour le faire

    $('#textBox1').keydown((e) => {
        if (e.keyCode ==13) {
            $('#validate').click();
        }
    })

})

/**
 * Vérifie qu'on a bien tapé un chiffre au bon format : 0 <= x < 160
 * @param {String} input Nombre
 */
function isValidImput(input) { 

    if (!isNaN(input)) {

        resinNeeded = input
    
        if (resinNeeded > 160 || resinNeeded < 0) {      // Si chiffre négatif (ne devrait pas pouvoir arriver avec le reGex) ou si chiffre supérieur au max de résine, stoppe la
            return false;
        } else {
            actualResin = resinNeeded;     // store la quantité de résine actuelle pour les calculs de breakpoints plus tard
            return true;
        }
    
    } else {
        return false;
    }     
}


/**
 * Calcule le nombre de résine manquant (total possible - nombre de résine passé en argument), 
 * puis converti ce nombre en minutes, et ensuite en heures/minutes
 * @param {Number} input nombre de résine actuel
 */

function missingResinToTime(input) {

    if (isValidImput(input)) {

        resinNeeded = 160 - resinNeeded;
        amountOfTime = (resinNeeded * 8); // amountOfTime = en minutes
        convertToHours(amountOfTime)


    } else {

        alert("Nombre invalide. La résine doit être comprise entre 0 et 160");
        document.querySelector('[name=param1]').value = "";
        // missingResinToTime();

    }
}

/**
 * Prends l'amountOfTime en minutes et le convertit en heures + minutes 
 * via une boucle while simple (remainder = minutes)
 * @param {Number} amountOfTime Passé par la fonction missingResinToTime()
 */
function convertToHours(amountOfTime) {

    while (amountOfTime >= 60) {

        amountOfTime -= 60;
        amountOfHours++
    }


    let expr = getFullReloadRealTime(amountOfHours, amountOfTime); // force la fonction getFullReloadRealTime pour avoir un realTimeDay a jour avant la prochaine condition


    if (realTimedays == 1) {
        $("#estimatedTime").html("Votre résine sera rechargée demain, à " + expr + ".");

    } else {
        $("#estimatedTime").html("Votre résine sera rechargée à " + expr+ ".");

    }

    $('#requestedTime').html("Il vous faudra " + amountOfHours + " heures et " + amountOfTime + " minutes pour atteindre les 160 résines.");
    amountOfHours = 0;     // Reset pour de nouveaux calculs
}











/**
 * Tout se passe ici, le bouton se voit attribuer la fonction de lecture du chiffre, et le passe a tous les calculateurs + mise à jour html
 */
document.querySelector('[name=valider]').addEventListener("click", function(event){         
    event.preventDefault();
    passResin();
    missingResinToTime(resinNeeded);
    calculBreakPoints();
    clearInterval(intervalHandler);
    intervalHandler = internalTimer();


});;


/**
 * Envoie le contenu de la textbox en tant qu'argument pour le nombre de résine
 */
function passResin() {
    resinNeeded = document.querySelector('[name=param1]').value;
}


/**
 * Convertir le temps de recharge estimée en heure réelle.
 * Pour cela, prend le temps actuel (heure/minute), et y ajoute :
 * @param {Number} input1 le nombre d'heures estimé pour la recharge 
 * @param {Number} input2 le nombre de minutes estimé pour la recharge
 * Ensuite, via des boucles, lisse les chiffres pour qu'ils soient corrects.
 */
function getFullReloadRealTime(input1=0, input2=0) {
    realTimeDate = new Date();             // Prend la date (heure / minute) actuelle

    realTimedays = 0                       // Reset le nombre de jour a 0 pour éviter le relicat d'un précédent calcul
    realTimehours = realTimeDate.getHours() + input1;      // ajoute le nombre d'heure estimé pour la recharge à l'heure actuelle
    realTimeminutes = realTimeDate.getMinutes() + input2; // ajoute le nombre de minutes estimé pour la recharge  à l'heure actuelle



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

    return (`${expr}`);

}


function calculBreakPoints() {

    if (actualResin >= 20) {
        $("#bp20").html("Dispo");

    } else {
        $("#bp20").html(getPartialReloadRealTime(actualResin,20));

    }

    if (actualResin >= 40) {
        $("#bp40").html("Dispo");

    } else {
        $("#bp40").html(getPartialReloadRealTime(actualResin,40));


    }
    if (actualResin >= 60) {
        $("#bp60").html("Dispo");

    } else {
        $("#bp60").html(getPartialReloadRealTime(actualResin,60));

    }



    



}

function getPartialReloadRealTime(resin, breakpoint) {

    let amountNeededForBP = breakpoint - resin;
    // console.log(amountNeededForBP);

    let amountMinuteNeededTimeCalcualtion = amountNeededForBP *8;
    let amountHourNeededTimeCalcualtion = 0;

    while (amountMinuteNeededTimeCalcualtion >= 60) {

        amountMinuteNeededTimeCalcualtion -= 60;
        amountHourNeededTimeCalcualtion++
    }

    return (getFullReloadRealTime(amountHourNeededTimeCalcualtion,amountMinuteNeededTimeCalcualtion));
    
}


function internalTimer() {

    let internalTimer = setInterval(()=> {

        if (actualResin >= 160) {
            console.log("Full résine !");
            clearInterval(internalTimer)
        } else {    
            actualResin++;
        }

        console.log(actualResin);

        $('[name=param1]').val(actualResin);
        passResin();
        missingResinToTime(resinNeeded);
        calculBreakPoints();
   


    }, 480000) // 8 mins = 480000ms

    return internalTimer;
}


// REAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACT


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

ReactDOM.render( <FastConvertor /> ,document.getElementById("react12"));


