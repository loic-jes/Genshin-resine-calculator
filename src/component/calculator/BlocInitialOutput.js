import React, { Component } from 'react';

class BlocInitialOutput extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
    
          amountOfHours : 0,
          amountOfTime : 0,
          resinNeeded : 0,
          realTimedays : 0,
          expr : "",
          realTimeDate: 0,
          realTimehours: 0,
          realTimeminutes: 0,
          realTimedays: 0,
        }

        this.missingResinToTime = this.missingResinToTime.bind(this);
        this.essaiMiteux = this.essaiMiteux.bind(this);
        this.essaiMiteux2 = this.essaiMiteux2.bind(this);
        this.renderPartUn = this.renderPartUn.bind(this);
        this.getFullReloadRealTime = this.getFullReloadRealTime.bind(this);
        
    }
    



    missingResinToTime() {

        let resinNeeded = 160-this.props.value;
        let amountOfTime = resinNeeded*8;
        let amountOfHours = 0;

        while(amountOfTime >= 60) {
            amountOfTime -= 60;
            amountOfHours++

        }


        // this.essaiMiteux();

        const partUn = this.renderPartUn(amountOfHours,amountOfTime);
        // <RenderPartDeux hours={amountOfHours} minutes={amountOfTime} />

        // this.renderPartDeux(amountOfHours,amountOfTime);
        const partDeux = this.getFullReloadRealTime(amountOfHours,amountOfTime);




        return (
            <div>

            {partUn}
            {partDeux}
            
            </div>
        )

     
      

      
    }

    renderPartUn(hours, minutes) {

        console.log(`renderPartDeux = ${hours} heures et ${minutes} minutes`)

        return (
            <>
            <h5> Il vous faudra {hours} heures et {minutes} minutes pour atteindre les 160 résines. </h5>
            </>
        )  
    }



     getFullReloadRealTime(hours=0, minutes=0) {

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

    console.log(`getfullreloadtime : expr = ${expr}` )



    return (<h5>Votre résine sera rechargée {realTimedays === 1 && <span> demain </span>}
        à {expr}.</h5>);


   


}
    essaiMiteux() {
 
        console.log("trololo")
        
}
    essaiMiteux2() {
 
        return (<>trololo</>)
}


    render() {
       
        return (
            <div>

            {this.missingResinToTime()}

            {/* <p>Trololo du {this.essaiMiteux2()}</p> */}


            </div>
        );
    }
}

export {BlocInitialOutput};




// //______________________________________________________________________
// import React, { Component } from 'react';

// class BlocInitialOutput extends Component {


//     amountOfHours = 0
//     amountOfTime = 0
//     resinNeeded = 0
//     realTimedays = 0
//     expr = "";
//     realTimeDate;
//     realTimehours;
//     realTimeminutes;
//     realTimedays;


// /**
//  * Calcule le nombre de résine manquant (total possible - nombre de résine passé en argument), 
//  * puis converti ce nombre en minutes, et ensuite en heures/minutes
//  * @param {Number} input nombre de résine actuel
//  */

//     missingResinToTime() {
    
//             this.resinNeeded = 160 - this.props.value;
//             this.amountOfTime = (this.resinNeeded * 8); // amountOfTime = en minutes
//             this.convertToHours(this.amountOfTime)
      
//     }

// /**
//  * Prends l'amountOfTime en minutes et le convertit en heures + minutes 
//  * via une boucle while simple (remainder = minutes)
//  * @param {Number} amountOfTime Passé par la fonction missingResinToTime()
//  */
//     convertToHours(amountOfTime) {

//     while (amountOfTime >= 60) {

//         this.amountOfTime -= 60;
//         this.amountOfHours++
//     }


//     this.expr = this.getFullReloadRealTime(this.amountOfHours, this.amountOfTime); // force la fonction getFullReloadRealTime pour avoir un realTimeDay a jour avant la prochaine condition

//     this.amountOfHours = 0;     // Reset pour de nouveaux calculs
// }

// /**
//  * Convertir le temps de recharge estimée en heure réelle.
//  * Pour cela, prend le temps actuel (heure/minute), et y ajoute :
//  * @param {Number} input1 le nombre d'heures estimé pour la recharge 
//  * @param {Number} input2 le nombre de minutes estimé pour la recharge
//  * Ensuite, via des boucles, lisse les chiffres pour qu'ils soient corrects.
//  */
//     getFullReloadRealTime(input1=0, input2=0) {
//         this.realTimeDate = new Date();             // Prend la date (heure / minute) actuelle

//         this.realTimedays = 0                       // Reset le nombre de jour a 0 pour éviter le relicat d'un précédent calcul
//         this.realTimehours = this.realTimeDate.getHours() + input1;      // ajoute le nombre d'heure estimé pour la recharge à l'heure actuelle
//         this.realTimeminutes = this.realTimeDate.getMinutes() + input2; // ajoute le nombre de minutes estimé pour la recharge  à l'heure actuelle



//     while (this.realTimeminutes >= 60) {      // Si l'ajout fait déborder le nombre de minutes au dessus de 60
 
//     this.realTimeminutes -= 60;
//     this.realTimehours++
//     }

//     while (this.realTimehours >= 24) { // Si l'ajout fait déborder le nombre d'heures au dessus de 24

//     this.realTimehours -= 24;
//     this.realTimedays++  // Si on a débordé, on est sensé arriver le lendemain
//     }


//     if (this.realTimehours < 10 && this.realTimeminutes < 10) {
//         this.expr = '0{this.realTimehours}h0{this.realTimeminutes}'      // Ajoute des 0 pour éviter des chiffres comme "2h4" pour "02h04"
//     } else if (this.realTimehours < 10) {
//         this.expr = '0{this.realTimehours}h{this.realTimeminutes}'
//     } else if (this.realTimeminutes < 10) {
//         this.expr = '{this.realTimehours}h0{this.realTimeminutes}'
//     }

//     return (this.expr);


// }



//     render() {


     


       
//         return (
//             <div>


//             <h5>Votre résine sera rechargée {this.realTimedays === 1 && <span> demain </span>}
//             à {this.expr} </h5>

            
                  
//       <h5> Il vous faudra {this.realTimedays === 1 && <span> {this.realTimedays} jour </span>}
//        {this.amountOfHours} heures et {this.amountOfTime} minutes pour atteindre les 160 résines </h5>

//        Essai : {this.expr}
//        Essai 2 : {this.expr}
      
      
      

//                 La value c'est {this.props.value}
//             </div>
//         );
//     }
// }

// export {BlocInitialOutput};