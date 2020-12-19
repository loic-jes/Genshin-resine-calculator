import React, { Component } from 'react';
import { UserPreferences } from '../UserPreferences'


class BlocInitialInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    static contextType = UserPreferences;


    /**
     * Vérifie qu'on a bien tapé un chiffre au bon format : 0 <= x < 160, puis met à jour le state de la page ResinCalculator
     * @param {String} input Nombre
     */
    handleChange(e) {

        const { preferences } = this.context


        if (!isNaN(e.target.value)) {        // Vérifie que l'input est bien un chiffre

            if (e.target.value > 160 || e.target.value < 0) {         // Vérifie que l'input est dans les bonnes valeurs
               preferences==="Français" ? alert("Le chiffre doit être compris entre 0 et 160") : alert("Number must be between 0 and 160");
                this.props.onValueChange("");                          // Remet l'input a "" pour éviter les chaines d'erreurs
            } else {
                this.props.onValueChange(e.target.value);       // Sinon met à jour la props value
            }
        }

        if (this.timer) {                                   // Si y'a une var timer
            this.timer = clearInterval(this.timer);           // Supprime le timer
        }

        this.timer = setInterval(() => {                    // Met un handler sur le this.timer

            if (e.target.value >= 160) {                    // Si on est full
                alert("Full résine !");
                clearInterval(this.timer);                  // Arrête le timer
            } else {
                this.props.onValueChange(Number(e.target.value) + 1);  // Ajoute 1 à la props value
            }
        }, 480000) // 480 000s = 8 mins
    }


    render() {
        const value = this.props.value;
        const { preferences } = this.context

        return (

            <fieldset>
                {preferences === "Français" ? <label>Votre stock actuel de résine (sur /160)&nbsp; </label> : <label>Your current resin stock (xx/160)&nbsp; </label>}
                <input value={value} onChange={this.handleChange} type="number" />
            </fieldset>

        );
    }
}

export { BlocInitialInput };