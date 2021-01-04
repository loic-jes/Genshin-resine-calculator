import React, { Component } from 'react';

const UserPreferences = React.createContext()

class UserPreferencesProvider extends Component {

    constructor(props) {
        super(props);
        this.state = { 
        
        langue: localStorage.getItem("langue"),
        user: {
            name : localStorage.getItem('name'),
            token : localStorage.getItem('token'),
            role : localStorage.getItem('role')
        }
    }

        this.setLangage = this.setLangage.bind(this)
        this.setUser = this.setUser.bind(this)
    }

    setLangage(input) {
        this.setState({ langue: input })
    }

    setUser = (user) => {
        this.setState(() => ({ user }))
    
        // console.log("UserContext user : " + user)
    
    
        if (user !== null){
        localStorage.setItem('name', JSON.stringify(user.name));
        localStorage.setItem('token', JSON.stringify(user.token));
        localStorage.setItem('role', JSON.stringify(user.role));
    } 
        
    }

    render() {

        const { children } = this.props;
        const preferences = this.state.langue;
        const userName = this.state.user.name
        const userToken = this.state.user.token
        const userRole = this.state.user.role
        const { setLangage, setUser } = this;

        return (
            <UserPreferences.Provider value={{ preferences, userName, userToken, userRole, setLangage, setUser }}>
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
