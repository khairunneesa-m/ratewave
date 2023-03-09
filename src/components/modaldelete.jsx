import { Box, Button, IconButton, Modal, OutlinedInput, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
function Modaldelete() {
  const [alignment1, setAlignment1] = useState('disable');
  const [openModal, setOpenmodal]=useState(true);

  const [alignment2, setAlignment2] = useState('enable');
  const handleOpenmodal = () => setOpenmodal(true);
  const handleClosemodal = () => setOpenmodal(false);


  const handleChange1 = (event, newValue) => {
      setAlignment1(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setAlignment2(newValue);
};

  return (
    <div>
        <Modal
        open = {openModal}
        //onClose={handleClosemodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

      
      <Box
          sx={{
            position: 'absolute',
            width: '378px',
            height:'202px',
            left:'487px',
            top:194,
            bgcolor: '#F8F8F8',
            
            //border: '1px solid black',
            borderRadius:'8px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            alignItems:'center',
            justifyContent:'center',
            alignContent:'center',
            // boxShadow: (theme) => theme.shadows[5],
            // p: 4,
          }}
        >
            <div>
            <div style={{ display: 'flex', flexDirection:'row-reverse',paddingTop:'16px',paddingRight:'16px' }}>
            <IconButton sx={{ padding: '0px' }} onClick={handleClosemodal} >
              < CancelOutlinedIcon sx={{ color: '#606060', width: '24px', height: '24px' }}
              
               >
              </CancelOutlinedIcon>
            </IconButton>
            </div>
            <div style={{ display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',alignContent:'center',marginTop:'20px',paddingLeft:'44px',paddingRight:'44px',paddingBottom:'54px'}}>
            <Typography sx={{textAlign:'center',fontSize:'14px',fontWeight:'500px',color:'#1A1A1A',fontFamily:'Poppins',marginBottom:'24px'}}>
            Are you sure you want to delete this Mortgage option?
            </Typography>
            <div style={{display:'flex',flexDirection:'row', gap:'25px'}}> 
                <Button sx={{width:'77px',height:'32px',borderRadius:'4px',textTransform:'capitalize',backgroundColor:'white',color:'#1F6373',fontSize:'14px',border:'1px solid #606060'}}>Cancel</Button>
                <Button sx={{width:'77px',height:'32px',borderRadius:'4px',textTransform:'capitalize',backgroundColor:'#1F6373',color:'white',fontSize:'14px'}}>Delete</Button>
            </div>
            </div>
            </div>
            </Box>
            </Modal>
            </div>
  );
        }
    export default Modaldelete