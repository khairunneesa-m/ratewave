
import { Badge, Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import Bell from './Vector.png';
import React, { useState } from 'react'
import '../App.css';
function Header1() {
  return (
    
        
  
  
  
    <div className="header">
        <div style={{display:'flex',flexDirection:'row',gap:'30px',alignItems:'center'}}> 
            <div className='logo'>
            </div>
            <Typography sx={{fontWeight:600,fontSize:'20px',color:'#FFFFFF',fontFamily:'Poppins'}}><span>Mortgage Comparison Calculator</span></Typography>
        </div> 
        <div style={{display:'flex',flexDirection:'row',gap:'36px',alignItems:'center'}}>
            
           
            <div style={{display:'flex',flexDirection:'row',gap:'16px',alignItems:'center'}}>
            <Badge color="secondary" badgeContent={5} 
                sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "#F52966"
                    }
                  }}
            >
                <Box sx={{height:'24px', width:'24px', borderRadius:'20px',alignItems:'center',justifyContent:'center',display:'flex',marginLeft:'2.25rem',backgroundColor:'var(--White200)'}}>
                
              <img src={Bell}  />
              </Box>
              </Badge>
            </div>

            
        </div>   
        
    </div>
  );
}

export default Header1;