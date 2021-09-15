import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import ContactPage from './components/pages/ContactPage';
import BlogPage from './components/pages/BlogPage';
import Careers from './components/pages/Careers';
import BlogDetails from './components/pages/BlogDetails';
import CareerDetails from './components/pages/CareerDetails';
import ServicesPage from './components/pages/ServicesPage';
import OurWork from './components/pages/OurWork';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutUsPage} />
        <Route exact path='/services' component={ServicesPage} />
        <Route exact path='/our-work' component={OurWork} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/blogs' component={BlogPage} />
        <Route exact path='/blogDetails' component={BlogDetails} />
        <Route exact path='/careers' component={Careers} />
        <Route exact path='/careerDetails' component={CareerDetails} />
      </Switch>
    </Router>
  );
}

export default App;
