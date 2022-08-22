import {Grid,Typography} from "@mui/material";
//icons
import Filter2Icon from '@mui/icons-material/Filter2';
import AcorddionWork from "./AcorddionWork";

const Worked = () => {

    return (  
        <Grid container m={1} p={2} sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
            <Grid item m={1} p={2} xs={12} xl={12} sx={{
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
