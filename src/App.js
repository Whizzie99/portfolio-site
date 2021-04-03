import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


import './assets/css/style.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <h1>Hello</h1>
      </div>
    </div>
    </Router>
  );
}

export default App;
