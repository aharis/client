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
import { logout } from "../../featured/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);

  const { user } = useAppSelector((state) => state.auth)
  const userName = user?.result?.user?.username

  const handleOpenMenu = (event: any) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {   
    setAnchor(null)
  };

  const handleClickLogout = () => {
    dispatch(logout())
    handleCloseMenu()
    navigate('/')
  }
  return (
    <AppBar color="inherit" elevation={2}
    >
      <Toolbar>
      <Typography>Our books</Typography>
        <Box className={classes.root}>
         {user ?       
          <IconButton onClick={handleOpenMenu}>
            <PersonIcon fontSize="large" className={classes.links}/>
          </IconButton> :
             <Box>
             <Link onClick={() => navigate('/register')} mr={3} className={classes.links}>Register</Link>
             <Link onClick={() => navigate('/')} className={classes.links}>Login</Link>
             </Box> 
          }
          <Menu
           className={classes.modal}
            anchorEl={anchor}
            keepMounted
            open={!!anchor}
            onClose={handleCloseMenu}            
          >
            <Box px={2} pb={1} onClick={handleCloseMenu}>
            <Typography >{userName}</Typography>
            </Box>
            <Box px={2} onClick={handleClickLogout}>
              <Typography sx={{ cursor: 'pointer', fontSize: '18px'}}>logout</Typography>
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
