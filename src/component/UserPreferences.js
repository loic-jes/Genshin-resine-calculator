import React, { Component } from 'react';

const UserPreferences = React.createContext()

class UserPreferencesProvider extends Component {

    constructor(props) {
        super(props);
        this.state = { 
        
        langue: localStorage.getItem("langue"),
        user: JSON.parse(localStorage.getItem('user')),

    }

        this.setLangage = this.setLangage.bind(this)
        this.setUser = this.setUser.bind(this)
    }

    setLangage(input) {
        this.setState({ langue: input })
    }

      // Method to update state
  setUser = (user) => {
    this.setState(() => ({ user }))
    localStorage.setItem('user', JSON.stringify(user));
    
  }

    render() {


        const { children } = this.props;
        const preferences = this.state.langue;
        const user = JSON.parse(this.state.user);
        const { setLangage, setUser } = this;

        console.log(user);




        return (
            <UserPreferences.Provider value={{ preferences, user, setLangage, setUser }}>
                {children}
            </UserPreferences.Provider>
        );
    }
}

export { UserPreferences };
export { UserPreferencesProvider };


// Pour utiliser mon context ------------------------
// import {UserPreferences} from '../UserPreferences'
// static contextType = UserPreferences;
// const {preferences} = this.context
