import React, { Component } from 'react';
import { BlocInitial, BlocMiseAJour } from "../index"
// import gunnhildr from '../../../public/assets/img/gunnhildr.png'
import { FastConvertor } from './FastConvertor';


// Représente la page entière

class ResinCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = { blockInitialValue: "0" }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(value) {
        this.setState({ blockInitialValue: value })
    }


    componentDidMount() {  // Tout le "ça continue a calculer même quand t'es offline" // TODO : Faire passer ça en BDD pour pas que ça soit lié au localstorage

        if (localStorage.getItem("résine") != null) {
            console.log("Résine lors de la fermeture de page : " + localStorage.getItem("résine"))


            let letestTime = ((Date.now() / 1000) / 60) - localStorage.getItem("time")
            console.log("Nombre des minutes écoules depuis la dernière connexion = " + letestTime.toFixed(2))      // TODO : peut être en faire un composant à part

            let bonusResine = 0
            let bonusResineMax = 160 - localStorage.getItem("résine");

            while (letestTime >= 8) {

                letestTime -= 8;
                bonusResine++;

            }

            console.log("Résine générée le temps hors ligne : " + bonusResine)

            if (bonusResine >= 1) {

                if (bonusResine >= bonusResineMax) {
                    bonusResine = bonusResineMax
                }

                alert("Vous avez généré " + bonusResine + " résine pendant votre temps hors ligne (" + letestTime.toFixed(2) + " minutes");
            } 

            this.setState({ blockInitialValue: (Number(localStorage.getItem("résine")) + Number(bonusResine)) })


            localStorage.removeItem("résine")
            localStorage.removeItem("time")


        }

        window.addEventListener("beforeunload", () => {
            localStorage.setItem("résine", this.state.blockInitialValue);
            let microtime = (Date.now() / 1000) / 60
            localStorage.setItem("time", microtime)

        });
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