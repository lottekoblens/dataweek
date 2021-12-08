import './App.css';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from './Home.js'
import Navbar from './components/Navbar.js'
import Onderzoek from './Onderzoek.js'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/onderzoek">
            <Onderzoek />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
