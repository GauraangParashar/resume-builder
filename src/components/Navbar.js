import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Topbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="light"
        light
        expand="md"
        className="justify-content-center"
      >
        <Typography component="h1" variant="h4" noWrap>
          Resume Builder
          <sup style={{ fontSize: "12px" }}>Built By Gauraang Parashar</sup>
        </Typography>
      </Navbar>
    </div>
  );
};

export default Topbar;
