import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import { Row, Col, Container } from "reactstrap";
import image1 from "./jpeg_43.jpg";

// firstName: "",
//     lastName: "",
//     address: "",
//     phonenumber: "",
//     profilepicture: "",
//     nameofcourse: "",
//     coursecompletionyear: "",
//     collegeschoolname: "",
//     percentage: "",
//     skills: "",
//     projectname: "",
//     techstackused: "",
//     projectdescription: "",

const Modal = (props) => {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap');
  </style>;
  var imageName = require("./jpeg_43.jpg");
  const handleClose = () => {
    setOpenPopup(false);
  };
  const { openPopup, setOpenPopup, data } = props;

  return (
    <Dialog
      open={openPopup}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      fullHeight
      className="font-link"
    >
      <DialogContent>
        <Row style={{ height: "100%" }}>
          <Col md={4} style={{ backgroundColor: "#f0e2bb", height: "100%" }}>
            <img
              src={image1}
              className="rounded-circle"
              alt="Cinque Terre"
              width="70%"
              height="80%"
            />

            <Container>
              <br />
              <h3>
                {data.firstName + "  "}

                {data.lastName}
              </h3>
            </Container>
            <hr
              style={{
                border: "0",
                height: "1px",
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
              }}
            />
            <Container>
              <h4>Personal Info</h4>
              {data.address}
              <br />

              {data.phonenumber}
            </Container>
            <hr
              style={{
                border: "0",
                height: "1px",
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
              }}
            />
            <br />
            <Container style={{ margin: "20px 0px 80px 0px" }}>
              <h4>Skills</h4>
              <hr
                style={{
                  border: "0",
                  height: "1px",
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
                }}
              />
              {data.skills}
            </Container>
          </Col>
          <Col md={8} style={{ backgroundColor: "#f5eedc" }}>
            <Container style={{ margin: "20px 0px 80px 0px" }}>
              <h4
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Education
              </h4>
              <hr
                style={{
                  border: "0",
                  height: "1px",
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
                }}
              />
              <span className="subhead">Course Name : </span>
              {" " + data.nameofcourse}
              <br />
              <span className="subhead">Date : </span>
              {" " + data.coursecompletionyear}
              <br />
              <span className="subhead">Institute Name : </span>{" "}
              {" " + data.collegeschoolname}
              <br />
              <span className="subhead">Marks Obtained : </span>{" "}
              {" " + data.percentage}
            </Container>
            <Container style={{ margin: "20px 0 20px 0" }}>
              <h4
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Mini Project
              </h4>
              <hr
                style={{
                  border: "0",
                  height: "1px",
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
                }}
              />
              <span className="subhead">Project Name : </span>
              {" " + data.projectname}
              <br />
              <span className="subhead">Tech Stack Used :</span>
              {" " + data.techstackused}
              <br />
              <span className="subhead">Description :</span>
              {" " + data.projectdescription}
            </Container>
          </Col>
        </Row>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
