
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar: React.FC = () => {

  // const [isLogin, setIsLogin] = React.useState<boolean> (false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" component="div" sx={{flexGrow: 1 }}>
            <a href='/'>BooK ShoP</a>
          </Typography>
          
          <Button href='/registration' color="inherit">Registration</Button>
          <Button href='/login' color="inherit">Login</Button>
          <Button href='/basket' color="inherit">Basket</Button> 
          

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;