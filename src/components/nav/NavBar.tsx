import React from "react";
import { Box } from "@mui/material";
import {Props} from "../../types";
import HeaderDesktop from "./NavBarDesktop";
import { Nav } from "./Nav";

export const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{minHeight: "100vh"}}>
      <Nav />
      {children}
    </Box>
  );
};

