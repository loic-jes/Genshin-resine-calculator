import React, { Component } from 'react';
import {BlocMiseAJourCard} from '../index'

class BlocMiseAJour extends Component {

    
    render() {
        return (
            <div className="d-flex">
            <BlocMiseAJourCard 
            date="17/12/2020" 
            title = "Essai sur les cartes" 
            src = "https://cdn.discordapp.com/attachments/586261737439887461/788866481793925140/unknown.png"
            text1 = "Le texte d'essai 1"
            text9 = "Et ca c'est le texte d'essai 9 mais on voit pas la diff si on sait pas !" 
            />

            <BlocMiseAJourCard 
            date="Maj du 08/12/2020" 
            title = "Woah" 
            text1 = "Ajout des librairies Babel et React pour du codage différent en interne"
            text2 = "Création d'un 'convertisseur rapide/live' grâce à ces librairies (en haut a droite pour l'instant)"
            text3 = "Modification du fonctionnement du calculateur pour qu'il prenne juste un chiffre entre 0 et 160 au lieu de xx/160"
            text4 = "Maintenant on peut appuyer sur 'Entrée' du clavier pour afficher le résultat quand on est dans la zone de texte au lieu d'avoir a aller clicker sur le bouton valider" 
            />




                
            </div>
        );
    }
}

export {BlocMiseAJour};