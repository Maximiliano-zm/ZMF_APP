import React from 'react'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    return ( 
        <Grid container sx={{
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column"}}> 
            <Grid item xl={10} xs={8} mt={10} mb={5} p={1}>
                <IconButton size="small"color="secondary" href='https://github.com/Maximiliano-zm/Zmf_APP'> 
                    <GitHubIcon/>
                </IconButton>
                <Typography variant='body1' color='secondary'>
                     Designed & Built by Maximiliano Zm
                </Typography>
            </Grid>
        </Grid>
     );
}
 
export default Footer;


