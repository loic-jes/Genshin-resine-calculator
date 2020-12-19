import React, { Component } from 'react';
import { BlocMiseAJourCard } from '../index'
import {UserPreferences} from '../UserPreferences'

class BlocMiseAJour extends Component {

    static contextType = UserPreferences;

    render() {

        const {preferences} = this.context

        //nbCards = 5

        let cards = [
            {
                date : "19/12/2020",
                title : "Petites rectifications",
                text1 : "Ajout d'une traduction en anglais pour les éléments manquants (alerte, header, un gmt+1 manquant, mises à jour",
                text2 : "création d'un pseudo-cookie maison qui conserve le choix de langue pour la prochaine co",
                text3 : "Fix du nom de l'onglet et normalement de ce qui est montré quand on envoie le lien du site"
            },
            {
                date: "17/12/2020",
                title: "Pfiouu",
                text1: "Migration enfin réussie du projet sous la nouvelle technologie : React.js",
                text2: "Ajout : ",
                text3: "- un convertisseur rapide ",
                text4: "- un pied de page",
                text5: "- d'une version anglophone",
                text6: "- de tout plein de dynamisme des résultats", 
                text7: "- du système qui permettra de changer de page plus tard :D"

            },
            {
                date: "08/12/2020",
                title: "Nul",
                text1: "Tentative ratée d'incorporer la technologie 'react' au site",
                text3: "Modification du fonctionnement du calculateur pour qu'il prenne juste un chiffre entre 0 et 160 au lieu de xx/160",
                text4: "Maintenant on peut appuyer sur 'Entrée' du clavier pour afficher le résultat quand on est dans la zone de texte au lieu d'avoir a aller clicker sur le bouton valider"
            },
            {
                date: "20/11/2020 (bis)",
                title: "Timer interne 2",
                text1: "Mon timer était nul, mais au moins maintenant il est corrigé"


            },
            {
                date: "20/11/2020",
                title: "Timer interne",
                text1: "Met à jour toutes les 8 minutes le stock de résine actuelle, et ajuste tous les timers en adéquation"

            },
            {
                date: "18/11/2020",
                title: "Mise en service du site"
            },
            {
                date: "17/12/2020",
                title: "Une photo de Meren",
                src: "https://cdn.discordapp.com/attachments/586261737439887461/788866481793925140/unknown.png",
                text1: "La découverte du Brachydios",
                text9: "En vrai c'était juste un essai pour faire une news standardisée.",
                text10: "'Ca marche bien !'"
            },
        ]
        let enCards = [
            {
                date : "19/12/2020",
                title : "Small fixes",
                text1 : "Added missing translation (the alert, the update cards, one missing GMT+1, even the header",
                text2 : "Made some kind of cookie so the user langage preference will remain after leaving the website. Thinkin' of you, you lucky ones !",
                text3 : "Fixed the page name"
            },
            {
                date: "17/12/2020",
                title: "Phew",
                text1: "Migration into React.js : success",
                text2: "Adding : ",
                text3: "- a fast resin to time converter ",
                text4: "- a footer",
                text5: "- an english mode",
                text6: "- more dynamism in the result output", 
                text7: "- the system that will allow, later, to navigate through the website :D"

            },
            {
                date: "08/12/2020",
                title: "Booh",
                text1: "Failure to migrate into React.js tech",
                text3: "Calculation changes so it will take a normal number instead of the former 'xx/160' format",
                text4: "Binded the 'enter' keyboard key to do stuff instead of having to manually click everytime"
            },
            {
                date: "20/11/2020 (bis)",
                title: "Hidden timer 2, the comeback",
                text1: "Timer was shit, now it's at least corrected (clicking x times used to initiate x timers at the same time)"


            },
            {
                date: "20/11/2020",
                title: "Hidden timer",
                text1: "Updates the resin stock every 8 minutes, and all of the calculs with it"

            },
            {
                date: "18/11/2020",
                title: "This site was born"
            },
            {
                date: "17/12/2020",
                title: "A random Merenween photo",
                src: "https://cdn.discordapp.com/attachments/586261737439887461/788866481793925140/unknown.png",
                text1: "Playing Monster Hunter",
                text9: "To be honest, it was just a random try to have a standardised news format",
                text10: "'Yay, working as intended !'"
            },
        ]



        return (

            <>
                <div className="d-flex">
                    <div className="col-3">
                        <BlocMiseAJourCard data={preferences ==="Français" ? cards[0] : enCards[0]} />
                    </div>
                    <div className="col-3">
                    <BlocMiseAJourCard data={preferences ==="Français" ? cards[1] : enCards[1]} />
                    </div>
                    <div className="col-3">
                    <BlocMiseAJourCard data={preferences ==="Français" ? cards[2] : enCards[2]} />
                    </div>
                    <div className="col-3">
                    <BlocMiseAJourCard data={preferences ==="Français" ? cards[3] : enCards[3]} />
                    </div>
                </div>


                <br />
                <div className="d-flex">

                    <div className="col-3">
                    <BlocMiseAJourCard data={preferences ==="Français" ? cards[4] : enCards[4]} />
                    </div>
                    <div className="col-3">
                    <BlocMiseAJourCard data={preferences ==="Français" ? cards[5] : enCards[5]} />
                    </div>
                    <div className="col-3">
                    <BlocMiseAJourCard data={preferences ==="Français" ? cards[6] : enCards[6]} />
                    </div>
                </div>

            </>



        );
    }
}

export { BlocMiseAJour };