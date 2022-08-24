import { Divider, Grid, Typography } from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const Description = () => {
    
    return (
    <Grid p={1} container sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
        <Grid item p={1} xl={2} xs={8}>
        <LocalFireDepartmentIcon color="secondary" fontSize="large"/>
            <Typography variant='h3' color='secondary' data-aos="fade-right" data-aos-duration="2000">
                Hola Mundo!
            </Typography>
            <Typography variant="h6" color='primary' data-aos="fade-left" data-aos-duration="2000">
               mi nombre es :
            </Typography>
            <Typography variant="h2" color='primary' data-aos="fade-right" data-aos-duration="2000">
                Maximiliano Zurita
            </Typography>
            <Typography  variant="h6" color='secondary' data-aos="fade-left" data-aos-duration="2000">
                Desarollador software 
            </Typography>
            <Divider></Divider>
        </Grid>
    </Grid>
      );
}
export default Description;