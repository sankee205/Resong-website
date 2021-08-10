import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';

import Home from './Pages/Home/Home';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <Switch >
          <Route path='/' exact component={Home} />
          

        </Switch>
      </Router>
    </>
  );
}

export default App;
