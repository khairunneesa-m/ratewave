import { Autocomplete, Box, Button, FormControl, InputAdornment, InputBase, InputLabel, MenuItem, OutlinedInput, Paper, Select, styled, Tab, Tabs, TextField, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import house from './house.png';
import React, { useState } from 'react';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import { House } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import NativeSelect from '@mui/material/NativeSelect';
import Header from './header';
import Footer from './footer';


function PenaltyCalculation() {
    const options=['Variable','Fixed','Open'];
    //const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState(0);
    const i = [1,2,3,4,5,6,7];
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          color:'#747272',
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #DADADA',
          fontSize: 12,
          fontFamily:'Poppins',
          paddingLeft: '3px',
          paddingRight: '3px',
          paddingTop:'1px',
          paddingBottom:'2px',
          height:'28px',
          width:'80px',
          alignItems:'center',
          boxSizing:'border-box',
          
          //transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          
          '&:focus': {
            borderRadius: 4,
            // borderColor: '#80bdff',
            //boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
      }));
  return (
    <div style={{overflow:'hidden'}}>
    <Header />
     <Box sx={{height:'calc(100vh - 75px)',overflowY:'auto'}}>
<div className='mainpart'>
  <div className='part1'>
      <Typography sx={{fontWeight:600,fontSize:'20px',color:'#494949',fontFamily:'Poppins'}}><span>Mortgage Comparison Calculator</span></Typography>
      <div style={{paddingLeft:'10px', display:'flex',flexDirection:'row',marginTop:'10px',alignItems:'center'}}>
          <Typography sx={{fontSize:'16px',width:'80px',fontFamily:'Poppins'}}>Start here</Typography>
          <ArrowForwardIcon sx={{marginLeft:'12px',marginRight:'56px'}}/>
          <div style={{width:'656px',display:'flex',gap:'10px'}}>
          
    <OutlinedInput
      
      type="text"
      placeholder='Asking Price'
      
      sx={{width:'328px',borderRadius:'4px',
  height:'40px',border:'1px solid #F5F5F5;',boxSizing:'border-box',marginLeft:'10px',fontSize:'12px',fontFamily:'Poppins'  }}
    />
    
    <OutlinedInput
      
      type="text"
      placeholder='Location'
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
          
        </InputAdornment>
      }
      sx={{width:'328px',borderRadius:'4px',fontSize:'12px',fontFamily:'Poppins',
  height:'40px',border:'1px solid #F5F5F5;',boxSizing:'border-box'  }}
    />
   
  </div>
    
      </div>
      <Typography sx={{fontSize:'16px',marginTop:'17px',paddingLeft:'10px',fontFamily:'Poppins'}}>Input parameters</Typography>
      <div style={{paddingLeft:'203px',display:'flex',flexDirection:'row',alignItems:'center',gap:'38px',alignContent:'center',marginTop:'2px'}}>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 1</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 2</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 3</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 4</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 5</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 6</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 7</Typography>
      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{width:'176px',display:'flex',flexDirection:'column',paddingTop:'7px',marginTop:'8px',paddingLeft:'10px',gap:'16px',borderRight:'1px solid #F6F6F6'}}>
            <Box sx={{width:'130x',height:'28px',alignItems:'center'}}>
              <Typography sx={{fontSize:'12px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Initial Payment</Typography>
            </Box>
            <Box sx={{width:'130px',height:'28px',alignItems:'center'}}>
              <Typography sx={{fontSize:'12px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Type</Typography>
            </Box>
              <Box sx={{width:'130px',height:'28px',alignItems:'center'}}>
              <Typography sx={{fontSize:'12px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Term</Typography>
              </Box>
              <Box sx={{width:'130px',height:'28px',alignItems:'center'}}>
                <Typography sx={{fontSize:'12px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Interest Rate (%) </Typography>
              </Box>
              <Box sx={{width:'130px',height:'28px',alignItems:'center'}}>
                <Typography sx={{fontSize:'12px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Amortization Period</Typography>
              </Box>
               <Box sx={{width:'130px',height:'28px',alignItems:'center'}}>
                <Typography sx={{fontSize:'12px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Payment Frequency</Typography>
              </Box>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
              <div style={{display:'flex',flexDirection:'row',paddingLeft:'16px',paddingTop:'8px',gap:'16px',alignItems:'center'}}>
             { i.map(item => {
              return(
              <OutlinedInput
                  type="text"
                  placeholder='0'
                  sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                  height:'28px',textAlign:'center', border:'1px solid #DADADA',
                  "& .MuiOutlinedInput-input":{textAlign:'center'},
                }}
              /> 
              );
              })}
              
              </div>
              <div style={{display:'flex',flexDirection:'row',paddingLeft:'16px',paddingTop:'16px',gap:'16px',alignItems:'center'}}>
                 
                  
 
  { i.map(item => {
              return(
                // <FormControl sx={{width:'80px',height:'28px', }} variant="standard" >
  <NativeSelect
    id="demo-customized-select-native"
    defaultValue={10}
  //   value={age}
    onChange={handleChange}
    input={<BootstrapInput />}
    sx={{"& .MuiNativeSelect-nativeInput":{paddingRight:0,backgroundColor:'red',color:'white'},}}
  >
    {/* <option aria-label="None" value="" /> */}
    <option value={10}>Variable</option>
    <option value={20}>Fixed</option>
    <option value={30}>Open</option>
  </NativeSelect>
// </FormControl>
              );})}

              </div>
              <div style={{display:'flex',flexDirection:'row',paddingLeft:'16px',paddingTop:'16px',gap:'16px',alignItems:'center'}}>
              { i.map(item => {
              return(
              <OutlinedInput
                  type="text"
                  placeholder='0'
                  sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                  height:'28px',textAlign:'center', border:'1px solid #DADADA',
                  "& .MuiOutlinedInput-input":{textAlign:'center'},
                }}
              /> 
              );
              })}
              
              
              </div>
              <div style={{display:'flex',flexDirection:'row',paddingLeft:'16px',paddingTop:'16px',gap:'16px',alignItems:'center'}}>
              { i.map(item => {
              return(
              <OutlinedInput
                  type="text"
                  placeholder='0'
                  sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                  height:'28px',textAlign:'center', border:'1px solid #DADADA',
                  "& .MuiOutlinedInput-input":{textAlign:'center'},
                }}
              /> 
              );
              })}
              
              
              </div>
              <div style={{display:'flex',flexDirection:'row',paddingLeft:'16px',paddingTop:'16px',gap:'16px',alignItems:'center'}}>
              { i.map(item => {
              return(
              <OutlinedInput
                  type="text"
                  placeholder='0'
                  sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                  height:'28px',textAlign:'center', border:'1px solid #DADADA',
                  "& .MuiOutlinedInput-input":{textAlign:'center'},
                }}
              /> 
              );
              })}
              
              
              </div>
              <div style={{display:'flex',flexDirection:'row',paddingLeft:'16px',paddingTop:'16px',gap:'16px',alignItems:'center'}}>
              { i.map(item => {
              return(
                <FormControl sx={{width:'80px',height:'28px', }} variant="standard" >
  <NativeSelect
    id="demo-customized-select-native"
    defaultValue={10}
  //   value={age}
    onChange={handleChange}
    input={<BootstrapInput />}
    sx={{"& .MuiNativeSelect-nativeInput":{paddingRight:'0px'},}}
  >
    {/* <option aria-label="None" value="" /> */}
    <option value={10}>Monthly</option>
    <option value={20}>Bi-weekly</option>
    
  </NativeSelect>
</FormControl>
              );})}  
              </div>
          </div>
      </div>
      <div style={{display:'flex',flexDirection:'row',gap:'27px',marginTop:'42px'}}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
      TabIndicatorProps={{style: {background:'black'}}}
      sx={{
          " .MuiTabs-flexContainer":{minHeight:0,alignItems:'center',
      "& .Mui-selected": { color: 'black', borderColor: 'black' }, "& .MuiTabs-indicator": { backgroundColor: 'black' },
      },}}
      >
<Tab label="Monthly payment" sx={{textTransform:'none',fontFamily:'Poppins'}}/>
<Tab label="Calculate Penalty on cancellation" sx={{textTransform:'none',fontFamily:'Poppins'}} />

</Tabs>
          {/* <Typography sx={{fontSize:'14px',marginTop:'30px',color:'#414141',borderBottom:'1px solid black'}}>Monthly payment</Typography>
          <Typography sx={{fontSize:'14px',marginTop:'30px',color:'#414141'}}>Calculate Penalty on cancellation</Typography> */}
      </div>
      <div style={{paddingLeft:'203px',display:'flex',flexDirection:'row',alignItems:'center',gap:'38px',alignContent:'center',marginTop:'20px'}}>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 1</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 2</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 3</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 4</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 5</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 6</Typography>
          <Typography sx={{fontSize:'10px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Mortgage 7</Typography>
      </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{width:'176px',display:'flex',flexDirection:'column',marginTop:'20px',paddingLeft:'10px',gap:'16px',borderRight:'1px solid #F6F6F6'}}>
                <Box sx={{width:'130x',height:'28px',alignItems:'center'}}>
                    <Typography sx={{fontSize:'12px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Year & Month Cancelling</Typography>
                </Box>
                <Box sx={{width:'130x',height:'28px',alignItems:'center'}}>
                    <Typography sx={{fontSize:'12px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Penalty</Typography>
                </Box>
                <Box sx={{width:'130x',height:'28px',alignItems:'center'}}>   
                    <Typography sx={{fontSize:'12px',fontWeight:400,color:'#747272',fontFamily:'Poppins'}}>Calculated penalty</Typography>
                </Box>
                </div> 
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row',paddingLeft:'16px',paddingTop:'14px',gap:'16px',alignItems:'center'}}>
                    { i.map(item => {
                    return(
                    <OutlinedInput
                        type="text"
                        placeholder='12m'
                        sx={{width:'80px',borderRadius:'4px',fontSize:'12px',fontFamily:'Poppins',
                        height:'28px',textAlign:'center', border:'1px solid #DADADA',
                        "& .MuiOutlinedInput-input":{textAlign:'center'},
                      }}
                    /> 
                    );
                    })}
                    
                   
                    </div>
                    <div style={{display:'flex',flexDirection:'row',paddingLeft:'16px',paddingTop:'16px',gap:'16px',alignItems:'center'}}>
                    <OutlinedInput
                        type="text"
                        placeholder='5000'
                        sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                        height:'28px',border:'1px solid #DADADA' ,
                        "& .MuiOutlinedInput-input":{textAlign:'center'},
                      }}
                    /> 
                    <OutlinedInput
                        type="text"
                        placeholder='5000'
                        sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                        height:'28px',border:'1px solid #DADADA',
                        "& .MuiOutlinedInput-input":{textAlign:'center'},
                      }}
                    />  
                    <OutlinedInput
                        type="text"
                        placeholder='0'
                        sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                        height:'28px',border:'1px solid #DADADA',
                        "& .MuiOutlinedInput-input":{textAlign:'center'},
                      }}
                    />  
                    <OutlinedInput
                        type="text"
                        placeholder='7000'
                        sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                        height:'28px',border:'1px solid #DADADA',
                        "& .MuiOutlinedInput-input":{textAlign:'center'},
                      }}
                    />  
                    <OutlinedInput
                        type="text"
                        placeholder='5000'
                        sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                        height:'28px',border:'1px solid #DADADA',
                        "& .MuiOutlinedInput-input":{textAlign:'center'},
                      }}
                    />  
                    <OutlinedInput
                        type="text"
                        placeholder='5000'
                        sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                        height:'28px',border:'1px solid #DADADA',
                        "& .MuiOutlinedInput-input":{textAlign:'center'},
                      }}
                    />  
                    <OutlinedInput
                        type="text"
                        placeholder='0'
                        sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                        height:'28px',border:'1px solid #DADADA',
                        "& .MuiOutlinedInput-input":{textAlign:'center'},
                      }}
                    />   
                    </div>
                    <div style={{display:'flex',flexDirection:'row',paddingLeft:'16px',paddingTop:'16px',gap:'16px',alignItems:'center'}}>
                    { i.map(item => {
                    return(
                    <OutlinedInput
                        type="text"
                        placeholder='0'
                        sx={{width:'80px',borderRadius:'4px',fontSize:'12px',
                        height:'28px',textAlign:'center', border:'1px solid #DADADA',
                        "& .MuiOutlinedInput-input":{textAlign:'center'},
                      }}
                    /> 
                    );
                    })}
                    
                    </div>
                   
                    </div>
                </div>
        </div>
        <div className='part2'>
            {/* <div style={{width:'154px',display:'flex'}}>
            </div> */}
            {/* <img src={house} /> */}
            <Typography sx={{width:'215px',fontWeight:700,fontSize:'40px',color:'#747272',fontFamily:'Poppins'}}>
                GET A GREAT 
            </Typography>
            <Typography sx={{width:'215px',fontWeight:700,fontSize:'40px',color:'#005CB2',fontFamily:'Poppins'}}>
                MORTGAGE 
            </Typography>
            <Typography sx={{width:'215px',fontWeight:700,fontSize:'40px',color:'#747272',fontFamily:'Poppins'}}>
                RATE
            </Typography>
            <Typography sx={{width:'425px',fontSize:'12px',marginTop:'38px',fontFamily:'Poppins'}}>
            Whether you are applying for a new mortgage or thinking about switching lenders, This comparison calculator can help you explore and pick the mortgage option that’s right for you. Use this Mortgage comparison tool to compare mortgage platfrom top lenders and find the one that best suits your needs.
            </Typography>
            <div style={{width:'332px',display:'flex',flexDirection:'row',gap:'18px',marginTop:'26px'}}>
                <Button startIcon={<MailOutlineIcon />} sx={{width:'149px',heigt:'32px',borderRadius:'4px',color:'white',backgroundColor:'#005CB2',textTransform:'none',fontFamily:'Poppins'}}>Send to Email</Button>
                <Button startIcon={<FileDownloadOutlinedIcon />} sx={{width:'177px',heigt:'32px',borderRadius:'4px',color:'white',backgroundColor:'#005CB2',textTransform:'none',fontFamily:'Poppins'}}>Download Result</Button>
            </div>
            <Typography sx={{fontSize:'14px',fontWeight:400,color:'#103AD0',marginTop:'14px',fontFamily:'Poppins'}}>Do you want more offers ?</Typography>
        </div>
    </div>
    <Footer />
         </Box>
     </div>    
  )
}

export default PenaltyCalculation;