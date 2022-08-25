import React from 'react'
import {Grid,Typography} from "@mui/material";
//others components
import CardSkills from "./CardSkills";
//icons
import Filter1Icon from '@mui/icons-material/Filter1';
const Projects = () => {
    return ( 
        <>
         <Grid container  sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
            <Grid item data-aos="fade-up" data-aos-duration="1500" xl={10} xs={8} mt={10} mb={5} p={1}>
                <Typography variant='h2' color='secondary'>
                    <Filter1Icon/> Proyectos 
                </Typography>
            </Grid>
                <CardSkills/>
        </Grid>
        </>
     );
}
 
export default Projects;