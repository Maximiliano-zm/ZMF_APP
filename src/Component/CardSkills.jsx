import React from 'react';
import { Grid } from '@mui/material';
import Skill from './Skill';
const CardSkills = () => {
    const skills = [
        {id : 1, text : 'Bootstrap'},
        {id : 2, text : 'C#'},
        {id : 3, text : 'Css'},
        {id : 4, text : 'Docker'},
        {id : 5, text : 'Firebase 9'},
        {id : 6, text : 'Html'},
        {id : 7, text : 'Javascript'},
        {id : 8, text : 'Material-ui v5'},
        {id : 9, text : 'Mysql'},
        {id : 10, text : 'Node'},
        {id : 11, text : 'React'},
        {id : 12, text : 'Styled-Componets'},
        {id : 13, text : 'TypeScript'}
    ]
    return (
        <Grid container item m={1} p={2} xs={12} xl={6} sx={{
            justifyContent: 'center',
            textAlign:'center'}}> 
                {skills.map((skill , index)=>{      
                    return (<Skill key={index} skill={skill}/>)
                })}
        </Grid>
    );
}
export default CardSkills;