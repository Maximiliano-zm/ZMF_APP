import {Grid,Typography} from "@mui/material";
//others components
import CardSkills from "./CardSkills";
//icons
import Filter1Icon from '@mui/icons-material/Filter1';

const Description = () => {
    return (
        <Grid container m={1} p={2} sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
            <Grid item m={1} p={2} xs={10} xl={10}>
                <Typography variant='h2' color='secondary'>
                    <Filter1Icon/> About me:  
                </Typography>
                <Typography variant='body1' color='secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Typography variant='body1' color='secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Typography variant='body2' color='secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Typography variant='body1' color='secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing :
                </Typography>
            </Grid>
                <CardSkills/>
        </Grid>
      );
}
export default Description;