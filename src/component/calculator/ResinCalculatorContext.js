import React from 'react'

const ResinContext = React.createContext()

class ResinContextProvider extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            resin: {
                value: "Trololo",
                resinNeeded: 0,
                actualResin: 120,
                amountOfTime: 0,
                amountOfHours: 0,
                realTimeDate: 0,
                realTimehours: 0,
                realTimeminutes: 0,
                realTimedays: 0,
                blockInitialValue: 0
            },
        }

        this.setResin = this.setResin.bind(this)
    }


    setResin(name, value) {

        let resinChange = { ...this.state.resin };
        resinChange[name] = value;
        console.log(resinChange)

        this.setState({ resin: resinChange })
        console.log(this.state.resin);

    }



    render() {
        const { children } = this.props;
        const { resin } = this.state;
        const { setResin } = this;

        return (
            <ResinContext.Provider value={{ resin, setResin }}>
                {children}

            </ResinContext.Provider>
        )

    }

}


export { ResinContext }
export { ResinContextProvider }


