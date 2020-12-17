import React, { Component } from 'react';
import { BlocMiseAJourCard } from '../index'

class BlocMiseAJour extends Component {


    render() {

        //nbCards = 5

        let cards = [
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



        return (

            <>
                <div className="d-flex">
                    <div className="col-3">
                        <BlocMiseAJourCard data={cards[0]} />
                    </div>
                    <div className="col-3">
                        <BlocMiseAJourCard data={cards[1]} />
                    </div>
                    <div className="col-3">
                        <BlocMiseAJourCard data={cards[2]} />
                    </div>
                    <div className="col-3">
                        <BlocMiseAJourCard data={cards[3]} />
                    </div>
                </div>


                <br />
                <div className="d-flex">

                    <div className="col-3">
                        <BlocMiseAJourCard data={cards[4]} />
                    </div>
                    <div className="col-3">
                        <BlocMiseAJourCard data={cards[5]} />
                    </div>
                </div>

            </>



        );
    }
}

export { BlocMiseAJour };