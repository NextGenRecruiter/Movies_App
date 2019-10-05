import React, { Component } from 'react';
import { connect } from 'react-redux'
import './list.css';


class MoviesList extends Component {

    componentDidMount(){
        this.GetMovies();
    }

    GetMovies = () =>{
        this.props.dispatch({ type: 'GET_MOVIES'})
    }


  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <div className="flex-container">{this.props.reduxState.movies.map((movie) => {
            return (<div className="movieItem" key={movie.id}>
                      {movie.title}<br/>
                      <img src = {movie.poster} alt={movie.description}
                      onClick={() => this.props.seeMovie(movie.id)}/>
            </div>)
        })}</div>
      </div>
    );
  }
}

const mapStatetoProps = reduxState =>({
    reduxState
})

export default connect(mapStatetoProps)(MoviesList);