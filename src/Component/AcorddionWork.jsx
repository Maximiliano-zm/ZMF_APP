import React from 'react'
import { Grid } from '@mui/material';
import Job from './Job';
const AcorddionWork = () => {
  const jobs = [
    {id : 1 , title : '2020 - 2021 Freelance && practica profesional' , text : 'Soporte e implementacion de CMS / ERP (Wordpress,Bsale)' , link : 'https://www.galetti.cl/'},
    {id : 2 , title : '2020 - 2021 Freelance && practica profesional' , text : 'Soporte e implementacion de CMS / ERP (Wordpress,Bsale)' , link : 'https://www.galetti.cl/'},
    {id : 3 , title : '2020 - 2021 Freelance && practica profesional' , text : 'Soporte e implementacion de CMS / ERP (Wordpress,Bsale)' , link : 'https://www.galetti.cl/'}
  ]
  return (
        <Grid container spacing={1} sx={{
            justifyContent: 'center',
            textAlign:'center'}}> 
                {jobs.map((job , index)=>{
                 return(<Job key={index} job={job}/>) 
                })}
        </Grid>
    );
}
export default AcorddionWork;