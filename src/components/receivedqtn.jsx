import { Avatar, Button, Tab, Tabs, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Footer from './footer'
import Header from './header'
import Header1 from './header1';

function Receivedqtn() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ paddingTop: '8px' }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header1 />
      <Box sx={{ height: 'calc(100vh - 70px)', overflowY: 'auto', width: '1366px', paddingLeft: '170px', paddingRight: '170px' }}>
        {(value === 0) ?
          (<Typography sx={{ fontWeight: 700, fontSize: '20px', color: '#313131', fontFamily: 'Poppins' }}>Received quotation</Typography>) :
          (value === 1) ?
            (<Typography sx={{ fontWeight: 700, fontSize: '20px', color: '#313131', fontFamily: 'Poppins' }}>Accepted quotation</Typography>) :
            (value === 2) ? (<Typography sx={{ fontWeight: 700, fontSize: '20px', color: '#313131', fontFamily: 'Poppins' }}>Rejected quotation</Typography>) :
              <Typography sx={{ fontWeight: 700, fontSize: '20px', color: '#313131', fontFamily: 'Poppins' }}>Negotiated quotation</Typography>
        }
        <div style={{
          width: '1024px', height: '50px', color: 'white', display: 'flex', flexDirection: 'row',
          alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', backgroundColor: '#1F6373',
          borderRadius: '8px 8px 0px 0px', paddingRight: '34px'
        }}>
          <div>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
              TabIndicatorProps={{ style: { background: 'white' } }}
              sx={{
                color: 'white',
                " .MuiTabs-flexContainer": {
                  minHeight: 0, alignItems: 'center',
                  "& .Mui-selected": { color: 'white', borderColor: 'white', fontWeight: 500 }, "& .MuiTabs-indicator": { backgroundColor: 'white' },
                },
              }}
            >
              <Tab label="All Quotations" sx={{ fontSize: '14px', textTransform: 'none', fontFamily: 'Poppins', color: 'white', fontWeight: 400 }} {...a11yProps(0)} />
              <Tab label="Accepted" sx={{ fontSize: '14px', textTransform: 'none', fontFamily: 'Poppins', color: 'white', fontWeight: 400 }} {...a11yProps(1)} />
              <Tab label="Rejected" sx={{ fontSize: '14px', textTransform: 'none', fontFamily: 'Poppins', color: 'white', fontWeight: 400 }} {...a11yProps(1)} />
              <Tab label="Negotiated" sx={{ fontSize: '14px', textTransform: 'none', fontFamily: 'Poppins', color: 'white', fontWeight: 400 }} {...a11yProps(1)} />
            </Tabs>
          </div>
          <div>
            <Button sx={{
              width: '114px', height: '36px', borderRadius: '16px', fontSize: '12px',
              textTransform: 'none', backgroundColor: '#1F6373', color: 'white', fontSize: '14px', alignItems: 'center', fontFamily: 'Poppins',
              fontWeight: 400, border: '1px solid white',
              '&:hover': {
                backgroundColor: '#D2E0E3',
                color: '#1F6373',
                border: '1px solid #1F6373',
              },

              '&:active': {

                backgroundColor: '#1F6373',
                color: 'white',
              },
            }}
              endIcon={<KeyboardArrowDownIcon sx={{
                color: 'white',
                '&:hover': {

                  color: '#1F6373',

                },
              }} />}
            >Sort by</Button>
          </div>

        </div>
        <TabPanel value={value} index={0} sx={{
          "& .MuiTabPanel-root": { padding: '0px' },
          "& .MuiBox-root": { padding: '0px' },
        }}>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '22px', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', height: '38px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '90px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '90px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '90px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '90px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '90px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '90px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} sx={{
          "& .MuiTabPanel-root": { padding: '0px' },
          "& .MuiBox-root": { padding: '0px' },
        }}>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '22px', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#76DE24', borderRadius: '8px', color: 'white',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                  paddingLeft: '12px', paddingRight: '12px', gap: '4px',
                  "& .MuiButton-root": { paddingLeft: '12px', paddingRight: '12px', gap: '4px' },
                }} endIcon={<DoneIcon />}>Accepted</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Accept</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#76DE24', borderRadius: '8px', color: 'white',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }} endIcon={<DoneIcon />}>Accepted</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Accept</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#76DE24', borderRadius: '8px', color: 'white',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }} endIcon={<DoneIcon />}>Accepted</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Accept</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#76DE24', borderRadius: '8px', color: 'white',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }} endIcon={<DoneIcon />}>Accepted</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Accept</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#76DE24', borderRadius: '8px', color: 'white',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }} endIcon={<DoneIcon />}>Accepted</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} sx={{
          "& .MuiTabPanel-root": { padding: '0px' },
          "& .MuiBox-root": { padding: '0px' },
        }}>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '22px', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#EB5648', borderRadius: '8px', color: 'white', paddingLeft: '18px', paddingRight: '8px',
                  '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }} endIcon={<CloseIcon sx={{ width: '16px', height: '16px' }} />}>Rejected</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Reject</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#EB5648', borderRadius: '8px', color: 'white', '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }} endIcon={<CloseIcon sx={{ width: '16px', height: '16px' }} />}>Rejected</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Reject</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#EB5648', borderRadius: '8px', color: 'white', '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }} endIcon={<CloseIcon sx={{ width: '16px', height: '16px' }} />}>Rejected</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Reject</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#EB5648', borderRadius: '8px', color: 'white', '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }} endIcon={<CloseIcon sx={{ width: '16px', height: '16px' }} />}>Rejected</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Reject</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#EB5648', borderRadius: '8px', color: 'white', '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }} endIcon={<CloseIcon sx={{ width: '16px', height: '16px' }} />}>Rejected</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }}>Negotiate</Button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} sx={{
          "& .MuiTabPanel-root": { padding: '0px' },
          "& .MuiBox-root": { padding: '0px' },
        }}>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '22px', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#1F6373', borderRadius: '8px', color: 'white', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }} endIcon={<SyncAltIcon sx={{ width: '12px', height: '12px' }} />}>Negotiated</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Negotiate</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#1F6373', borderRadius: '8px', color: 'white', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }} endIcon={<SyncAltIcon sx={{ width: '12px', height: '12px' }} />}>Negotiated</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Negotiate</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#1F6373', borderRadius: '8px', color: 'white', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }} endIcon={<SyncAltIcon sx={{ width: '12px', height: '12px' }} />}>Negotiated</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px', marginBottom: '8px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Negotiate</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#1F6373', borderRadius: '8px', color: 'white', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }} endIcon={<SyncAltIcon sx={{ width: '12px', height: '12px' }} />}>Negotiated</Button>
              </div>
            </div>
          </div>

          <div style={{
            width: '1024px', height: '96px', color: 'white', display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', border: '1px solid #939393',
            borderRadius: '12px', paddingLeft: '4px', paddingRight: '4px'
          }}>
            <div style={{ width: '108px', borderRight: '1px solid #D2D2D2', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <Avatar>A</Avatar>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 400 }}>Agent code</Typography>
              <Typography sx={{ color: '#212427', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 600 }}>6601</Typography>
            </div>
            <div style={{ width: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Monthly payment</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>$25,000</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Interest rate(%)</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>4.5%</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Type</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Variable</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Amortization</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>25 Years</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '20px' }}>
                <Typography sx={{ color: '#626262', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Term</Typography>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>2 Months</Typography>
              </div>
            </div>
            <div style={{ width: '288px', height: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', gap: '4px', borderLeft: '1px solid #D2D2D2' }}>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '23px', paddingLeft: '30px', alignItems: 'center', height: '38px' }}>
                <Typography sx={{ color: '#212427', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400 }}>Mortgage 1</Typography>
                <Typography sx={{ color: '#212427', fontSize: '10px', fontFamily: 'Poppins', fontWeight: 400 }}>Received on 12th Feb 23 : 12 PM</Typography>
              </div>
              <div style={{ width: '288px', display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingLeft: '18px' }}>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black',
                  '&:hover': {
                    backgroundColor: '#76DE24',
                    color: 'white',

                  },
                }}>Accept</Button>
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', border: '1px solid black', backgroundColor: '#F9F9F9', borderRadius: '8px', color: 'black', '&:hover': {
                    backgroundColor: '#EB5648',
                    color: 'white',

                  },
                }}>Reject</Button>
                {/* <Button sx={{heigt:'32px',width:'90px',fontSize:'12px',textTransform:'none',border:'1px solid black',backgroundColor:'#F9F9F9',borderRadius:'8px',color:'black'}}>Negotiate</Button> */}
                <Button sx={{
                  heigt: '32px', width: '92px', fontSize: '12px', textTransform: 'none', backgroundColor: '#1F6373', borderRadius: '8px', color: 'white', '&:hover': {
                    backgroundColor: '#1F6373',
                    color: 'white',

                  },
                }} endIcon={<SyncAltIcon sx={{ width: '12px', height: '12px' }} />}>Negotiated</Button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Box>
      <Footer />
    </div>
  )
}

export default Receivedqtn