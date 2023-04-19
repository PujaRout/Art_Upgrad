import React from 'react';
import Layout from '../component/Layout/Layout';
import "../style/homestyle.css";
import Homebg from "../images/Homebg.jpg";
const Home = () => {
  return (
     <Layout>
        <div className="main_home" style={
          {backgroundImage:`url(${Homebg})`} 
        }>
          <div className="home_line">
            <h1>Upgrad Your Art Skill</h1>
          <ul className="home_list">
          
              <li>Verified Centres</li>
              <li >Affordable Fees</li>
              <li >Skilled Artist</li>
          
          
          </ul>

            
            </div>
            
          </div>
        
      </Layout>

  );
};

export default Home;
