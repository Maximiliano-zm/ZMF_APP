import React from 'react'
import { Grid } from '@mui/material';
import ProjectC from './ProjectC'

const CardProject = () => {

  const Project = [
    {id : 1, text : 'Bootstrap'},
    {id : 2, text : 'C#'}
    ]
    return ( 
        <Grid container item xl={6} xs={11} p={3} sx={{
            justifyContent: 'center',
            textAlign:'center'}}> 
                {Project.map((index,project)=>{      
                    return (<ProjectC/>)
                })}
        </Grid>
     );
}
 
export default CardProject;