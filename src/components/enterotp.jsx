import { Box, Button, Checkbox, FormControlLabel, FormLabel, IconButton, InputAdornment, Modal, OutlinedInput, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import otp from './otp.png';
function Enterotp() {
    const [openModal, setOpenmodal]=useState(true);
    const handleOpenmodal = () => setOpenmodal(true);
    const handleClosemodal = () => setOpenmodal(false);
    const [showModal,setShowModal] = useState(false);
    const [values, setValues] = useState({
        amount: '',
        currentPassword: '',
        newPassword1: '',
        newPassword2: '',
        weight: '',
        weightRange: ''
      });
      function showModalHandler(){
        //handleClosemodal();
        setShowModal(!showModal);
       }
      const [showPasswordValues,setShowPasswordValues]=useState({
        currentPassword: false,
        newPassword1: false,
        newPassword2: false,
      })
      const [error, setError] = useState();
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleClickShowPassword = (prop)=>() => {
        setShowPasswordValues({
          ...showPasswordValues,
          [prop]: !showPasswordValues[prop],
        });
      };
      const i = [1,2,3,4,5,6];
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
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
              width: '448px',
              height:'438px',
              left:'459px',
             top:'100px',
              bgcolor: '#FFFF',
              // paddingLeft:'28px',
              // paddingRight:'28px',
              paddingBottom:'36px',
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
               <div style={{ display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                  <Box sx={{height:'64px',width:'54px',alignItems:'center',alignContent:'center',justifyContent:'center'}}>
                      <img src={otp} />
                  </Box>
                  <Typography sx={{fontSize:'18px',fontWeight:500,color:'#212427',fontFamily:'Poppins',marginTop:'21px'}}>Enter your OTP</Typography>
                  
               </div>

               <div style={{ display: 'flex', flexDirection:'column',paddingLeft:'28px',
              paddingRight:'28px',
              paddingTop:'21px',
               paddingBottom:'36px',alignItems:'center',justifyContent:'center'
               }}>
                <Typography sx={{textAlign:'center',width:'392px',fontSize:'14px',color:'#626262',paddingBottom:'16px',fontFamily:'Poppins',fontWeight:500}}>We sent a 6-digit OTP to your registered phone Number and registered email id</Typography>
                <div style={{width:'346px',display:'flex',flexDirection:'row',gap:'26px',marginBottom:'48px'}}>
                { i.map(item => {
                     return(
                <OutlinedInput
                          type="text"
                          
                          sx={{width:'36px',borderRadius:'8px',fontSize:'12px',
                          height:'36px',border:'1px solid #CFC9C9', backgroundColor:'#F9F9F9',
                          fontFamily:'Poppins'
                        }}
                      />);
                    })} 
                      
                 </div> 
                 
                <Button sx={{width:'346px',height:'36px',borderRadius:'8px',
                textTransform:'none',backgroundColor:'#1F6373',color:'white',fontSize:'16px',alignItems:'center',fontFamily:'Poppins',
                fontWeight:500,
                '&:hover': {
                  backgroundColor:'#D2E0E3',
                  color: '#1F6373',
                  border: '1px solid #1F6373',
                },
                
                '&:active': {
                
                  backgroundColor: '#1F6373',
                  color:'white',
                },
                }}>Validate</Button>
               
                <div style={{marginTop:'16px'}}>
                <Button sx={{border:'1px solid #1F6373',width:'346px',height:'36px',borderRadius:'8px', fontSize:'16px',fontFamily:'Poppins',fontWeight:500,textTransform:'none',color:'#1F6373',backgroundColor:'#D2E0E3',
                 '&:hover': {
                  backgroundColor:'#1F6373',
                  color: 'white',
                  border: '1px solid #1F6373',
                },
                
                '&:active': {
                
                  backgroundColor: '#1F6373',
                  color:'white',
                },
              }}
              
              >Resend</Button>
              </div>
              
              </div>
  
          </Box>
  
          </Modal>
   </div>
  )
}

export default Enterotp
