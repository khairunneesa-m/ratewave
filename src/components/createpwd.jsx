import { Box, Button, Checkbox, FormControlLabel, FormLabel, IconButton, InputAdornment, Modal, OutlinedInput, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Signup from './signup';
import Signin from './signin';

function Createpwd() {
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
    const checkPasswordSame = () => {
      if (values.currentPassword !== values.newPassword1) {
        setError("Your password entered is incorrect. Please try again.")
      }else{
        setError(null)
      }
    }
  
    function onSave(){
      checkPasswordSame()
    }
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
            width: '408px',
            height:'420px',
            left:'483px',
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
                
                <Typography sx={{fontSize:'18px',fontWeight:600,color:'black',fontFamily:'Poppins'}}>Create new password</Typography>
             </div>
             <div style={{ display: 'flex', flexDirection:'column',paddingLeft:'32px',marginTop:'48px',
            paddingRight:'32px'
             }}>
              <Typography sx={{textAlign:'left',fontSize:'14px',color:'#212427',paddingBottom:'6px',fontFamily:'Poppins',fontWeight:500}}>Create new Password</Typography>
              <OutlinedInput
                        
                        id="outlined-adornment-password1"
            type={showPasswordValues.currentPassword ? 'text' : 'password'}
            value={values.currentPassword}
            onChange={handleChange('currentPassword')}
            
                        sx={{width:'344px',borderRadius:'8px',fontSize:'12px',
                        height:'36px',border:'1px solid #CFC9C9', backgroundColor:'#F9F9F9',
                        fontFamily:'Poppins'
                        
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword("currentPassword")}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        > 
                         {values.currentPassword===''?null:showPasswordValues.currentPassword ?   <Visibility />:<VisibilityOff />}
                       </IconButton>
                       </InputAdornment>
            }
            />
                
                <Typography sx={{textAlign:'left',fontSize:'14px',color:'#212427',paddingBottom:'6px',paddingTop:'16px',fontFamily:'Poppins',fontWeight:500}}>Confirm password</Typography>
              <OutlinedInput
                        
                        id="outlined-adornment-password"
            type={showPasswordValues.newPassword1 ? 'text' : 'password'}
            value={values.newPassword1}
            onChange={handleChange('newPassword1')}
            
                        sx={{width:'344px',borderRadius:'8px',fontSize:'12px',
                        height:'36px',border:'1px solid #CFC9C9', backgroundColor:'#F9F9F9',
                        fontFamily:'Poppins'
                        
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword("newPassword1")}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        > 
                         {values.newPassword1===''?null:showPasswordValues.newPassword1 ? <Visibility/>:<VisibilityOff />}
                       </IconButton>
                       </InputAdornment>
            }
            />
             {
          error && <Typography variant='body' sx={{mt:'4px',fontSize:'12px',fontWeight:'400px',color:'red'}}>{error}</Typography>
        }
                    
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
              }} onClick={onSave}>Save password</Button>
              </div>
              {/* <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'6px'}}> */}
              
              <Button sx={{border:'1px solid #1F6373',width:'344px',height:'36px',borderRadius:'8px', fontSize:'16px',fontFamily:'Poppins',fontWeight:500,textTransform:'none',color:'#1F6373',backgroundColor:'#D2E0E3',
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
            >Return to sign in</Button>
            </div>
            {showModal ? <Signin />: null }

        </Box>

        </Modal>
    </div>
  )
}

export default Createpwd