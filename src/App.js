import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Footer from './components/Footer';


import './assets/css/style.css';
import Projects from './views/Projects';
import Contact from './views/Contact';


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
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </div>
    </Router>
  );
}

export default App;
