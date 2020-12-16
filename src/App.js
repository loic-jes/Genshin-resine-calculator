import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ContextProvider } from './component/essaiscontext/Context'
import { Header, Main, Footer, UserPreferencesProvider } from './component/index'
import { BrowserRouter as Router } from "react-router-dom";


function App() {



  return (


    <div className="App">
      <UserPreferencesProvider>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </UserPreferencesProvider>
    </div>



  );
}

export default App;
