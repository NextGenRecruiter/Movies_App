import React, { Component } from 'react';
import './App.css';
import Movie from '../Movie/Movie'
import DetailsPage from '../DetailsPage/DetailsPage'
import Edit from '../EditPage/EditPage'
import Header from '../Header/Header'
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
          <Header />
          <Router>
              <Route path='/' exact component={Movie}/>
              <Route path='/:id' exact component={DetailsPage}/>
              <Route path='/Edit/:id' exact component={Edit}/>
          </Router>
      </div>
    );
  }
}

export default App;
