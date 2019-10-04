import React, { Component } from 'react';
import './App.css';
import Movie from '../Movie/Movie'
import DetailsPage from '../DetailsPage/DetailsPage'
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
          <Router>
              <Route path='/' exact component={Movie}/>
              <Route path='/:id' component={DetailsPage}/>
          </Router>
      </div>
    );
  }
}

export default App;
