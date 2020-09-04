import React, { Component ,  useState, useEffect  } from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";

import { Grid, Table, TableRow, TableCell, TableBody,TableHead,TableContainer } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

import AddSchool from "./AddSchoolComponent";
/*
const[schools, setSchools] = useState([]);

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const retriveSchools = async() => {
    let data = await axios
    .get("http://localhost:5000/schools/")
    .then((response) => {
        var rows = response.data;
        setSchools(rows);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const Schools = () => {
    const classes = useStyles();
    retriveSchools()
    //componentDidMount();
    return (
    <div dir="rtl">
      <h1>ניהול בתי ספר</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} className="form-group">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={Link}
            to="/admin/schools/add"
          >
            הוסף בית ספר
          </Button>
        </Grid>
        <Grid item xs={12} className="form-group" >
            <TableContainer>
        <Table className={classes.table} aria-label="students table">
            <TableHead>
                <TableRow>
                    <TableCell>שם</TableCell>
                    <TableCell>כתובת</TableCell>
                    <TableCell>מקומות פנויים</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {schools.map((row) =>(
                                <TableRow key={row.name}>
                                <TableCell align="center"component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="center">{row.address}</TableCell>
                                <TableCell align="center">{row.openSeats}</TableCell>
                              </TableRow>
                ))}
            </TableBody>            
        </Table>
        </TableContainer>
        </Grid>
      </Grid>
      <Switch>
        <Route exact path="/admin/schools" />
        <Route path="/admin/schools/add" component={AddSchool} />
      </Switch>
    </div>
  );
};

export default Schools;
*/


export default class Schools extends Component{
    state = {schools : []};
    //const[schools, setSchools] = useState([]);
    
    constructor(props)
    {
        super(props);
        this.GetAllSchools();
    };
    componentDidUpdate(){
        console.log("hello from mount");
        //this.GetAllSchools();
    } 
    
    GetAllSchools = async() =>
    {
       let data = await axios
          .get("http://localhost:5000/schools/")
          .then(({data}) => data)
          this.setState({schools: data})
      };

    useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });

      render(){
          return(
              <div>
                  <h1>ניהול בתי ספר</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} className="form-group">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={Link}
            to="/admin/schools/add"
          >
            הוסף בית ספר
          </Button>
        </Grid>
        <Grid item xs={12} className="form-group" >
            <TableContainer>
        <Table aria-label="students table">
            <TableHead>
                <TableRow>
                    <TableCell align="center">שם</TableCell>
                    <TableCell align="center">כתובת</TableCell>
                    <TableCell align="center">מקומות פנויים</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.state.schools.map((row) =>(
                                <TableRow key={row.name}>
                                <TableCell align="center"component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="center">{row.address}</TableCell>
                                <TableCell align="center">{row.openSeats}</TableCell>
                              </TableRow>
                ))}
            </TableBody> 
        </Table>
        </TableContainer>
        </Grid>
      </Grid>
      <Switch>
        <Route exact path="/admin/schools" />
        <Route path="/admin/schools/add" component={AddSchool} />
      </Switch>
              </div>
          )
      }
}
/*const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const  componentDidMount = () => {
  axios
    .get("http://localhost:5000/schools/")
    .then((response) => {
        var rows = response.data;
        console.log("mount " + rows);
        return rows;
    })
    .catch((error) => {
      console.log(error);
    });
};
const Schools = () => {
    const[schools, setSchools]
    const classes = useStyles();
    componentDidMount();
    return (
    <div dir="rtl">
      <h1>ניהול בתי ספר</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} className="form-group">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={Link}
            to="/admin/schools/add"
          >
            הוסף בית ספר
          </Button>
        </Grid>
        <Grid item xs={12} className="form-group" >
            <TableContainer>
        <Table className={classes.table} aria-label="students table">
            <TableHead>
                <TableRow>
                    <TableCell>שם</TableCell>
                    <TableCell>כתובת</TableCell>
                    <TableCell>מקומות פנויים</TableCell>
                </TableRow>
            </TableHead>
           
        </Table>
        </TableContainer>
        </Grid>
      </Grid>
      <Switch>
        <Route exact path="/admin/schools" />
        <Route path="/admin/schools/add" component={AddSchool} />
      </Switch>
    </div>
  );
};

export default Schools;
/* <TableBody>
                {rows.map((row) =>(
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.openSeats}</TableCell>
                              </TableRow>
                ))}
            </TableBody> */