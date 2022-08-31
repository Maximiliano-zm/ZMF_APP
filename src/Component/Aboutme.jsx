import {Grid,Typography} from "@mui/material";
//others components
import CardSkills from "./CardSkills";
//icons
import LooksOneIcon from '@mui/icons-material/LooksOne';

const Description = () => {
    return (
        <Grid container  sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
            <Grid item data-aos="fade-up" data-aos-duration="1500" xl={10} xs={8} mt={10} mb={5} p={1}>
                <Typography variant='h2' color='#fff'>
                    <LooksOneIcon color='primary'/> About me:
                </Typography>
                <Typography variant='body1' color='secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Typography variant='body1' color='secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Typography variant='body2' color='secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit..
                </Typography>
                <Typography variant='body1' color='secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing :eLorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
            </Grid>
                <CardSkills/>
        </Grid>
      );
}
export default Description;