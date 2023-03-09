import { Box, Button, IconButton, Modal, OutlinedInput, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
function Modalsendtoemail() {
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
            width: '522px',
            height:'400px',
            left:426,
            top:194,
            bgcolor: '#FFFF',
            
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
            <div style={{paddingLeft:'36px',paddingRight:'36px',paddingBottom:'34px'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:'34px'}}>
            <Typography sx={{fontSize:'14px',fontWeight:'400px',color:'#606060'}}>
            <span>
            Do you want connnect to the agent?
          </span>
          </Typography>
          <Box sx={{width:'160px',display:'flex',height:'32px',borderRadius:'8px',border:'1px solid #606060',paddingLeft:'6px',paddingRight:'6px',gap:'4px',alignItems:'center'}}>
          <ToggleButtonGroup
      color="primary"
      value={alignment1}
      exclusive
      onChange={handleChange1}
      aria-label="Platform"
      sx={{width:'160px',
      // "& .MuiToggleButtonGroup-grouped":{borderLeft:'1px solid rgba(0, 0, 0, 0',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'},
      // "& .MuiToggleButtonGroup-root" : {borderLeft:'1px solid rgba(0, 0, 0, 0',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'},
    }}
    >
      <ToggleButton variant="text" value="disable" sx={{width:'72px',height:'24px',fontSize:'14px',marginRight:'4px',
      // borderRadius:'4px', backgroundColor:'#F00707',textTransform:'capitalize',marginRight:'4px',
        
          "&.MuiToggleButtonGroup-grouped":
              { borderRadius: '8px !important',border:'1px solid rgba(0,0,0,0)' },
          "&.Mui-selected, &.Mui-selected:hover": { color: '#ffffff', backgroundColor: '#CE3932' },
          width: '72px', height: '24px', borderRadius: '8px',
          backgroundColor: 'white', textTransform: 'capitalize'
    }}>No</ToggleButton>
      <ToggleButton variant="text" value="enable" sx={{width:'72px',height:'24px',fontSize:'14px',
      // borderRadius:'8px',backgroundColor:'white',textTransform:'capitalize',color:'#606060',
        "&.MuiToggleButtonGroup-grouped":
        { borderRadius: '8px !important',border:'1px solid rgba(0, 0, 0, 0)'},
    "&.Mui-selected, &.Mui-selected:hover": { color: '#ffffff', backgroundColor: '#00AC1C' },
    width: '72px', height: '24px', borderRadius: '8px',
    backgroundColor: 'white', textTransform: 'capitalize'
    }}>Yes</ToggleButton>
      
    </ToggleButtonGroup>
    </Box>
    </div>
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',paddingTop:'34px',justifyContent:'space-between'}}>
            <Typography sx={{textAlign:'center',fontSize:'14px',fontWeight:'400px',color:'#606060'}}>
            <span>
            Do you want subscribe our news letter?
          </span>
          </Typography>
          <Box sx={{width:'160px',height:'32px',borderRadius:'8px',border:'1px solid #606060',display:'flex',alignItems:'center',paddingLeft:'6px',paddingRight:'6px'}}>
          <ToggleButtonGroup
      color="primary"
      value={alignment2}
      exclusive
      onChange={handleChange2}
      aria-label="Platform"
      sx={{width:'160px'}}
    >
      <ToggleButton value="disable" sx={{width:'72px',height:'24px',borderRadius:'4px', backgroundColor:'white',textTransform:'capitalize',fontSize:'14px',marginRight:'4px',
      "&.MuiToggleButtonGroup-grouped":
      { borderRadius: '8px !important',border:'1px solid rgba(0, 0, 0, 0)'},
  "&.Mui-selected, &.Mui-selected:hover": { color: '#ffffff', backgroundColor: '#CE3932' },
  width: '72px', height: '24px', borderRadius: '8px',
  backgroundColor: 'white', textTransform: 'capitalize'
    }}>No</ToggleButton>
      <ToggleButton value="enable" sx={{width:'72px',height:'24px',borderRadius:'8px',backgroundColor:'#00AC1C',textTransform:'capitalize',fontSize:'14px',
        "&.MuiToggleButtonGroup-grouped":
        { borderRadius: '8px !important',border:'1px solid rgba(0, 0, 0, 0)'},
    "&.Mui-selected, &.Mui-selected:hover": { color: '#ffffff', backgroundColor: '#00AC1C' },
    width: '72px', height: '24px', borderRadius: '8px',
    backgroundColor: 'white', textTransform: 'capitalize'
    }}>Yes</ToggleButton>
      
    </ToggleButtonGroup>
    </Box>
            </div>
            <OutlinedInput
            
            type="text"
            placeholder='Enter your email'
            
            sx={{width:'450px',borderRadius:'8px',marginTop:'34px',marginBottom:'34px',
        height:'48px',padding:'10px',border:'1px solid #606060',boxSizing:'border-box',fontSize:'16px',fontFamily:'Poppins',color:'#D6D6D6'  }}
          />
          <div style={{display:'flex',flexDirection:'row',paddingTop:'34px',gap:'16px',borderTop:'1px solid #939393'}}>
            <Button sx={{width:'217px',height:'40px',borderRadius:'8px',textTransform:'capitalize',backgroundColor:'white',color:'#1F6373',fontSize:'14px',border:'1px solid #606060'}}>Cancel</Button>
            <Button sx={{width:'217px',height:'40px',borderRadius:'8px',textTransform:'capitalize',backgroundColor:'#1F6373',color:'white',fontSize:'14px'}}>Send</Button>
          </div>
            </div>
            </div>

            </Box>
            </Modal>

    </div>
  )
}

export default Modalsendtoemail