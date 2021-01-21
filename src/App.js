import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ContextProvider } from './component/essaiscontext/Context'
import { Header, Main, Footer, UserPreferencesProvider } from './component/index'
import { BrowserRouter as Router } from "react-router-dom";



function App() {

  console.log("Node env", process.env.NODE_ENV);

  if (process.env.NODE_ENV === "development"){

    console.log("Environnement développement");
    var api_URL_Helpers = process.env.REACT_APP_API_URL_HELPERS_DEV
    var api_URL_Login = process.env.REACT_APP_API_URL_LOGINJS_DEV
    var api_DBDSN = process.env.REACT_APP_DBDSN_DEV
    var api_DBUSER = process.env.REACT_APP_DBUSER_DEV
    var api_DBPASS = process.env.REACT_APP_DBPASS_DEV

  } else {
    
    console.log("Environnement de prod");
    var api_URL_Helpers = process.env.REACT_APP_API_URL_HELPERS
    var api_URL_Login = process.env.REACT_APP_API_URL_LOGINJS
    var api_DBDSN = process.env.REACT_APP_DBDSN
    var api_DBUSER = process.env.REACT_APP_DBUSER
    var api_DBPASS = process.env.REACT_APP_DBPASS

  }
  
  console.log("Api url helpers", api_URL_Helpers);
  console.log("Api url login", api_URL_Login);
  console.log("Base de données");
  console.log("dsn:", api_DBDSN, "user:", api_DBUSER, "pass:", api_DBPASS)

  

  




  
    
  return (


    <div className="App">
      <UserPreferencesProvider>
        <Router>
        <div className = "modalOverlayHandler"></div>
          <Header />
          <Main />
          <Footer />
        </Router>
      </UserPreferencesProvider>
    </div>



  );
}

export default App;
