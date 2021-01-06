import { Component } from "react";
import {ApiRequest} from "../../Helpers"

class HomeView extends Component{

    testToken = ()=>{
        //send a request to api rest (index.php) et test token validation ...
        ApiRequest({table:"user"}).then((response)=>{
            return response.text().then((text) => {
                if (text) {
                    console.log(text)
                }
            });
        })
        // const body = JSON.stringify({token});
        // fetch("http://api.loc/index.php", { method: "POST", body }).then(
        //     (response) => {
        //       return response.text().then((text) => {
        //         if (text) {
        //         //   let user = null;
        //         //   try {
        //         //     user = JSON.parse(text);
        //         //   } catch {}
        //         //   localStorage.setItem("user", JSON.stringify(user));
        //         //   //setUser(user);
        //         // } else {
        //         //   //this.logout();
        //         }
        //       });
        //     }
        //   );
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