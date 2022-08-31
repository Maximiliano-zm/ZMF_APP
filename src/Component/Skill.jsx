import React from 'react';
import {Divider, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconsCategories from './IconsCategory';
const Skill = (props) => {
    const{skill} = props;
    return (
    <Grid item m={1} data-aos="zoom-in" data-aos-duration="1500" xl={5} xs={4}>
        <IconsCategories id={skill.id}/>
                <Typography gutterBottom variant='body2' color='#fff'>
                    {skill.text}
                </Typography> 
                <Divider></Divider>
   </Grid>
      );
}
export default Skill;