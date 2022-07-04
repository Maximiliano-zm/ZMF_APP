// Themes
//Components Mui
import { Button,TextField,Typography } from "@mui/material";
import { Box} from "@mui/system";
//icons
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PasswordIcon from '@mui/icons-material/Password';

const Sign_Up = () => {
    return (
        <>  
        {/* form */}
            <Box component={'form'} sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingLeft: '35%',
                paddingRight: '35%',
                paddingTop: '10%',
                paddingBottom: '10%',
                rowGap: '15px'
            }}> 
                <Typography align="center" color='secondary' variant='h3'>
                <LocalFireDepartmentIcon color="secondary" fontSize="large"/>
                </Typography>
                <Typography variant="h3" color='primary'>Sign in</Typography>    
                <PasswordIcon fontSize="medium"/>
                    <TextField label="ACOUNT" color="secondary" fullWidth/>
                    <TextField label="PASSWORD" color="secondary" fullWidth />
                    <TextField label="RE:PASSWORD" color="secondary" fullWidth/> 
                <Box sx={{display: 'flex', gap:'40px'}}>
                    <Button variant="outlined" size="large" href="/sign-up">Register</Button> 
                    <Button variant="contained" color="secondary" size="large" href="/sign-in">Return Login</Button> 
                </Box>
            </Box>
        {/* form---- */}
        </>
      );
}
 
export default Sign_Up;