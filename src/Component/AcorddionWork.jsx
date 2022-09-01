import React from 'react'
import { Grid } from '@mui/material';
import Job from './Job';
import sca from '../Img/scamusica.png';
const AcorddionWork = () => {
  const jobs = [
    {id : 1 , 
    title : '2020 - 2021 Freelance && practica profesional' , 
    subtitle : 'Scamusica', 
    content : 'Scamusica pertenece al grupo de empresas El Conquistador FM quien ofrece servicios integracion de audio y contenidos libre de derechos autor',
    lenguajes : [
      {lenguaje : 'html', icono : null , color : '#61dafb'},
      {lenguaje: 'css', icono : null , color : '#f661fb'},
      {lenguaje : 'jquery',icono : null , color : '#fbec61'},
      {lenguaje : 'Boostrap',icono : null , color : '#fb6161'}],
      link : 'https://www.scamusica.cl/',
      img : sca
    },
    
    {id : 2 , 
      title : 'ASD - ASD ASD && ASD ASD' , 
      subtitle : 'Scamusica', 
      content : 'Scamusica pertenece al grupo de empresas El Conquistador FM quien ofrece servicios integracion de audio y contenidos libre de derechos autor',
      lenguajes : [
        {lenguaje : 'S', icono : null , color : '#61dafb'},
        {lenguaje : 'DD', icono : null , color : '#f661fb'},
        {lenguaje : 'jquDDery',icono : null , color : '#fbec61'},
        {lenguaje : 'BoosAAtrap',icono : null , color : '#fb6161'},
        {lenguaje : 'BoostrAAap',icono : null , color : '#fb6161'}],
      link : 'https://www.scamusica.cl/',
      img : sca
    }
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