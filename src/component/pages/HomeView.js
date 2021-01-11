import { Component } from "react";
import {ApiRequest} from "../../Helpers"
import {UserPreferences} from '../UserPreferences'


class HomeView extends Component{

    
    testToken = ()=>{

        const user = JSON.parse(JSON.parse(localStorage.getItem("user")));


        
        //send a request to api rest (index.php) et test token validation ...
        ApiRequest({table:"user", where:"login = '"+user.email+"'"}).then((response)=>{
            return response.text().then((text) => {
                if (text) {

                    if (text.includes("false")) {
                        console.log(text);
                    } else {
                        console.log("true");
                    }
                    // console.log(text)
                }
            });
        })
    }
    
    render(){
        return (
        <>
            Home Page
            <br/>
            <button onClick={this.testToken}>testToken</button>
        </>
        );
    }
}


export {HomeView};