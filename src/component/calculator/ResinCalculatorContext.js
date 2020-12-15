import React from 'react'

const ResinCalculatorContext = React.createContext()

class ResinCalculatorProvider extends React.Component {

    state = {
        resin: {
            resinneeded: 0, 
            actualResin : 0,
            amountOfTime : 0,
            amountOfHours : 0,
            realTimeDate : 0,
            realTimehours : 0,
            realTimeminutes : 0,
            realTimedays: 0,
            blockInitialValue : 0
        },
    }

    setResin = (resin) => {
        this.setState((prevState) => ({ resin }))
    }

    render() {
        const { children } = this.props;
        const { resin } = this.state;
        const { setResin } = this;

        return (
            <ResinCalculatorContext.Provider value={{ resin, setResin }}>
                {children}

            </ResinCalculatorContext.Provider>
        )

    }

}


export { ResinCalculatorContext }
export { ResinCalculatorProvider }


