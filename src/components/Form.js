import React from "react";
import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";

import Modal from "./Modal";

import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";

import { Button } from "@material-ui/core";

const ResumeForm = () => {
  const componentRef = useRef();
  const initialvalues = {
    firstName: "",
    lastName: "",
    address: "",
    phonenumber: "",
    profilepicture: "",
    nameofcourse: "",
    coursecompletionyear: "",
    collegeschoolname: "",
    percentage: "",
    skills: "",
    projectname: "",
    techstackused: "",
    projectdescription: "",
  };
  const [formData, setformData] = useState(initialvalues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <React.Fragment>
      <form Validate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              autoComplete="address"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phonenumber"
              name="phonenumber"
              label="Phone Number"
              fullWidth
              autoComplete="Phone Number"
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload Profile Picture
              <input
                name="profilepicture"
                required
                type="file"
                onChange={handleInputChange}
                hidden
              />
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nameofcourse"
              name="nameofcourse"
              label="Name Of Course"
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="coursecompletionyear"
              name="coursecompletionyear"
              label="coursecompletionyear"
              fullWidth
              autoComplete="Course Completion Year"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="collegeschoolname"
              name="collegeschoolname"
              label="collegeschoolname"
              fullWidth
              autoComplete="College/School Name"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="percentage"
              name="percentage"
              label="percentage"
              fullWidth
              autoComplete="Percentage"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="skills"
              name="skills"
              label="skills"
              fullWidth
              autoComplete="Skills"
              multiline
              rows={4}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="projectname"
              name="projectname"
              label="projectname"
              fullWidth
              autoComplete="Project Name"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="techstackused"
              name="techstackused"
              label="techstackused"
              fullWidth
              autoComplete="Tech-Stack Used"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="projectdescription"
              name="projectdescription"
              multiline
              rows={4}
              label="Project Description"
              fullWidth
              autoComplete="projectdescription"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <ReactToPrint
              trigger={() => (
                <Button variant="contained" style={{ float: "right" }}>
                  Print this out!
                </Button>
              )}
              content={() => componentRef.current}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={() => setOpenPopup("true")}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <br></br>
      </form>

      <Modal
        ref={componentRef}
        openPopup={openPopup}
        data={formData}
        setOpenPopup={setOpenPopup}
      ></Modal>
    </React.Fragment>
  );
};

export default ResumeForm;
