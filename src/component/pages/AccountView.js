import React from 'react'
import {UserPreferences} from '../UserPreferences'
import {ApiRequest} from "../../Helpers"




class AccountView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            info: []
        };
    }

    componentDidMount() {

        const user = JSON.parse(JSON.parse(localStorage.getItem("user")));

        ApiRequest({table:"user", where:"login = '"+user.email+"'"}, "GET").then((response)=>{
            return response.text().then((text) => {
                if (text) {
                    console.log(text)
                    let test = JSON.parse(text)[0];
                    delete test.password;

                    this.setState({
                        isLoaded: true,
                        info : test
                        
                    })
                }
            },
            (error) => {
                this.setState({
                    isLoaded: true, 
                    error
                })
            });
        })
    }

    render() {
        const { error, isLoaded, info } = this.state;

        console.log("this.state.info");
        console.log(this.state.info);

        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <ul>

                {Object.keys(info).map(item => (
                        <li key={item}>
                            {item + " : " + info[item]}

                        </li>
                    ))}

                    



                    
                    {/* {info.map(info => (
                        <li key={info.name}>
                            {info.name} {info.login}
                        </li>
                    ))} */}
                    {/* {info.map(info => (
                        <li key={info.name}>
                            {info.name} {info.login}
                        </li>
                    ))} */}
                </ul>
            );
        }
    }
}

export {AccountView};