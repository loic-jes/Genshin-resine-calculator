import React from 'react'
import { Context } from './Context'

class TestDuContext extends React.Component {

    static contextType = Context


    render() {
        const { resin, setResin } = this.context

        return (
            <div>
                <p>Value = {resin.value}</p>
                <button onClick= {() => {
                    setResin("value", "Value 2")
                }}> Passer la valeur à : Value 2 </button>
                <button onClick= {() => {
                    setResin("value", "Bouton trololo")

                }}> Passer la valeur à : Bouton trololo </button>

                <br/>

                <button onClick= {() => {
                    setResin("resinNeeded", 12)

                }}> Passer la Resin Needed à : 12 </button>
                <button onClick= {() => {
                    setResin("resinNeeded", 40)

                }}> Passer la Resin Needed à : 40 </button>

                <br/>

                <button onClick= {() => {setResin("actualResin",0)}}> Passer la Actual Resin à : 0 </button>

                <button onClick= {() => {setResin("amountOfTime","3 jours")}}> Passer le amountOfTime à : 3 jours </button>
                <button onClick= {() => {setResin("amountOfHours", 12)}}> Passer le amountOfHours à : 12 </button>
                <br/>
                <button onClick= {() => {setResin("value", 20)}}> Essai pour faire passer la value a 20</button>




                <br/>
                <p> Objet Résine via le context</p>
                <p> Value : {resin.value}</p>
                <p> Resin Needed : {resin.resinNeeded}</p>
                <p> Actual Resin : {resin.actualResin}</p>
                <p> amountOfTime : {resin.amountOfTime}</p>
                <p> amountOfHours : {resin.amountOfHours}</p>
                <p> realTimeDate : {resin.realTimeDate}</p>
                <p> realTimehours : {resin.realTimehours}</p>
                <p> realTimeminutes : {resin.realTimeminutes}</p>
                <p> realTimedays : {resin.realTimedays}</p>
                <p> blockInitialValue : {resin.blockInitialValue}</p>

            </div>
        );
    }
}

export {TestDuContext}
