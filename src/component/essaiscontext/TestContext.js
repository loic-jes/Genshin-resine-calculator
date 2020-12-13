import React from 'react'
import { Context } from './Context'

class TestDuContext extends React.Component {

    static contextType = Context


    render() {
        const { resin, setResinValue, setResinresinNeeded, setResinactualResin, setResinamountOfTime, setResinamountOfHours, setResinrealTimeDate, setResinrealTimehours, setResinrealTimeminutes, setResinrealTimedays } = this.context

        return (
            <div>
                <p>Value = {resin.value}</p>
                <button onClick= {() => {
                    setResinValue("Value 2")
                    console.log(resin)
                }}> Passer la valeur à : Value 2 </button>
                <button onClick= {() => {
                    setResinValue("Bouton trololo")
                    console.log(resin)

                }}> Passer la valeur à : Bouton trololo </button>

                <br/>

                <button onClick= {() => {
                    setResinresinNeeded(12)
                    console.log(resin)

                }}> Passer la Resin Needed à : 12 </button>
                <button onClick= {() => {
                    setResinresinNeeded(40)
                    console.log(resin)

                }}> Passer la Resin Needed à : 40 </button>

                <br/>

                <button onClick= {() => {setResinactualResin(0)}}> Passer la Actual Resin à : 0 </button>

                <button onClick= {() => {setResinamountOfTime("3 jours")}}> Passer le amountOfTime à : 3 jours </button>
                <button onClick= {() => {setResinamountOfHours(12)}}> Passer le amountOfHours à : 12 </button>


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
