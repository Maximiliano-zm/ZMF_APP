import React from 'react';
import { Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ProjectC = () => {
    return (
  <Grid item m={1} data-aos="zoom-in" data-aos-duration="1500" xl={5} xs={4}>
          <Accordion variant='secondary' xs={10}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography></Typography>
            </AccordionSummary>
            <AccordionDetails sx={{textAlign:'left' , alignContent:'center'}}>
          <Grid alignContent={'center'}>
            <Typography>
                <ArrowRightIcon fontSize="small"/>
                texto
            </Typography>
          </Grid>
            </AccordionDetails>
          </Accordion>
  </Grid>
      );
}
 
export default ProjectC;