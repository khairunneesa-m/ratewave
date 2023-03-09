import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tick from './tick.png';
import { Button, IconButton } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
export default function Resetlink() {
// const rootRef = React.useRef<HTMLDivElement>(null);
const [openModal, setOpenmodal]=React.useState(true);
    const handleOpenmodal = () => setOpenmodal(true);
    const handleClosemodal = () => setOpenmodal(false);
    const [showModal,setShowModal] = React.useState(false);
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
            width: '402px',
            height:'286px',
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
            <div style={{alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column',paddingTop:'4px'}}>
            <div style={{alignItems:'center',justifyContent:'center',display:'flex',paddingLeft:'28px',
            paddingRight:'28px'
             }}>
          <Box sx={{height:44, width:44,alignItems:'center',justifyContent:'center', display:'flex',
          
            // borderRadius:'1.375rem',marginLeft:'2.7rem',backgroundColor:'var(--White200)'
            }}>
              <img src={Tick}  />
           </Box> 
           </div>
           
          <Typography sx={{textAlign:'center',fontSize:'14px',fontWeight:'500px',color:'#1A1A1A',fontFamily:'Poppins',marginTop:'34px'}}>
            <span>
            Account reset link has been sent to your registered email. please click on the link to reset the password
          </span>
          </Typography>
          <div style={{marginTop:'48px',marginBottom:'16px'}}>
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
            // onClick={showModalHandler}
            >Return to sign in</Button>
              </div>
          </div>
          
          </Box>

        </Modal>
    </div>
    
  );
}