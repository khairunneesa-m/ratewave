import { Box, Button, Checkbox, FormControlLabel, FormLabel, IconButton, InputAdornment, Modal, OutlinedInput, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Signin from './signin';
function Quotes() {
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
            width: '676px',
            height:'504px',
            left:'345px',
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
             <div style={{ display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',alignContent:'center',marginBottom:'16px'}}>
                
                <Typography sx={{fontSize:'16px',fontWeight:600,color:'#454545',fontFamily:'Poppins'}}>Get the quotes</Typography>
             </div>
             <div style={{ display: 'flex', flexDirection:'column',paddingLeft:'28px',marginTop:'48px',
            paddingRight:'28px'
             }}>
                <div style={{ display: 'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:'16px'}}>
              <Typography sx={{textAlign:'left',fontSize:'14px',color:'#313131',fontFamily:'Poppins',fontWeight:400}}>Enter annual house hold income</Typography>
              <OutlinedInput
                        
                        id="outlined-adornment-password1"
            type='password'
            // value={values.currentPassword}
            // onChange={handleChange('currentPassword')}
            
                        sx={{width:'240px',borderRadius:'8px',fontSize:'12px',
                        height:'36px',border:'1px solid #CFC9C9', backgroundColor:'#F9F9F9',
                        fontFamily:'Poppins'
                        
                      }}
                      
                        /> 
                </div>
                <div style={{ display: 'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:'16px'}}>
              <Typography sx={{textAlign:'left',fontSize:'14px',color:'#313131',fontFamily:'Poppins',fontWeight:400}}>Line of credit payment</Typography>
              <OutlinedInput
                        
                        id="outlined-adornment-password1"
            type='text'
            placeholder='Enter amount'
            // value={values.currentPassword}
            // onChange={handleChange('currentPassword')}
            
                        sx={{width:'240px',borderRadius:'8px',fontSize:'10px',
                        height:'36px',border:'1px solid #CFC9C9', backgroundColor:'#F9F9F9',
                        fontFamily:'Poppins',color:'#313131'
                        
                      }}
                      
                        /> 
                </div>
                <div style={{ display: 'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:'48px'}}>
              <Typography sx={{textAlign:'left',fontSize:'14px',color:'#313131',fontFamily:'Poppins',fontWeight:400}}>Car loan payment</Typography>
              <OutlinedInput
                        
                        id="outlined-adornment-password1"
            type='text'
            placeholder='Enter amount'
            // value={values.currentPassword}
            // onChange={handleChange('currentPassword')}
            
                        sx={{width:'240px',borderRadius:'8px',fontSize:'10px',
                        height:'36px',border:'1px solid #CFC9C9', backgroundColor:'#F9F9F9',
                        fontFamily:'Poppins',color:'#313131'
                        
                      }}
                      
                        /> 
                </div>  
                <Typography sx={{fontSize:'14px',color:'#313131',paddingBottom:'22px',fontFamily:'Poppins',fontWeight:400}}>Do you have existing mortgage and will be continued ever after purchasing new lone ?</Typography>      
                    <div style={{display: 'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:'58px'}}>
                    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{"& .MuiRadio-root":{color:'#76DE24',},"& .Mui-checked":{color:'#76DE24 ! important',},}}
      >
        <FormControlLabel value="Monthly mortgages" control={<Radio  size = 'small' sx={{color:'#76DE24',"& .Mui-checked":{color:'#76DE24',},}}/>} label="Monthly mortgages" sx={{color:'#313131',fontSize:'16px',paddingRight:'60px',fontFamily:'Poppins',"& .MuiFormControlLabel-label":{fontFamily:'Poppins',fontSize:'14px'}}} />
        <FormControlLabel value="Property tax" control={<Radio size = 'small' sx={{color:'#76DE24',"& .Mui-checked":{color:'#76DE24',},}}/>} label="Property tax" sx={{color:'#313131',paddingRight:'60px',fontSize:'16px',fontFamily:'Poppins',"& .MuiFormControlLabel-label":{fontFamily:'Poppins',fontSize:'14px'}}}/>
        <FormControlLabel value="Condo fees" control={<Radio size = 'small' sx={{color:'#76DE24',"& .Mui-checked":{color:'#76DE24',},}}/>} label="Condo fees" sx={{color:'#313131',fontSize:'16px',fontFamily:'Poppins',"& .MuiFormControlLabel-label":{fontFamily:'Poppins',fontSize:'14px'}}}/>
        </RadioGroup>
                    </div>
              <div align="center" style={{marginTop:'48px',marginBottom:'36px'}}>
              <Button sx={{width:'344px',height:'36px',borderRadius:'8px',
              textTransform:'none',backgroundColor:'#1F6373',color:'white',fontSize:'16px',alignItems:'center',fontFamily:'Poppins',
              fontWeight:500,textTransform:'none',
              '&:hover': {
                backgroundColor:'#D2E0E3',
                color: '#1F6373',
                border: '1px solid #1F6373',
              },
              
              '&:active': {
              
                backgroundColor: '#1F6373',
                color:'white',
              },
              }}>Get the quotes</Button>
              </div>
              {/* <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'6px'}}> */}
              
              
            </div>
            
        </Box>

        </Modal>
    </div>
  )
}

export default Quotes