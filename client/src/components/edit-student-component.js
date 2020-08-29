import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: '',
      name:'',
      address:''

    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/students/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            id: response.data.id,
            name: response.data.name,
            address: response.data.address,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }
    
  onChangeId(e) {
    this.setState({
      id: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const student = {
        id: this.state.id,
        name: this.state.name,
        address: this.state.address,
      }

    console.log(student);

    axios.put('http://localhost:5000/students/' + this.props.match.params.id, student)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>ערוך תלמיד</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}>
          </select>
        </div>
        <div className="form-group"> 
          <label>תעודת זהות: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="ערוך תלמיד" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}