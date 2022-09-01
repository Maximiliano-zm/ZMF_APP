import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Job = (props) => {
    const {job}  = props
    return (
      <Grid item xl={5} xs={11} data-aos="zoom-in" data-aos-duration="1500">
        <Accordion variant='secondary' xs={10}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography>{job.title}</Typography>
            </AccordionSummary>
            <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={job.img}
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {job.subtitle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.content}
                      </Typography>
                  </CardContent>
                      <CardContent>
                       {job.lenguajes.map(lenguaje => {
                         return (
                          <Grid xl={12} sx={{justifyContent : 'center' , flexDirection : 'column-reverse'}}>
                             <Typography color={lenguaje.color}>
                            {lenguaje.lenguaje}
                          </Typography>
                          </Grid>
                         )})}
                      </CardContent>
                </CardActionArea>
              </Card>
        </Accordion>
      </Grid>
    );
}
export default Job;

