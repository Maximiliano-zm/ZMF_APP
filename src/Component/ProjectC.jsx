import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea} from '@mui/material';
import { Grid, Typography } from '@mui/material';

const ProjectC = () => {
    return (
  <Grid item m={1} data-aos="zoom-in" data-aos-duration="1500" xl={5} xs={4}>
      <Card>
      <CardActionArea>
          <CardContent>
          <Typography gutterBottom variant='body2'>
             hola
          </Typography>
          </CardContent>
      </CardActionArea>
      </Card>
  </Grid>
      );
}
 
export default ProjectC;