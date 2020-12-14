import React from 'react'

const Context = React.createContext()

class ContextProvider extends React.Component {

    state = {
        resin: {
            value : "Trololo",
            resinNeeded: 0, 
            actualResin : 120,
            amountOfTime : 0,
            amountOfHours : 0,
            realTimeDate : 0,
            realTimehours : 0,
            realTimeminutes : 0,
            realTimedays: 0,
            blockInitialValue : 0
        },
    }


    //    setResinValue = (input, key) => {
    //     this.setState((prevState) => ({ resin[key]: input }))
    // }
       setResinValue = (input) => {
        this.setState((prevState) => ({ resin:{
            value : input,
            resinNeeded: this.state.resin.resinNeeded, 
            actualResin : this.state.resin.actualResin,
            amountOfTime : this.state.resin.amountOfTime,
            amountOfHours : this.state.resin.amountOfHours,
            realTimeDate : this.state.resin.realTimeDate,
            realTimehours : this.state.resin.realTimehours,
            realTimeminutes : this.state.resin.realTimeminutes,
            realTimedays: this.state.resin.realTimedays,
            blockInitialValue : this.state.resin.blockInitialValue
        } }))
    }
       setResinresinNeeded = (input) => {
        this.setState((prevState) => ({ resin:{
            value : this.state.resin.value,
            resinNeeded: input, 
            actualResin : this.state.resin.actualResin,
            amountOfTime : this.state.resin.amountOfTime,
            amountOfHours : this.state.resin.amountOfHours,
            realTimeDate : this.state.resin.realTimeDate,
            realTimehours : this.state.resin.realTimehours,
            realTimeminutes : this.state.resin.realTimeminutes,
            realTimedays: this.state.resin.realTimedays,
            blockInitialValue : this.state.resin.blockInitialValue
        } }))
    }
       setResinactualResin = (input) => {
        this.setState((prevState) => ({ resin:{
            value : this.state.resin.value,
            resinNeeded: this.state.resin.resinNeeded, 
            actualResin : input,
            amountOfTime : this.state.resin.amountOfTime,
            amountOfHours : this.state.resin.amountOfHours,
            realTimeDate : this.state.resin.realTimeDate,
            realTimehours : this.state.resin.realTimehours,
            realTimeminutes : this.state.resin.realTimeminutes,
            realTimedays: this.state.resin.realTimedays,
            blockInitialValue : this.state.resin.blockInitialValue
        } }))
    }
       setResinamountOfTime = (input) => {
        this.setState((prevState) => ({ resin:{
            value : this.state.resin.value,
            resinNeeded: this.state.resin.resinNeeded, 
            actualResin : this.state.resin.actualResin,
            amountOfTime : input,
            amountOfHours : this.state.resin.amountOfHours,
            realTimeDate : this.state.resin.realTimeDate,
            realTimehours : this.state.resin.realTimehours,
            realTimeminutes : this.state.resin.realTimeminutes,
            realTimedays: this.state.resin.realTimedays,
            blockInitialValue : this.state.resin.blockInitialValue
        } }))
    }
       setResinamountOfHours = (input) => {
        this.setState((prevState) => ({ resin:{
            value : this.state.resin.value,
            resinNeeded: this.state.resin.resinNeeded, 
            actualResin : this.state.resin.actualResin,
            amountOfTime : this.state.resin.amountOfTime,
            amountOfHours : input,
            realTimeDate : this.state.resin.realTimeDate,
            realTimehours : this.state.resin.realTimehours,
            realTimeminutes : this.state.resin.realTimeminutes,
            realTimedays: this.state.resin.realTimedays,
            blockInitialValue : this.state.resin.blockInitialValue
        } }))
    }
       setResinrealTimeDate = (input) => {
        this.setState((prevState) => ({ resin:{
            value : this.state.resin.value,
            resinNeeded: this.state.resin.resinNeeded, 
            actualResin : this.state.resin.actualResin,
            amountOfTime : this.state.resin.amountOfTime,
            amountOfHours : this.state.resin.amountOfHours,
            realTimeDate : input,
            realTimehours : this.state.resin.realTimehours,
            realTimeminutes : this.state.resin.realTimeminutes,
            realTimedays: this.state.resin.realTimedays,
            blockInitialValue : this.state.resin.blockInitialValue
        } }))
    }
       setResinrealTimehours = (input) => {
        this.setState((prevState) => ({ resin:{
            value : this.state.resin.value,
            resinNeeded: this.state.resin.resinNeeded, 
            actualResin : this.state.resin.actualResin,
            amountOfTime : this.state.resin.amountOfTime,
            amountOfHours : this.state.resin.amountOfHours,
            realTimeDate : this.state.resin.realTimeDate,
            realTimehours : input,
            realTimeminutes : this.state.resin.realTimeminutes,
            realTimedays: this.state.resin.realTimedays,
            blockInitialValue : this.state.resin.blockInitialValue
        } }))
    }
       setResinrealTimeminutes = (input) => {
        this.setState((prevState) => ({ resin:{
            value : this.state.resin.value,
            resinNeeded: this.state.resin.resinNeeded, 
            actualResin : this.state.resin.actualResin,
            amountOfTime : this.state.resin.amountOfTime,
            amountOfHours : this.state.resin.amountOfHours,
            realTimeDate : this.state.resin.realTimeDate,
            realTimehours : this.state.resin.realTimehours,
            realTimeminutes : input,
            realTimedays: this.state.resin.realTimedays,
            blockInitialValue : this.state.resin.blockInitialValue
        } }))
    }
       setResinrealTimedays = (input) => {
        this.setState((prevState) => ({ resin:{
            value : this.state.resin.value,
            resinNeeded: this.state.resin.resinNeeded, 
            actualResin : this.state.resin.actualResin,
            amountOfTime : this.state.resin.amountOfTime,
            amountOfHours : this.state.resin.amountOfHours,
            realTimeDate : this.state.resin.realTimeDate,
            realTimehours : this.state.resin.realTimehours,
            realTimeminutes : this.state.resin.realTimeminutes,
            realTimedays: input,
            blockInitialValue : this.state.resin.blockInitialValue
        } }))
    }
      
    



    render() {
        const { children } = this.props;
        const { resin } = this.state;
        const { setResinValue, setResinresinNeeded , setResinactualResin, setResinamountOfTime, setResinamountOfHours, setResinrealTimeDate, setResinrealTimehours, setResinrealTimeminutes, setResinrealTimedays } = this;

        return (
            <Context.Provider value={{ resin, setResinValue, setResinresinNeeded, setResinactualResin, setResinamountOfTime, setResinamountOfHours, setResinrealTimeDate, setResinrealTimehours, setResinrealTimeminutes, setResinrealTimedays }}>
                {children}

            </Context.Provider>
        )

    }

}


export { Context }
export { ContextProvider }


