import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ResinCalculator } from './component';
// import {ResinCalculatorProvider} from './component/calculator/ResinCalculatorContext'
import { TestDuContext } from './component/essaiscontext/TestContext'
import { ContextProvider } from './component/essaiscontext/Context'
import { Header, Main } from './component/index'
import { BrowserRouter as Router } from "react-router-dom";


function App() {



  return (


    <div className="App">
      <ContextProvider>
        <Router>
          <Header />
          <Main />
        </Router>
      </ContextProvider>
    </div>



  );
}

export default App;
