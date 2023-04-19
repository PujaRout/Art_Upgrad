import React from 'react';
import Layout from '../component/Layout/Layout';
import "../style/contactstyle.css";
import Contactbg from '../images/Contactbg.jpg';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  return (
    <>
      <Layout>
      <div className="contact" style={
          {backgroundImage:`url(${Contactbg})`}
        }>
         
          <div className="contact_heading">
            <h1 >Contact Us :</h1>
          </div>

          <div className="contact_detail">

            <div className="contact_add">
            
            <h3><LocationOnSharpIcon/> Address :</h3>
          
            <p>Lorem, ipsum dolor.,<br />Lorem, ipsum,<br />22077</p>
            </div>
            <br />
            
            <div className="contact_ph">
            
            <h3><CallRoundedIcon/> Phone No. :</h3>
            <p>1212100000</p>
            </div>
            <br />

            <div className="contact_eml">
            <EmailIcon/>
            <div className='contact_icon'>
              
            </div>
            <h3>Email</h3>
            <p>lorem.123@gmail.com</p>
            </div>
            <br />

            




          </div>

          
        </div>
    </Layout>
    </>
  );
};

export default Contact;
