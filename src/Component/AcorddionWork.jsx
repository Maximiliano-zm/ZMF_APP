import React from 'react'
import { Grid } from '@mui/material';
import Job from './Job';
const AcorddionWork = () => {
  const jobs = [
    {id : 1 , 
    title : '2020 - 2021 Freelance && practica profesional' , 
    subtitle : 'Scamusica', 
    content : 'Scamusica pertenece al grupo de empresas El Conquistador FM quien ofrece servicios integracion de audio y contenidos libre de derechos autor',
    lenguaje : {
      html : 'Hmtl',
      css : 'Css',
      jquery : 'jquery',
      boostrap : 'Boostrap'
    },
    link : 'https://www.scamusica.cl/'}
  ]
  return (
        <Grid container spacing={2} sx={{
            justifyContent: 'center',
            textAlign:'center'}}> 
                {jobs.map((job,index)=>{
                 return(<Job key={index} job={job}/>) 
                })}
        </Grid>
    );
}
export default AcorddionWork;