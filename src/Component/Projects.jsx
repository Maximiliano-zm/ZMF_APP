import React from 'react'
import {Grid,Typography} from "@mui/material";
//icons
import Looks3Icon from '@mui/icons-material/Looks3';
import CardProject from './CardProject';

const Projects = () => {
    return ( 
        <>
         <Grid container  sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
            <Grid item data-aos="fade-up" data-aos-duration="1500" xl={10} xs={8} mt={10} mb={5} p={1}>
                <Typography variant='h3' color='#fff'>
                    <Looks3Icon color='primary'/> Proyectos 
                </Typography>
            </Grid>
            <CardProject/>
        </Grid>
        </>
     );
}
 
export default Projects;