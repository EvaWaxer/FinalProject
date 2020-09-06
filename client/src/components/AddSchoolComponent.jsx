import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import {
  fetchSchoolsPending,
  fetchSchoolsSuccess,
  fetchSchoolsError,
} from "../actions/fetchSchoolsActions";

import { getSchools } from "../reducers/fetchSchoolsReducer";

function AddSchoolComponent(props) {
  console.log("hello from add");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [openSeats, setOpenSeats] = useState(0);
  const schoolsReducer = useSelector((state) => state.fetchSchoolsReducer);

  const dispatch = useDispatch();

  const handleSubmitClick = (e) => {
    e.preventDefault();
    sendDetailsToServer();
  };

  useEffect(() => {
    console.log("props : " + props);
  }, []);

  const sendDetailsToServer = () => {
    if (name.length && address.length) {
      const payload = {
        name: name,
        address: address,
        openSeats: openSeats,
      };
      dispatch(fetchSchoolsPending());
      axios
        .post("http://localhost:5000/schools/", payload)
        .then(function (response) {
          schoolsReducer.schools.push(response.data);
          dispatch(fetchSchoolsSuccess(schoolsReducer.schools));

          props.history.push("/admin/schools");
        })
        .catch(function (error) {
          dispatch(fetchSchoolsError(error));
          console.log(error);
        });
    }
  };

  return (
    <Dialog open={true} maxWidth="xs">
      <DialogTitle> הוסף בית ספר</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} className="form-group">
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="שם בית ספר"
              name="name"
              autoComplete="שם בית ספר"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className="form-group">
            <TextField
              variant="outlined"
              required
              fullWidth
              id="address"
              label="כתובת"
              name="address"
              autoComplete="כתובת"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className="form-group">
            <TextField
              variant="outlined"
              required
              fullWidth
              name="openSeats"
              label="מקומות פנויים"
              id="openSeats"
              autoComplete="מקומות פנויים"
              value={openSeats}
              onChange={(e) => setOpenSeats(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className="form-group">
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              onClick={handleSubmitClick}
            >
              הוסף
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default AddSchoolComponent;
