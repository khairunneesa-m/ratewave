import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import React, { useState } from 'react'
import '../App.css';
import Signup from './signup';
import Signin from './signin';

function Header() {
  const [showModal,setShowModal] = useState(false);
  const [showModal1,setShowModal1] = useState(false);
  function showModalHandler1(){
    setShowModal1(!showModal1);
}
  
  function showModalHandler(){
    setShowModal(!showModal);
}
  return (
    <div className="header">
        <div style={{display:'flex',flexDirection:'row',gap:'30px',alignItems:'center'}}> 
            <div className='logo'>
            </div>
            <Typography sx={{fontWeight:600,fontSize:'20px',color:'#FFFFFF',fontFamily:'Poppins'}}><span>Mortgage Comparison Calculator</span></Typography>
        </div> 
        <div style={{display:'flex',flexDirection:'row',gap:'36px',alignItems:'center'}}>
            
            <div style={{display:'flex',flexDirection:'row',gap:'8px',alignItems:'center'}}>
                <CallIcon sx={{width:'16px',height:'16px',color:'white'}} />
                <Typography sx={{fontSize:'16px',fontFamily:'Poppins'}}>Contact us</Typography>
            </div>
            <div style={{display:'flex',flexDirection:'row',gap:'16px',alignItems:'center'}}>
              <Button sx={{width:'114px',height:'36px',backgroundColor:'#A4FCC5',color:'#212427',textTransform:'none',borderRadius:'16px',fontSize:'14px',fontWeight:600,
                '&:hover': {
                  backgroundColor:'#1F6373',
                  color: '#A4FCC5',
                  
                  border: '1px solid #A4FCC5',
                },
                
                '&:active': {
                
                  backgroundColor: '#1F6373',
                  color:'white',
                  border: '1px solid white'
                },
              }} onClick={showModalHandler1}>Sign in</Button>
              
            </div>
            
            {showModal1 ? <Signin />: null }
        </div>
    </div>
  );
}

export default Header;