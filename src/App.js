import React from 'react';
import Navbar from './components/navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Blogs from './views/blog';
import KnowUs from './views/knowUs';
import Contact from './views/contact';
import Directory from './views/directory';
import Footer from './components/footer';
import Economia from './components/economy'
import Salud from './components/saludPost'

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
        <Route exact path="/economia" component={Economia}/>
        <Route exact path="/salud" component={Salud}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
