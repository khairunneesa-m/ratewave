import { Box, Button, Checkbox, FormControlLabel, FormLabel, IconButton, InputAdornment, Modal, OutlinedInput, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Signup from './signup';
import Signin from './signin';

function Reset() {
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
      setShowModal(!showModal);
      // handleClosemodal();
      
      
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
            width: '400px',
            height:'482px',
            left:'489px',
           top:'100px',
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
             <div style={{ display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',alignContent:'center',marginTop:'13px'}}>
             <Typography sx={{fontSize:'18px',fontWeight:600,color:'black',fontFamily:'Poppins',marginBottom:'48px'}}>Reset password</Typography>
             
                <Box sx={{height:'40px',width:'40px',borderRadius:'40px',border:'1px solid #1F6373',alignItems:'center',alignContent:'center',justifyContent:'center'}}>
                    <PersonIcon sx={{color:'#1F6373',height:'40px',width:'40px'}}/>
                </Box>
                <Typography sx={{fontSize:'14px',fontWeight:400,color:'#454545',fontFamily:'Poppins',textAlign:'center',marginTop:'8px'}}>Enter registered email below. We will email you instructions to reset your password.</Typography>
             </div>
             <div style={{ display: 'flex', flexDirection:'column',paddingLeft:'24px',
            paddingRight:'24px',
             paddingTop:'16px'}}>
              <Typography sx={{textAlign:'left',fontSize:'14px',color:'#939393',paddingBottom:'6px',fontFamily:'Poppins',fontWeight:500}}>Email</Typography>
              <OutlinedInput
                        type="text"
                        placeholder='olivia@untitledui.com'
                        sx={{width:'344px',borderRadius:'8px',fontSize:'12px',
                        height:'36px',border:'1px solid #CFC9C9', backgroundColor:'#F9F9F9',
                        fontFamily:'Poppins'
                        
                      }}
                    /> 
                
               
              <div style={{marginTop:'48px',marginBottom:'16px'}}>
              <Button sx={{width:'344px',height:'36px',borderRadius:'8px',
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
              }}>Send reset link</Button>
              </div>
              {/* <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'6px'}}> */}
             
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
            onClick={showModalHandler}
            >Return to Sign in</Button>
            </div>
            {showModal ? <Signin />: null }

        </Box>

        </Modal>
    </div>
  )
}

export default Reset