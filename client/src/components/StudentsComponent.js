 import React, { Component ,  useState  } from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";

import { Grid, Table, TableRow, TableCell, TableBody,TableHead,TableContainer } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';


export default class Students extends Component{
    state = {students : []}
    constructor(props)
    {
        super(props);
        this.GetAllStudents();
    };
    componentDidUpdate(){
        this.GetAllStudents();
    }
    GetAllStudents = async() =>
    {
       let data = await axios
          .get("http://localhost:5000/students/")
          .then(({data}) => data)
          this.setState({students: data})
      };

      render(){
          return(
              <div>
                  <h1>תלמידים</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} className="form-group" >
            <TableContainer>
        <Table aria-label="students table">
            <TableHead>
                <TableRow>
                    <TableCell align="center">שם</TableCell>
                    <TableCell align="center">כתובת</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.state.students.map((row) =>(
                                <TableRow key={row.name}>
                                <TableCell align="center"component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="center">{row.address}</TableCell>
                              </TableRow>
                ))}
            </TableBody> 
        </Table>
        </TableContainer>
        </Grid>
      </Grid>
              </div>
          )
      }
}
