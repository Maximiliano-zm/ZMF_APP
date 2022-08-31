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
            <Grid item data-aos="fade-up" data-aos-duration="1500" xl={10} xs={8} p={1}>
                <Typography variant='h3' color='#fff'>
                    <LooksTwoIcon color='primary'/> Work && Experience:  
                </Typography>
            </Grid>
            <AcorddionWork/>
        </Grid>
      );
}
export default Worked;
