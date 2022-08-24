import {Grid,Typography} from "@mui/material";
//icons
import Filter2Icon from '@mui/icons-material/Filter2';
import AcorddionWork from "./AcorddionWork";

const Worked = () => {

    return (  
        <Grid container sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
            <Grid item p={1} data-aos="fade-up" data-aos-duration="1500" xl={10} xs={8}>
                <Typography variant='h2' color='secondary'>
                    <Filter2Icon/> Work && Experience:  
                </Typography>
            </Grid>
            <AcorddionWork/>
        </Grid>
      );
}
export default Worked;
