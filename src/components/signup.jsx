import { Box, Button, FormControlLabel, FormLabel, IconButton, InputAdornment, Modal, OutlinedInput, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Visibility, VisibilityOff } from '@mui/icons-material';
function Signup() {
    const [openModalup, setOpenmodalup]=useState(true);
    const handleOpenmodal1 = () => setOpenmodalup(true);
    const handleClosemodal1 = () => setOpenmodalup(false);
    const [values, setValues] = useState({
      amount: '',
      currentPassword: '',
      newPassword1: '',
      newPassword2: '',
      weight: '',
      weightRange: ''
    });
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
    <div 
    style={{overflowY:'auto'}} 
    >
        <Modal
        open = {openModalup}
        onClose={handleClosemodal1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

      
      <Box
          sx={{
            position: 'absolute',
            width: '392px',
            height:'672px',
            left:'487px',
          //  top:'52px',
            bgcolor: '#FFFF',
            // paddingLeft:'28px',
            // paddingRight:'28px',
            paddingBottom:'36px',
            // paddingTop:'1px', 
            
            //border: '1px solid black',
            borderRadius:'8px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            alignItems:'center',
            justifyContent:'center',
            alignContent:'center',
            overflowY: 'auto'
            // boxShadow: (theme) => theme.shadows[5],
            // p: 4,
          }}
        >
          <div style={{ display: 'flex', flexDirection:'row-reverse',paddingTop:'12px',paddingRight:'12px' }}>
            <IconButton sx={{ padding: '0px' }} onClick={handleClosemodal1} >
              < CancelOutlinedIcon sx={{ color: '#606060', width: '24px', height: '24px' }}
              
               >
              </CancelOutlinedIcon>
            </IconButton>
            </div>
             <div style={{ display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                <Box sx={{height:'40px',width:'40px',borderRadius:'40px',border:'1px solid #1F6373',alignItems:'center',alignContent:'center',justifyContent:'center'}}>
                    <PersonIcon sx={{color:'#1F6373',height:'40px',width:'40px'}}/>
                </Box>
                <Typography sx={{fontSize:'18px',fontWeight:600,color:'black',fontFamily:'Poppins'}}>Sign up</Typography>
             </div>
             <div style={{ display: 'flex', flexDirection:'column',
             paddingLeft:'28px',paddingRight:'28px',paddingTop:'48px'
             }}>
              <Typography sx={{textAlign:'left',fontSize:'14px',color:'#1F6373',paddingBottom:'4px',fontFamily:'Poppins'}}>Username</Typography>
              <OutlinedInput
                        type="text"
                      
                        sx={{width:'344px',borderRadius:'8px',fontSize:'16px',color:'#212427',
                        height:'36px',border:'1px solid #D2D2D2', backgroundColor:'#F9F9F9'
                        
                        
                      }}
                    /> 
                <Typography sx={{textAlign:'left',fontSize:'14px',color:'#1F6373',paddingBottom:'4px',paddingTop:'16px',fontFamily:'Poppins'}}>Registered Email id</Typography>
              <OutlinedInput
                        
                        type="email"
                        sx={{width:'344px',borderRadius:'8px',fontSize:'16px',color:'#212427',
                        height:'36px',border:'1px solid #D2D2D2', backgroundColor:'#F9F9F9',alignItems:'center'
                        
                      }}
                    /> 
                <Typography sx={{textAlign:'left',fontSize:'14px',color:'#1F6373',paddingBottom:'4px',paddingTop:'16px',fontFamily:'Poppins'}}>Mobile Number</Typography>
              <OutlinedInput
                        
                        type="password"
                        sx={{width:'344px',borderRadius:'8px',fontSize:'16px',color:'#212427',
                        height:'36px',border:'1px solid #D2D2D2', backgroundColor:'#F9F9F9',alignItems:'center'
                        
                      }}
                    /> 
              <Typography sx={{textAlign:'left',fontSize:'14px',color:'#1F6373',paddingBottom:'4px',paddingTop:'16px',fontFamily:'Poppins'}}>Create Password</Typography>
              <OutlinedInput
                        
                        // type="password"
                        sx={{width:'344px',borderRadius:'8px',fontSize:'16px', color:'#212427',
                        height:'36px',border:'1px solid #D2D2D2', backgroundColor:'#F9F9F9',alignItems:'center'
                        
                      }}
                      id="outlined-adornment-password"
            type={showPasswordValues.currentPassword ? 'text' : 'password'}
            value={values.currentPassword}
            onChange={handleChange('currentPassword')}
            
                      //   sx={{width:'344px',borderRadius:'8px',fontSize:'12px',
                      //   height:'36px',border:'1px solid #CFC9C9', backgroundColor:'#F9F9F9'
                        
                      // }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword("currentPassword")}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        /> 
                         {values.currentPassword===''?null:showPasswordValues.currentPassword ?   <Visibility />:<VisibilityOff />}
                       </InputAdornment>
            }

                    /> 
                    
              
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'19px',paddingLeft:'10px',marginTop:'16px',marginBottom:'48px'}}>
              <Typography sx={{textAlign:'left',fontSize:'16px',color:'#626262',fontFamily:'Poppins'}}>Are you an agent?</Typography>
              <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="No" control={<Radio  size = 'small' />} label="No" sx={{color:'#626262',fontSize:'16px',fontFamily:'Poppins',"& .MuiFormControlLabel-label":{fontFamily:'Poppins',fontSize:'16px'}}} />
        <FormControlLabel value="Yes" control={<Radio size = 'small' sx={{color:'#626262',"& .Mui-checked":{color:'#626262',},}}/>} label="Yes" sx={{color:'#626262',fontSize:'16px',fontFamily:'Poppins',"& .MuiFormControlLabel-label":{fontFamily:'Poppins',fontSize:'16px'}}}/>
        </RadioGroup>
        </div>
              <Button sx={{width:'346px',height:'36px',borderRadius:'8px',
              textTransform:'none',backgroundColor:'#1F6373',color:'white',fontSize:'16px',alignItems:'center',fontFamily:'Poppins',fontWeight:500,
              '&:hover': {
                backgroundColor:'#D2E0E3',
                color: '#1F6373',
                border: '1px solid #1F6373',
              },
              
              '&:active': {
              
                backgroundColor: '#1F6373',
                color:'white',
              },
              }}>Sign up</Button>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'20px','marginTop':'16px'}}>
              <Typography sx={{fontSize:'16px',color:'#626262',fontFamily:'Poppins'}}>Already have an account ?</Typography><a href='#' style={{fontSize:'16px',color:'#198CCD',fontFamily:'Poppins',fontWeight:500}}>Sign in</a>
              </div>
            </div>

        </Box>

        </Modal>
    </div>
  )
}

export default Signup