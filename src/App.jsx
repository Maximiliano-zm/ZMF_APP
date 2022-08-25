import React from 'react';
//components
import Navbar from './Component/Navbar';
import NavbarMail from './Component/NavbarMail';
import Description from './Component/Description';
import Aboutme from './Component/Aboutme';
import Worked from './Component/Worked';
import Projects from './Component/Projects';
//themes
import { theme } from './Themeconfig/ThemeConfig';
import { ThemeProvider } from '@mui/system';
//components mui 5v
import {Grid} from '@mui/material';
import Footer from './Component/Footer';
const App  = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{flexDirection : 'row' , justifyContent : 'space-between' , position:'fixed'}}>
      <Navbar item/>
      <NavbarMail item/> 
      </Grid>
        <Description/>
        <Aboutme/>
        <Worked/>
        <Projects/>
        <Footer/>
    </ThemeProvider>
    );
}
export default App;

