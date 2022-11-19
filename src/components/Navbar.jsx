import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div className="left">
              <Link to={"/"}>Home</Link>
            </div>
            
          </Box>
            <Box
              style={{ cursor: "pointer" }}
              sx={{ flexGrow: 0 }}
            >
              
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
