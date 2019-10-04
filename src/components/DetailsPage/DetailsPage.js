import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class DetailsPage extends Component {
    // Renders the entire app on the DOM
    componentDidMount = () => {
        this.getMovieDetail()
    }

    getMovieDetail = () => {
        this.props.dispatch({ type: 'GET_DETAIL', payload:this.props.match.params})
    }

    render() {
        return (
            <div className="Movies">
                <div>{this.props.reduxState.genres.map((movie) => {
                    if (movie.id == this.props.match.params.id) {
                        return <div key={movie.id}>
                            <p>{movie.title}</p>
                            <img src = {movie.poster} alt={movie.description}/>
                            <p>{movie.description}</p>
                            <p>GENRE: {movie.name}</p>
                        </div>
                    }
                })}
                    <Link to='/'>
                        <button>Back</button>
                    </Link>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = reduxState => ({
    reduxState
})
export default connect(mapStatetoProps)(DetailsPage);
