import { Box, Button, ButtonBase, Typography } from '@mui/material';
import React, { useState } from 'react'
import '../App.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import TaskIcon from '@mui/icons-material/Task';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HelpIcon from '@mui/icons-material/Help';
import msgno from './drum.png';
import Modalsendtoemail from './modalsendtoemail';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
function Footer() {
  const [accept, setAccept] = useState(false);
  const [showModal,setShowModal] = useState(false);

  function showModalHandler(){
    setShowModal(!showModal);
}
  return (
    <div className='footer'>
      <Button startIcon={<Box sx={{width:'24px',height:'36px', alignItems:'center',justifyContent:'center',display:'flex'}}>
               <img src={msgno}  /> 
              </Box>} sx={{width:'344px',maxHeight:'36px',borderRadius:'4px',color:'white',backgroundColor:'#1F6373',textTransform:'none',fontFamily:'Poppins',
               '&:hover': {
                backgroundColor:'#D2E0E3',
                color: '#1F6373',
                border: '1px solid #1F6373',
              },
              
              '&:active': {
              
                backgroundColor: '#1F6373',
                color:'white',
              },
            }}>Start the bidding</Button>
            
                <Button startIcon={<MailOutlineIcon />} sx={{width:'154px',heigt:'36px',borderRadius:'4px',color:'#1F6373',backgroundColor:'#D2E0E3',textTransform:'none',fontFamily:'Poppins',
                   '&:hover': {
                    backgroundColor:'#1F6373',
                    color: 'white',
                    border: '1px solid #1F6373',
                  },
                  
                  '&:active': {
                  
                    backgroundColor: '#1F6373',
                    color:'white',
                  },
                }} onClick={showModalHandler}>Send to Email</Button>
                <Button startIcon={<FileDownloadOutlinedIcon />} sx={{width:'184px',heigt:'36px',borderRadius:'4px',color:'#1F6373',backgroundColor:'#D2E0E3',textTransform:'none',fontFamily:'Poppins',
                   '&:hover': {
                    backgroundColor:'#1F6373',
                    color: 'white',
                    border: '1px solid #1F6373',
                  },
                  
                  '&:active': {
                  
                    backgroundColor: '#1F6373',
                    color:'white',
                  },
                }}>Download Result</Button>
      
    </div>
  );
}

export default Footer;