
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tick from './tick.png';
import { useState } from 'react'
import { Button, IconButton } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
function Getquotes() {
    const [openModal, setOpenmodal]=useState(true);
    const handleOpenmodal = () => setOpenmodal(true);
    const handleClosemodal = () => setOpenmodal(false);
    const [showModal,setShowModal] = useState(false);
    function showModalHandler(){
        //handleClosemodal();
        setShowModal(!showModal);
       }
  return (
    <div style={{overflowY:'auto'}} >
        <Modal
        open = {openModal}
        //onClose={handleClosemodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

      
      <Box
          sx={{
            position: 'absolute',
            width: '438px',
            height:'158px',
            left:'489px',
           top:'242px',
            bgcolor: '#FFFF',
            // paddingLeft:'28px',
            // paddingRight:'28px',
            paddingBottom:'49px',
            // paddingTop:'12px', 
            
            //border: '1px solid black',
            borderRadius:'8px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            alignItems:'center',
            //justifyContent:'center',
            // alignContent:'center',
            // boxShadow: (theme) => theme.shadows[5],
            // p: 4,
          }}
        >
            <div style={{ display: 'flex', flexDirection:'row-reverse',paddingTop:'12px',paddingRight:'12px' }}>
            <IconButton sx={{ padding: '0px' }} onClick={handleClosemodal} >
              < CancelOutlinedIcon sx={{ color: '#606060', width: '24px', height: '24px' }}
              
               >
              </CancelOutlinedIcon>
            </IconButton>
            </div>
            <div style={{alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column',paddingTop:'10px'}}>
            <div style={{alignItems:'center',justifyContent:'center',display:'flex',paddingLeft:'28px',
            paddingRight:'28px'
             }}>
          <Box sx={{height:44, width:44,alignItems:'center',justifyContent:'center', display:'flex',
          
            // borderRadius:'1.375rem',marginLeft:'2.7rem',backgroundColor:'var(--White200)'
            }}>
              <img src={Tick}  />
           </Box> 
           </div>
           
          <Typography sx={{textAlign:'center',fontSize:'14px',fontWeight:'500px',color:'#1A1A1A',fontFamily:'Poppins',marginTop:'10px'}}>
            <span>
            You will get the quotation within 24 hours
          </span>
          </Typography>
          </div>
          </Box>
          </Modal>
          </div>
  )
}

export default Getquotes