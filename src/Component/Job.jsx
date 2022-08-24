import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Grid } from '@mui/material';
const Job = (props) => {
    const {job}  = props
    return (
        <Grid item xl={7} xs={10}>
        <Accordion variant='secondary'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{job.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{textAlign:'left' , alignContent:'center'}}>
      <Grid alignContent={'center'}>
      <Typography>
          <ArrowRightIcon fontSize="small"/>{job.text}
      </Typography>
      </Grid>
        </AccordionDetails>
      </Accordion>
      </Grid>
    );
}
export default Job;