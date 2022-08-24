import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid } from '@mui/material';
const Navbar = () => {
  return (
      <Grid>
      <AppBar m={1} elevation={0} position="static" sx={{backgroundColor:'transparent'}}>
        <Toolbar sx={{display:'flex', flexDirection:'column'}}>
          <IconButton
            size="large"
            color="secondary"
            href='https://github.com/Maximiliano-zm'
          >
            <GitHubIcon/>
          </IconButton>
          <Divider orientation="horizontal" variant="middle" flexItem sx={{ bgcolor: 'secondary.main' }}/>
          <IconButton
            size="large"
            color="secondary"
            href='https://www.linkedin.com/in/maximiliano-zurita-7a9841206/'
          >
            <LinkedInIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default Navbar;