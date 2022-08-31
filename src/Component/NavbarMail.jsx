import React from 'react';
//NPM
import * as clipboard from "clipboard-polyfill";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import {Grid,Typography } from '@mui/material';
import Swal from 'sweetalert2';

const NavbarMail = () => {
  const handleClick = () => {
    Swal.fire({
      title: 'Estas seguro que deseas copiar?',
      text: "perderas lo que tienes copiado antes!",
      icon: 'info',
      color: '#fff',
      background: '#121212',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Confirmar',
      showCloseButton: true,
      allowOutsideClick: false,
      backdrop : true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          {
        icon: 'success',
        color: '#fff',
        background: '#121212',
        text: "Muchas Gracias! :)",
        timer : 1600,
        timerProgressBar: true,
        showConfirmButton: false
          }
        )
        clipboard.writeText("Maximiliano.zuritam@gmail.com")
      }
    })
  };
  return (
    <Grid m={1} p={2} data-aos="fade-left" data-aos-duration="1500">
      <AppBar elevation={0} position="static"sx={{backgroundColor:'transparent'}}>
        <Toolbar sx={{flexDirection:'column'}}onClick={handleClick}>
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
    </Grid>
  );
};
export default NavbarMail;