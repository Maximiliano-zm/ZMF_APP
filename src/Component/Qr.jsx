import { Box } from "@mui/material";
import { ReactComponent as IconoQr } from '../../IMG/Mi_PDF.png'
const Qr = () => {
    return (
        <Box  sx={{
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
        <IconoQr/>
        </Box>        
      );
}
export default Qr;