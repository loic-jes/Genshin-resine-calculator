import React, { Component } from 'react';
import { BlocInitial, BlocMiseAJour } from "../index"
// import gunnhildr from '../../../public/assets/img/gunnhildr.png'
import { FastConvertor } from './FastConvertor';
import { DcModal } from './DcModal';
import {UserPreferences} from '../UserPreferences'


// Représente la page entière

class ResinCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = { blockInitialValue: "0", show:false, modalwarn:true, expr:"" }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.offCalculatorCalculation = this.offCalculatorCalculation.bind(this)
        // this.showModal = this.showModal.bind(this)
    }

    
  static contextType = UserPreferences;

    

    showModal = e => 
    {
        this.setState({show: !this.state.show});

        let modalHandler = document.getElementsByClassName('modalOverlayHandler')[0];

        modalHandler.classList.toggle('modalOverlay');

        window.addEventListener('scroll', window.noScroll);



        
    };

    


    handleInputChange(value) {
        this.setState({ blockInitialValue: value })
    }


    componentDidMount() {  // Tout le "ça continue a calculer même quand t'es offline" // TODO : Faire passer ça en BDD pour pas que ça soit lié au localstorage

    this.offCalculatorCalculation()

    window.addEventListener("beforeunload", () => {
        localStorage.setItem("résine", this.state.blockInitialValue);
        let microtime = (Date.now() / 1000) / 60
        localStorage.setItem("time", microtime)

    });

        
    }

    componentWillUnmount() {

        this.offCalculatorCalculation()

        localStorage.setItem("résine", this.state.blockInitialValue);
        let microtime = (Date.now() / 1000) / 60
        localStorage.setItem("time", microtime)
        
    }


    offCalculatorCalculation() {

        if (localStorage.getItem("résine") != null) {
            console.log("Résine lors de la fermeture de page : " + localStorage.getItem("résine"))


            let letestTime = ((Date.now() / 1000) / 60) - localStorage.getItem("time");
            let originalTestTime = letestTime;
            console.log("Nombre des minutes écoules depuis la dernière connexion = " + letestTime.toFixed(2))      // TODO : peut être en faire un composant à part

            let bonusResine = 0
            let bonusResineMax = 160 - localStorage.getItem("résine");

            while (letestTime >= 0.005) {

                letestTime -= 0.005;
                bonusResine++;

            }

            console.log("Résine générée le temps hors ligne : " + bonusResine)

            if (bonusResine >= 1) {

                if (bonusResine >= bonusResineMax) {
                    bonusResine = bonusResineMax
                }

                if (bonusResineMax === 0 ){

                } else {

                    const {preferences} = this.context

                    let expr = preferences === "Français" ? <>Vous avez généré {bonusResine} résine pendant votre temps hors ligne ({originalTestTime.toFixed(2)} minutes)</> : <>You generated {bonusResine} resin during your offline time ({originalTestTime.toFixed(2)} minutes)</>
                     
                    this.setState({expr: expr});
                    this.showModal()

                    this.setState({expr: null});


                }


               

            } 

            
            this.setState({ blockInitialValue: (Number(localStorage.getItem("résine")) + Number(bonusResine)) })


            localStorage.removeItem("résine")
            localStorage.removeItem("time")

        }

    }

    




    render() {
        
        const blockInitialValue = this.state.blockInitialValue;

        return (
            <main>
            

            <DcModal onClose={this.showModal} show={this.state.show}>{this.state.expr}</DcModal>
            

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