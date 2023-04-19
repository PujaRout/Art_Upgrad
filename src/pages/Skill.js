import React from 'react';
import SkillList from '../data/data';
import Layout from '../component/Layout/Layout';
import {Box, CardActionArea, CardMedia,Card, CardContent, Typography} from '@mui/material';

const Skill = () => {
  return (
    
      <Layout>


      <Box sx={{display:'flex' ,flexWrap:'wrap' , justifyContent:"center"}}>
{
  SkillList.map(skill => (
    <Card sx={{ maxWidth:"320px",display:"flex",m:2}}>
      <CardActionArea>
         <CardMedia sx={{minHeight:'360px'}} component={'img'} src={skill.image} alt={skill.name}/>
         <CardContent>
          <Typography variant='h4'>
            {skill.name}
          </Typography>
          <Typography>
            {skill.description}
          </Typography>
         </CardContent>
      </CardActionArea>
    </Card>
  )
  )
}
      </Box>
      
      </Layout>

  );
};

export default Skill;
