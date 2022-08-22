import {Grid,Typography} from "@mui/material";
//icons
import Filter2Icon from '@mui/icons-material/Filter2';
import AcorddionWork from "./AcorddionWork";

const Worked = () => {

    return (  
        <Grid container m={1} p={2} data-aos="fade-up" sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
            <Grid item m={1} p={2} xs={10} xl={10} sx={{
            alignItems: "center",
            flexDirection: "column"}}>
                <Typography variant='h2' color='secondary'>
                    <Filter2Icon/> Work && Experience:  
                </Typography>
            </Grid>
            <AcorddionWork/>
        </Grid>
      );
}
export default Worked;
