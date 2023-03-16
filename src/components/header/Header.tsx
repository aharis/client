import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/system/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { useStyles } from './styles.js';
import { useNavigate } from 'react-router';
import { logout } from '../../featured/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Dropdown from '../dropdown/Dropdown';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const { user } = useAppSelector((state) => state.auth);
  const userName = user?.result.user?.username;

  const logoutUser = async () => {
    await dispatch(logout());
    navigate('/');
  };

  return (
    <AppBar color='inherit' elevation={2}>
      <Toolbar>
        <Link href='/home' underline='none'>
          Home
        </Link>
        {user.result.user?.role === 'manager' && <Dropdown />}
        <Box className={classes.root}>
          {user?.result.token ? (
            <>
              <Typography mr={3} className={classes.links}>
                Welcome {user.result.user.role === 'customer' ? userName : 'Manager'}
              </Typography>
              <Link onClick={() => logoutUser()} className={classes.links}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link onClick={() => navigate('/register')} mr={3} className={classes.links}>
                Register
              </Link>
              <Link onClick={() => navigate('/')} className={classes.links}>
                Login
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
