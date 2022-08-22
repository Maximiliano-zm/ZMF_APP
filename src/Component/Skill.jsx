import React from 'react';
import {Grid } from '@mui/material';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import IconsCategories from './IconsCategory';
const Skill = (props) => {
    // Destructuring props
    const{skill} = props;
    return (
    <Grid item m={1} p={1} xs={3}>
        <IconsCategories id={skill.id}/>
        <Card>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant='body2'>
                {skill.text}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
   </Grid>
      );
}
export default Skill;