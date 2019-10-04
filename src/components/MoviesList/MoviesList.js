import React, { Component } from 'react';
import { connect } from 'react-redux'


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
      <div className="Movies">
        <div>{this.props.reduxState.movies.map((movie) => {
            return (<div key={movie.id}>
            {movie.title}
            <img src = {movie.poster} alt={movie.description}/>
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