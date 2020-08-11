import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Blogs from './views/blog';
import KnowUs from './views/knowUs';
import Contact from './views/contact';
import Directory from './views/directory';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/blog" component={Blogs}/>
        <Route exact path="/conocenos" component={KnowUs}/>
        <Route exact path="/contacto" component={Contact}/>
        <Route exact path="/directorio" component={Directory}/>
      </Switch>
    </Router>
  );
}

export default App;
