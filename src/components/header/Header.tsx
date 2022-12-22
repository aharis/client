import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/system/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from "@mui/material";

    const Header = () => {
  const [anchor, setAnchor] = useState(null);


  const handleOpenMenu = (event:any) => {
    setAnchor(event.currentTarget);	
  };

  const handleCloseMenu = () => {
    setAnchor(null)
  };

  return (
    <AppBar color="inherit" elevation={2}
    >
      <Toolbar>
        <Box ml="auto" mr={3}>
            <Typography color="#00e5ff">Login</Typography> {/*after login shoul be swiched by PersonIcon */}
          {/* <IconButton onClick={handleOpenMenu}>
            <PersonIcon fontSize="large" color="primary" />
          </IconButton> */}
          <Menu
            sx={{ "& .MuiPaper-root": { minWidth: 250 } }}
            anchorEl={anchor}
			keepMounted
            open={!!anchor}
            onClose={handleCloseMenu}
            anchorOrigin={{
              horizontal: "right",
              vertical: "bottom",
            }}
            transformOrigin={{
                horizontal: 'right',
                vertical: 'top',
            }}
          >
            <h1>ide user</h1>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
