import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class Edit extends Component {
  state={
    movie:{
      id:'',
      title:'',
      description:'',
    }
  }

  componentDidMount = () =>{
    this.movieEdit()
  }

  movieEdit = () =>{
    this.props.reduxState.movies.map((movie) =>{
      this.setState({
        movie:{
          id: movie.id,
          title: movie.title,
          description: movie.description
        }
      })
      console.log('in movies ' ,movie);
      
    })
  }

  handleChange = (event, propertyNumber) =>{
    console.log(event.target.value);
        
    this.setState({
        ...this.state.movie,
        [propertyNumber]: event.target.value,
    })
  }

  handleSave = () =>{
    console.log('in handleSave');
    this.props.dispatch({type:'UPDATE_MOVIE', payload: this.movie})
    this.props.history.push(`/movies/${this.props.match.params.id}`)    
  }

  handleCancel = () =>{
    this.props.history.push(`/movies/${this.props.match.params.id}`)    
  }
  render() {
    return (
      <div>
         <TextField
        id="outlined-uncontrolled"
        label="Title"
        onChange={(event) => this.handleChange(event, 'title')}
        margin="normal"
        variant="outlined"
      />
      <br/>
      <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        rowsMax="4"
        onChange={(event) => this.handleChange(event, 'description')}
        margin="normal"
        variant="outlined"
      />
      <br/>
      <Button onClick={this.handleSave}>Save</Button>
      <Button onClick={this.handleCancel}>Cancel</Button>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) =>({
reduxState,
})
export default connect(mapStateToProps)(Edit);