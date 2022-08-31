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
      <Grid item xl={6} xs={11} data-aos="zoom-in" data-aos-duration="1500">
        <Accordion variant='secondary' xs={10}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography>{job.title}</Typography>
            </AccordionSummary>
            <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image=""
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
                        {/* //content */}
                      </CardContent>
                </CardActionArea>
              </Card>
        </Accordion>
      </Grid>
    );
}
export default Job;

