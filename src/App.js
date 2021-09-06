import React from "react";
import "./App.css";
import ResumeForm from "./components/Form";
import Topbar from "./components/Navbar";
import { Container } from "reactstrap";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <Topbar />
      <Container
        className="themed-container"
        style={{
          backgroundColor: "#c4b999",
          borderRadius: "3px",
          marginTop: "50px",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <ResumeForm />
      </Container>
    </React.Fragment>
  );
}

export default App;
