import React, { Component } from 'react';
import MoviesList from '../MoviesList/MoviesList'
import Edit from '../EditPage/EditPage'

class Movie extends Component {
  // Renders the entire app on the DOM
  seeMovie = (id) =>{
      this.props.history.push('/'+ id);

  }
  render() {
    return (
      <div className="App">
        <MoviesList seeMovie={this.seeMovie}/>
        <Edit Edit={this.seeMovie}/>
      </div>
    );
  }
}

export default Movie;
