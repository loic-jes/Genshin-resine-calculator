import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ResinCalculator } from './component';
// import {ResinCalculatorProvider} from './component/calculator/ResinCalculatorContext'
import {TestDuContext} from './component/essaiscontext/TestContext'
import {ContextProvider} from './component/essaiscontext/Context'

function App() {



  return (


    <div className="App">
    <ContextProvider>
    <TestDuContext />
    </ContextProvider>
    </div>



  );
}

export default App;
