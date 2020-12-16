import React, { Component } from 'react';

const UserPreferences = React.createContext()

class UserPreferencesProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {langue : String("Français"), test:2}

        this.setLangage = this.setLangage.bind(this)
    }

    setLangage(input) {        
        this.setState({langue:input})
    }

    render() {

        const {children} = this.props;
        const preferences = this.state.langue;
        const {setLangage} = this;

        console.log("context preferences : " + preferences)
        console.log("context state test : " + this.state.test)
        console.log("context state langue : " + this.state.langue)

        return (
            <UserPreferences.Provider value={{preferences, setLangage}}>
            {children}
            </UserPreferences.Provider>
        );
    }
}

export {UserPreferences};
export {UserPreferencesProvider};


// Pour utiliser mon context ------------------------
// import {UserPreferences} from '../UserPreferences'
// static contextType = UserPreferences;
// const {preferences} = this.context
