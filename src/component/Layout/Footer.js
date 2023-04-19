import React from 'react';
import {Box,Typography,Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'#585555', color:'white',padding:1}}>
        <Typography variant='h6' >
            All Rights Reserved &#169; Art_Upgrad
        </Typography>
    <Box>
    <Button><FacebookIcon/>
         </Button>
    <Button>
        <InstagramIcon/> </Button>

        
    </Box>
    </Box>

     
    
    </>
  );
};

export default Footer;
