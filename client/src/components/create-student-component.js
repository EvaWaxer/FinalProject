import React, { Component } from 'react';
import axios from 'axios';
//import GeoCodingService from '../Services/GeocodingService';
//import SearchLocationInput from './SearchLocationInput';

export default class CreateStudent extends Component {
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

    axios.post('http://localhost:5000/students/', student)
      .then(res => console.log(res.data));

    window.location = '/homepage';
  };

  render() {
    return (
      <div>
        <h3>רשום תלמיד חדש</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>שם: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
          </div>
          <div className="form-group"> 
            <label>תעודת זהות: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.id}
                onChange={this.onChangeId}
                />
          </div>
          <div className="form-group"> 
            <label>כתובת: </label>
            <input  type="text" 
                required
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeAddress}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="רשום" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
  