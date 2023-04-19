import React from 'react';
import { AppBar, Box, Toolbar, Typography} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { Link } from 'react-router-dom'; 
import "../../style/headerstyle.css";

const Header = () => {
  return (
    <div>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:"#1e0a52"}}>
          <Toolbar>
             <Typography color={'gold'} variant='h6' component="div" sx={{flexGrow: 1}}>
                <PaletteIcon/>
               Art Upgrad
              </Typography>
                <Box >
                   <ul className='navigation-menu'>
                     <li>
                        <Link to={'/'}>Home</Link>
                      </li>
                       <li>
                         <Link to={'/skill'}>Skill</Link>
                      </li>
                      <li>
                         <Link to={'/about'}>About</Link>
                       </li>
  
                       <li>
                          <Link to={'/contact'}>Contact</Link>
                       </li>
    
                    </ul>
                  </Box>
                </Toolbar>
          
              </AppBar>
              <Box>
              <Toolbar/>
              </Box>
          </Box>
     </div>
  );
};

export default Header;
