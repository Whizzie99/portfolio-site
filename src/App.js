import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';


import './assets/css/style.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </div>
    </Router>
  );
}

export default App;
