import{BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Addhotel from './Components/Addhotel/Addhotel';
import Home from './Components/Home/Home';
import Edithotel from './Components/Update/Edithotel';


function App() {
  return (
    <div className="App">
     
     <Router>
       <Route path='/' component={Home} exact/>
       <Route path='/edithotel/:id' component={Edithotel} exact/>
       <Route path='/addhotel' component={Addhotel} exact/>
     
     </Router>
    </div>
  );
}

export default App;
