import React from 'react';
import {Grid } from '@mui/material';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconsCategories from './IconsCategory';
const Skill = (props) => {
    // Destructuring props
    const{skill} = props;
    return (
    <Grid item m={1} data-aos="zoom-in" data-aos-duration="1500" xl={5} xs={4}>
        <Card>
            <CardContent>
            <IconsCategories id={skill.id}/>
            <Typography gutterBottom variant='body2'>
                {skill.text}
            </Typography>
            </CardContent>
        </Card>
   </Grid>
      );
}
export default Skill;