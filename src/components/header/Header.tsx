import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/system/Box";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link"
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';
import Typography from "@mui/material/Typography";
import { useStyles } from './styles.js'
import { useNavigate } from "react-router";
import { logout } from "../../featured/auth/authSlice.js";
import { useAppDispatch } from "../../app/hooks";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);

  const handleOpenMenu = (event: any) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    dispatch(logout())
    navigate('/')
    setAnchor(null)
  };

  return (
    <AppBar color="inherit" elevation={2}
    >
      <Toolbar>
        <Box className={classes.root}>
          <Link onClick={() => navigate('/register')} mr={3} className={classes.links}>Register</Link>{/*after login shoul be swiched by PersonIcon */}
          <Link onClick={() => navigate('/')} className={classes.links}>Login</Link>{/*after login shoul be swiched by PersonIcon */}
          {/*after login shoul be swiched by PersonIcon */}
          <IconButton onClick={handleOpenMenu}>
            <PersonIcon fontSize="large" color="primary" />
          </IconButton>
          <Menu
           className={classes.modal}
            anchorEl={anchor}
            keepMounted
            open={!!anchor}
            onClose={handleCloseMenu}            
          >
            <Typography>ide user</Typography>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
