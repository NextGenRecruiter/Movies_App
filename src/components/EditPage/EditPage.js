import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class Edit extends Component {
  state={
    title:'',
  }

  handleChange = (event) =>{
    console.log(event.target.value);
        
    this.setState({
        title:event.target.value
    })
  }
  render() {
    return (
      <div>
         <TextField
        id="outlined-uncontrolled"
        label="Title"
        onChange={this.handleChange}
        margin="normal"
        variant="outlined"
      />
      <br/>
      <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        rowsMax="4"
        onChange={this.handleChange}
        margin="normal"
        variant="outlined"
      />
      <br/>
      <Button>Save</Button>
      <Button>Cancel</Button>
      </div>
    );
  }
}

export default Edit;