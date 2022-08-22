import { Divider, Grid, Typography } from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const Description = () => {
    
    return (
    <Grid container m={1} p={2} sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
        <Grid item m={1} p={2} xs={10} xl={2}>
        <LocalFireDepartmentIcon color="secondary" fontSize="large"/>
            <Typography variant='h3' color='secondary'>
                Hola Mundo!
            </Typography>
            <Typography variant="h6" color='primary'>
               mi nombre es :
            </Typography>
            <Typography variant="h2" color='primary'>
                Maximiliano Zurita
            </Typography>
            <Typography  variant="h6" color='secondary'>
                Desarollador software 
            </Typography>
            <Divider></Divider>
        </Grid>
    </Grid>
      );
}
export default Description;