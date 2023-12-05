import './index.css';
import Home from './home';
import React from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Project from './project';
import Skill from './skill';
import Contact from './contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>  
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/skill">
              <Skill />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>  
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
