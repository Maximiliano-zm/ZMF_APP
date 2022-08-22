import React from 'react';
//NPM
import * as clipboard from "clipboard-polyfill";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import {Alert, Grid,Snackbar,Typography } from '@mui/material';

const NavbarMail = () => {
 
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
    clipboard.writeText("Maximiliano.zuritam@gmail.com")
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid p={1} m={2}>
      <AppBar elevation={0} position="static"sx={{backgroundColor:'transparent'}} onClick={handleClick}>
        <Toolbar sx={{display:'flex', flexDirection:'column'}}>
        <Typography variant="body1" sx={{writingMode : 'vertical-lr'}}>
            Maximiliano.zuritam@gmail.com
        </Typography>
          <IconButton
            size="large"
            color="secondary"
          >
          <EmailIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} variant="outlined" severity="info">
          Muchas gracias!
        </Alert>
      </Snackbar>
    </Grid>
  );
};
export default NavbarMail;