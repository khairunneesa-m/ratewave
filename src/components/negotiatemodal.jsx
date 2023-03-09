import { Box, Button, Checkbox, FormControlLabel, FormLabel, IconButton, InputAdornment, InputBase, Modal, NativeSelect, OutlinedInput, Radio, RadioGroup, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


function Negotiatemodal() {
    const [openModal, setOpenmodal]=useState(true);
    const handleOpenmodal = () => setOpenmodal(true);
    const handleClosemodal = () => setOpenmodal(false);
    const [showModal,setShowModal] = useState(false);
    const [value, setValue] = useState(0);
    function showModalHandler() {
        setShowModal(!showModal);
      }
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          color: '#626262',
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #DADADA',
          fontSize: 12,
          fontFamily: 'Poppins',
          paddingLeft: '14px',
          paddingRight: '14px',
          paddingTop: '1px',
          paddingBottom: '2px',
          height: '28px',
          width: '134px',
          alignItems: 'center',
          boxSizing: 'border-box',
    
          //transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
    
          '&:focus': {
            borderRadius: 4,
            // borderColor: '#80bdff',
            //boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
        // "& .MuiNativeSelect-nativeInput":{paddingRight:'0px'},
        "& .MuiNativeSelect-select": { paddingRight: '8px !important' },
      }));
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
            width: '790px',
            height:'600px',
            left:'288px',
           top:'25px',
            bgcolor: '#FFFF',
            paddingLeft:'42px',
            //paddingRight:'28px',
            paddingBottom:'24px',
            // paddingTop:'12px', 
            
            //border: '1px solid black',
            borderRadius:'12px',
            // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            // alignItems:'center',
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
             <div style={{ display: 'flex', flexDirection:'column',marginTop:'48px'}}>
                
                <Typography sx={{fontSize:'20px',fontWeight:700,color:'#454545',fontFamily:'Poppins'}}>Request a revised quote</Typography>
             </div>
             
             <div style={{ display: 'flex', flexDirection: 'row',gap:'22px',height:'390px',paddingRight:'42px' }}>
              {/* <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'6px'}}> */}
              <div style={{ width: '178px', height: '365px', display: 'flex', flexDirection: 'column', marginTop: '72px', gap: '16px'}}>
                <Box sx={{ width: '160px', height: '28px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Initial Payment</Typography>
                    
                  </Box>
                  <Box sx={{ width: '160px', height: '28px', alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row'}}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Monthly payment</Typography>
                    
                  </Box>
                  <Box sx={{ width: '160px', height: '28px', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Type</Typography>
                    
                  </Box>
                  <Box sx={{ width: '160px', height: '28px', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Term</Typography>
                    
                  </Box>
                  <Box sx={{ width: '160px', height: '28px', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Interest Rate (%) </Typography>
                    
                  </Box>
                  <Box sx={{ width: '160px', height: '28px', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Amortization Period</Typography>
                    
                  </Box>
                  <Box sx={{ width: '160px', height: '28px', alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Payment Frequency</Typography>
                    
                  </Box>
                  
                </div>
                <div style={{
                        width: '158px', height: '366px', display: 'flex', flexDirection: 'column',
                        paddingTop: '18px', paddingLeft: '12px', paddingRight: '12px', paddingBottom: '20px', backgroundColor: 'white',
                        border: '1px solid #CFC9C9', gap: '16px', marginTop: '16px', borderRadius: '8px'
                      }}>
                        {/* <div style={{ display:'flex',flexDirection:'row',gap:'23px',alignItems:'center',justifyContent:'center'}}> */}
                        <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 400, color: '#626262' }}>Mortgage 1</Typography>
                        {/* <DeleteOutlineOutlinedIcon sx={{height:'10px',width:'10px'}}/>
                            </div>  */}
                        <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px', color: '#313131',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                         <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px', color: '#313131',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                        <NativeSelect
                          id="demo-customized-select-native"
                          defaultValue={10}
                          //   value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          sx={{
                            "& .MuiNativeSelect-nativeInput": { paddingRight: '0px' },
                            paddingRight: '0px'
                          }}
                        >
                          {/* <option aria-label="None" value="" /> */}
                          {/* <option></option> */}
                          <option value={10} >Variable</option>
                          <option value={20}>Fixed</option>
                          <option value={30}>Open</option>
                        </NativeSelect>
                        <NativeSelect
                          id="demo-customized-select-native"
                          defaultValue={10}
                          //   value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          sx={{
                            "& .MuiNativeSelect-nativeInput": { paddingRight: '0px' },
                            paddingRight: '0px'
                          }}
                        >
                          {/* <option aria-label="None" value="" /> */}
                          {/* <option></option> */}
                          <option value={10} sx={{ color: '#626262' }}>1 Month</option>
                          <option value={20}>2 Months</option>
                          <option value={30}>3 Months</option>
                          <option value={20}>4 Months</option>
                          <option value={30}>5 Months</option>
                          <option value={20}>6 Months</option>
                          <option value={30}>7 Months</option>
                          <option value={20}>8 Months</option>
                          <option value={30}>9 Months</option>
                          <option value={30}>10 Months</option>
                          <option value={20}>11 Months</option>
                          <option value={30}>12 Months</option>

                        </NativeSelect>
                        <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                        <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                        <NativeSelect
                          id="demo-customized-select-native"
                          defaultValue={10}
                          //   value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          sx={{
                            "& .MuiNativeSelect-nativeInput": { paddingRight: '0px' },
                            paddingRight: '0px'
                          }}
                        >
                          {/* <option aria-label="None" value="" /> */}
                          {/* <option></option> */}
                          <option value={10}>Monthly</option>
                          <option value={20}>Bi-weekly</option>
                        </NativeSelect>
                        
                      </div>
                      <div style={{
                        width: '158px', height: '366px', display: 'flex', flexDirection: 'column',
                        paddingTop: '20px', paddingLeft: '12px', paddingRight: '12px', paddingBottom: '20px', backgroundColor: 'white',
                        border: '1px solid #CFC9C9', gap: '16px', marginTop: '18px', borderRadius: '8px'
                      }}>
                        {/* <div style={{ display:'flex',flexDirection:'row',gap:'23px',alignItems:'center',justifyContent:'center'}}> */}
                        <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 400, color: '#626262' }}>Received</Typography>
                        {/* <DeleteOutlineOutlinedIcon sx={{height:'10px',width:'10px'}}/>
                            </div>  */}
                        <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px', color: '#313131',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                         <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px', color: '#313131',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                        <NativeSelect
                          id="demo-customized-select-native"
                          defaultValue={10}
                          //   value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          sx={{
                            "& .MuiNativeSelect-nativeInput": { paddingRight: '0px' },
                            paddingRight: '0px'
                          }}
                        >
                          {/* <option aria-label="None" value="" /> */}
                          {/* <option></option> */}
                          <option value={10} >Variable</option>
                          <option value={20}>Fixed</option>
                          <option value={30}>Open</option>
                        </NativeSelect>
                        <NativeSelect
                          id="demo-customized-select-native"
                          defaultValue={10}
                          //   value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          sx={{
                            "& .MuiNativeSelect-nativeInput": { paddingRight: '0px' },
                            paddingRight: '0px'
                          }}
                        >
                          {/* <option aria-label="None" value="" /> */}
                          {/* <option></option> */}
                          <option value={10} sx={{ color: '#626262' }}>1 Month</option>
                          <option value={20}>2 Months</option>
                          <option value={30}>3 Months</option>
                          <option value={20}>4 Months</option>
                          <option value={30}>5 Months</option>
                          <option value={20}>6 Months</option>
                          <option value={30}>7 Months</option>
                          <option value={20}>8 Months</option>
                          <option value={30}>9 Months</option>
                          <option value={30}>10 Months</option>
                          <option value={20}>11 Months</option>
                          <option value={30}>12 Months</option>

                        </NativeSelect>
                        <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                        <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                        <NativeSelect
                          id="demo-customized-select-native"
                          defaultValue={10}
                          //   value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          sx={{
                            "& .MuiNativeSelect-nativeInput": { paddingRight: '0px' },
                            paddingRight: '0px'
                          }}
                        >
                          {/* <option aria-label="None" value="" /> */}
                          {/* <option></option> */}
                          <option value={10}>Monthly</option>
                          <option value={20}>Bi-weekly</option>
                        </NativeSelect>
                        
                      </div>
                      <div style={{
                        width: '158px', height: '366px', display: 'flex', flexDirection: 'column',
                        paddingTop: '20px', paddingLeft: '12px', paddingRight: '12px', paddingBottom: '20px', backgroundColor: 'white',
                        border: '1px solid #CFC9C9', gap: '16px', marginTop: '18px', borderRadius: '8px'
                      }}>
                        {/* <div style={{ display:'flex',flexDirection:'row',gap:'23px',alignItems:'center',justifyContent:'center'}}> */}
                        <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 400, color: '#626262' }}>Requirement</Typography>
                        {/* <DeleteOutlineOutlinedIcon sx={{height:'10px',width:'10px'}}/>
                            </div>  */}
                        <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px', color: '#313131',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                         <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px', color: '#313131',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                        <NativeSelect
                          id="demo-customized-select-native"
                          defaultValue={10}
                          //   value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          sx={{
                            "& .MuiNativeSelect-nativeInput": { paddingRight: '0px' },
                            paddingRight: '0px'
                          }}
                        >
                          {/* <option aria-label="None" value="" /> */}
                          {/* <option></option> */}
                          <option value={10} >Variable</option>
                          <option value={20}>Fixed</option>
                          <option value={30}>Open</option>
                        </NativeSelect>
                        <NativeSelect
                          id="demo-customized-select-native"
                          defaultValue={10}
                          //   value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          sx={{
                            "& .MuiNativeSelect-nativeInput": { paddingRight: '0px' },
                            paddingRight: '0px'
                          }}
                        >
                          {/* <option aria-label="None" value="" /> */}
                          {/* <option></option> */}
                          <option value={10} sx={{ color: '#626262' }}>1 Month</option>
                          <option value={20}>2 Months</option>
                          <option value={30}>3 Months</option>
                          <option value={20}>4 Months</option>
                          <option value={30}>5 Months</option>
                          <option value={20}>6 Months</option>
                          <option value={30}>7 Months</option>
                          <option value={20}>8 Months</option>
                          <option value={30}>9 Months</option>
                          <option value={30}>10 Months</option>
                          <option value={20}>11 Months</option>
                          <option value={30}>12 Months</option>

                        </NativeSelect>
                        <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                        <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                        //   onChange={handleChange1}
                          sx={{
                            width: '100%', borderRadius: '4px', fontSize: '12px',
                            height: '28px', textAlign: 'center', border: '1px solid #DADADA',
                            "& .MuiOutlinedInput-input": { textAlign: 'left' },
                          }}
                        />
                        <NativeSelect
                          id="demo-customized-select-native"
                          defaultValue={10}
                          //   value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                          sx={{
                            "& .MuiNativeSelect-nativeInput": { paddingRight: '0px' },
                            paddingRight: '0px'
                          }}
                        >
                          {/* <option aria-label="None" value="" /> */}
                          {/* <option></option> */}
                          <option value={10}>Monthly</option>
                          <option value={20}>Bi-weekly</option>
                        </NativeSelect>
                        
                      </div>
                </div>
                <div align="right" style={{paddingRight:'42px',marginTop:'24px'}}>
              <Button sx={{width:'244px',height:'36px',borderRadius:'8px',
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
              }}>Request</Button>
              </div>
              
        
            
        </Box>

        </Modal>
    </div>
  )
}

export default Negotiatemodal
