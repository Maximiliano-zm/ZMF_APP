import {Grid,Typography} from "@mui/material";
//icons
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import AcorddionWork from "./AcorddionWork";

const Worked = () => {

    return (  
        <Grid container sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
            <Grid item p={1} data-aos="fade-up" data-aos-duration="1500" xl={10} xs={8}>
                <Typography variant='h3' color='secondary'>
                    <LooksTwoIcon color='primary'/> Work && Experience:  
                </Typography>
            </Grid>
            <AcorddionWork/>
        </Grid>
      );
}
export default Worked;
