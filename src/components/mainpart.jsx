import { Autocomplete, Box, Button, FormControl, Input, InputAdornment, InputBase, InputLabel, MenuItem, NativeSelect, OutlinedInput, Paper, Select, styled, Tab, Tabs, TextField, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import home from './home.png';
import React, { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import { House } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Footer from './footer';
import Header from './header';
import msgno from './drum.png';
import Modalsendtoemail from './modalsendtoemail';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import HelpIcon from '@mui/icons-material/Help';
import axios from 'axios';


// import { Carousel } from 'react-bootstrap';

// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { CarouselProvider, Slide,Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
function Mainpart() {
  const options = ['Variable', 'Fixed', 'Open'];
  //const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const [monthlypayment1, setMonthlypayment1] = useState();
  const [monthlypayment2, setMonthlypayment2] = useState();
  const [monthlypayment3, setMonthlypayment3] = useState();
  const [monthlypayment4, setMonthlypayment4] = useState();
  const [monthlypayment5, setMonthlypayment5] = useState();
  const [monthlypayment6, setMonthlypayment6] = useState();
  const [monthlypayment7, setMonthlypayment7] = useState();
  const [monthlypayment, setMonthlypayment] = useState([]);
  const [value, setValue] = useState(0);
  const breakPoints = {
    width: 1, itemsToShow: 1,
    width: 550, itemsToShow: 2,

  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      itemsToShow: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      itemsToShow: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      itemsToShow: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      itemsToShow: 2
    }
  };
  const [i, setI] = useState([1, 2, 3, 4]);
  const [j, setJ] = useState(5);
  const initialpayment = ["payment1", "payment2", "payment3", "payment4", "payment5", "payment6", "payment7"];
  const term = ["term1", "term2", "term3", "term4", "term5", "term6", "term7"];
  const interest = ["interest1", "interest2", "interest3", "interest4", "interest5", "interest6", "interest7"];
  const period = ["period1", "period2", "period3", "period4", "period5", "period6", "period7"];
  const frequency = ["freq1", "freq2", "freq3", "freq4", "freq5", "freq6", "freq7"];
  const [showModal, setShowModal] = useState(false);

  const [values, setValues] = useState({
    askingprice: 0,
    term1: 0,
    term2: 0,
    term3: 0,
    term4: 0,
    term5: 0,
    term6: 0,
    term7: 0,
    interest1: 1,
    interest2: 1,
    interest3: 1,
    interest4: 1,
    interest5: 1,
    interest6: 1,
    interest7: 1,
    period1: 1,
    period2: 1,
    period3: 1,
    period4: 1,
    period5: 1,
    period6: 1,
    period7: 1
  });



  // const debounce = (fn, delay) => {
  //   let timerId;
  //   return (...args) => {
  //     clearTimeout(timerId);
  //     timerId = setTimeout(() => fn(...args), delay);
  //   }
  // };
  function addElement() {
    if (j < 8) {
      setI([...i, j]);
    }
    else {
      alert("Only 7 Mortgage")
    }
    setJ(j + 1);
  }
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [e.target.name]: value };

    }

    );
    // debounce(getpostgetdata,500)

  }
  function getpostgetdata() {

    fetch('post-morgage', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        'askingprice': values.askingprice,
        'term1': values.term1,
        'term2': values.term2,
        'term3': values.term3,
        'term4': values.term4,
        'term5': values.term5,
        'term6': values.term6,
        'term7': values.term7,
        'interest1': values.interest1,
        'interest2': values.interest2,
        'interest3': values.interest3,
        'interest4': values.interest4,
        'interest5': values.interest5,
        'interest6': values.interest6,
        'interest7': values.interest7,
        'period1': values.period1,
        'period2': values.period2,
        'period3': values.period3,
        'period4': values.period4,
        'period5': values.period5,
        'period6': values.period6,
        'period7': values.period7

      }),
    })


    fetch("/morgage")
      .then((response) => response.json())
      .then(data => {
        setMonthlypayment1(data.monthlypayment1);
        setMonthlypayment2(data.monthlypayment2);
        setMonthlypayment3(data.monthlypayment3);
        setMonthlypayment4(data.monthlypayment4);
        setMonthlypayment5(data.monthlypayment5);
        setMonthlypayment6(data.monthlypayment6);
        setMonthlypayment7(data.monthlypayment7);
        console.log(data);
        console.log("Monthly" + monthlypayment1);
        console.log("Monthly" + monthlypayment2);
        console.log("Monthly" + monthlypayment3);
        console.log("Monthly" + monthlypayment4);

      })

  }

  console.log(values);

  // useEffect(() => {

  // },[monthlypayment1]);   
  // console.log("Monthly"+monthlypayment1.monthlypayment1);


  // monthlypayment1.map((month, index) => (
  //   setMonthlypayment(payment => [...payment, month])
  //  ))
  function showModalHandler() {
    setShowModal(!showModal);
  }
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
          <Box sx={{ paddingTop: '19px' }}>
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
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <Box sx={{ height: 'calc(100vh - 70px)', overflowY: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className='mainpart'>

          <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={5}
        visibleSlides={3}
    >
        <Slider>
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
            <div style={{ width: '886px', height: '110px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', justifyContent: 'space-between', borderBottom: '1px solid #E2E2E2' }}>
              <img src={home} style={{ width: '114px', height: '96px' }} />

              <Typography sx={{ width: '746px', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, textAlign: 'justify' }}>
                Whether you are applying for a new mortgage or thinking about switching lenders, This comparison calculator can help you explore and pick the mortgage option that’s right for you. Use this Mortgage comparison tool to compare mortgage platfrom top lenders and find the one that best suits your needs.
              </Typography>
            </div>

            <div style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'row', marginTop: '24px', alignItems: 'center' }}>
              <Typography sx={{ marginLeft: '11px', fontSize: '16px', width: '90px', fontFamily: 'Poppins', fontWeight: 500 }}>Start here</Typography>
              <ArrowForwardIcon sx={{ width: '24px', height: '24px', marginLeft: '14px', marginRight: '46px', color: '#313131' }} />
              <div style={{ width: '692px', display: 'flex', gap: '20px' }}>

                <OutlinedInput

                  type="text"
                  name="askingprice"
                  placeholder='Asking Price'
                  onChange={handleChange1}
                  value={values.askingprice}
                  sx={{
                    width: '336px', borderRadius: '4px',
                    height: '40px', boxSizing: 'border-box', fontSize: '12px', fontFamily: 'Poppins', color: '#313131'
                  }}
                />

                <OutlinedInput

                  type="text"
                  name="location"
                  placeholder='Location'
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />

                    </InputAdornment>
                  }
                  sx={{
                    width: '336px', borderRadius: '4px', fontSize: '12px', fontFamily: 'Poppins', color: '#313131',
                    height: '40px', boxSizing: 'border-box'
                  }}
                />

              </div>

            </div>


            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>

                <div style={{ width: '178px', height: '365px', display: 'flex', flexDirection: 'column', paddingTop: '18px', marginTop: '18px', paddingLeft: '7px', gap: '16px', marginRight: '16px' }}>
                  <Typography sx={{ fontSize: '16px', fontFamily: 'Poppins', color: '#313131', fontWeight: 600 }}>Input parameters</Typography>
                  <Box sx={{ width: '168px', height: '28px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Initial Payment</Typography>
                    <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                  </Box>
                  <Box sx={{ width: '168px', height: '28px', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Type</Typography>
                    <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                  </Box>
                  <Box sx={{ width: '168px', height: '28px', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Term</Typography>
                    <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                  </Box>
                  <Box sx={{ width: '168px', height: '28px', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Interest Rate (%) </Typography>
                    <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                  </Box>
                  <Box sx={{ width: '168px', height: '28px', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Amortization Period</Typography>
                    <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                  </Box>
                  <Box sx={{ width: '168px', height: '28px', alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Payment Frequency</Typography>
                    <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                  </Box>
                  <Box sx={{ width: '168px', height: '28px', alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginTop: '12px' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Monthly payment</Typography>
                    <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                  </Box>
                </div>
                {/* <Slider {...settings}> */}
                {/* <Carousel> */}
                {/* <Carousel indicators={false} 
                 sx={{borderRadius:'16px',width:'800px','& .MuiSvgIcon-root':{fontSize:'10px'}}} 
                 activeIndicatorIconButtonProps={{
                  style: {
                    color: '#10C5C6' // 2
                  }
                }} indicatorContainerProps={{
                  style: {
                    zIndex: 1,
                    marginTop: "-20px",
                    position: "relative", color: 'blue'
                  }

                }}
                > */}
                <Box sx={{maxWidth:'100%',width:'600px',backgroundColor:'red'}}>
                <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={50}
        totalSlides={7}
        visibleSlides={3}
    >
        <Slider>
                {/* <div style={{ width: '692px', display: 'flex', gap: '20px' }}> */}
                  <Slide index={0}>
                   wifi

                  </Slide>
                  <Slide index={1}>
                    classs 
                    class
                  </Slide>
                  {[].map((item, key) => {
                    return (
                      <slide index={key}>
                      <div style={{
                        width: '158px', height: '324px', display: 'flex', flexDirection: 'column',
                        paddingTop: '20px', paddingLeft: '12px', paddingRight: '12px', paddingBottom: '20px', backgroundColor: 'white',
                        border: '1px solid #CFC9C9', gap: '16px', marginTop: '18px', borderRadius: '8px'
                      }}>
                        {/* <div style={{ display:'flex',flexDirection:'row',gap:'23px',alignItems:'center',justifyContent:'center'}}> */}
                        <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 400, color: '#626262' }}>Mortgage {item}</Typography>
                        {/* <DeleteOutlineOutlinedIcon sx={{height:'10px',width:'10px'}}/>
                            </div>  */}
                        <OutlinedInput
                          type="text"
                          placeholder='0'
                          // name={item}
                          //value={values}
                          onChange={handleChange1}
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
                          onChange={handleChange1}
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
                          onChange={handleChange1}
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
                        <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#313131', fontFamily: 'Poppins', marginTop: '18px', textAlign: 'center' }}>CAD({monthlypayment})</Typography>
                      </div>
                       </slide>
                    );
                  })}
                  {/* </Carousel> */}
                  {/* </Slider> */}
                {/* </div> */}
                </Slider>
                      <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
                      </CarouselProvider>
                      </Box> 
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '18px' }}>
                  <div>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                      TabIndicatorProps={{ style: { background: '#313131' } }}
                      sx={{
                        " .MuiTabs-flexContainer": {
                          minHeight: 0, alignItems: 'center',
                          "& .Mui-selected": { color: 'black', borderColor: 'black' }, "& .MuiTabs-indicator": { backgroundColor: 'black' },
                        },
                      }}
                    >
                      <Tab label="Monthly payment" sx={{ textTransform: 'none', fontFamily: 'Poppins' }} {...a11yProps(0)} />
                      <Tab label="Calculate Penalty on cancellation" sx={{ textTransform: 'none', fontFamily: 'Poppins' }} {...a11yProps(1)} />

                    </Tabs>
                  </div>

                </div>
                <TabPanel value={value} index={0} sx={{
                  "& .MuiTabPanel-root": { padding: '0px' },
                  "& .MuiBox-root": { padding: '0px' },
                }}>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '178px', display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '70px', marginRight: '20px' }}>
                      <Box sx={{ width: '162px', height: '28px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Monthly Payment</Typography>
                        <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                      </Box>
                      <Box sx={{ width: '162px', height: '28px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Remaining principle</Typography>
                        <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                      </Box>
                      <Box sx={{ width: '162px', height: '28px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Interest paid</Typography>
                        <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                      </Box>
                      <Box sx={{ width: '162px', height: '28px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Principle paid</Typography>
                        <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                      </Box>
                    </div>
                    <div style={{ width: '692px', display: 'flex', gap: '20px' }}>
                      {i.map(item => {
                        return (
                          <div style={{
                            width: '158px', height: '218px', display: 'flex', flexDirection: 'column', marginTop: '16px',
                            paddingLeft: '12px', paddingRight: '12px', paddingBottom: '10px', paddingTop: '15px', backgroundColor: 'white',
                            border: '1px solid #CFC9C9', gap: '16px', borderRadius: '8px'
                          }}>
                            <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 400, color: '#626262' }}>Mortgage {item}</Typography>
                            {/* <OutlinedInput
                                type="text"
                                placeholder='0'
                                // name={item}
                                //value={values}
                                onChange={handleChange1}
                                sx={{width:'100%',borderRadius:'4px',fontSize:'12px',color:'#313131',
                                height:'28px',textAlign:'center', 
                                "& .MuiOutlinedInput-input":{textAlign:'center'},
                              }}
                            />  
                             <OutlinedInput
                                type="text"
                                placeholder='0'
                                // name={item}
                                //value={values}
                                onChange={handleChange1}
                                sx={{width:'100%',borderRadius:'4px',fontSize:'12px', color:'#313131',
                                height:'28px',textAlign:'center', 
                                "& .MuiOutlinedInput-input":{textAlign:'center'},
                              }}
                            />  
                             <OutlinedInput
                                type="text"
                                placeholder='0'
                                // name={item}
                                //value={values}
                                onChange={handleChange1}
                                sx={{width:'100%',borderRadius:'4px',fontSize:'12px',color:'#313131',
                                height:'28px',textAlign:'center', 
                                "& .MuiOutlinedInput-input":{textAlign:'center'},
                              }}
                            />  
                             <OutlinedInput
                                type="text"
                                placeholder='0'
                                // name={item}
                                //value={values}
                                onChange={handleChange1}
                                sx={{width:'100%',borderRadius:'4px',fontSize:'12px',color:'#313131',
                                height:'28px',textAlign:'center', 
                                "& .MuiOutlinedInput-input":{textAlign:'center'},
                              }}
                            />   */}
                            <Typography sx={{
                              fontSize: '12px', color: '#313131',
                              textAlign: 'center', lineHeight: '28px'
                            }}>0</Typography>
                            <Typography sx={{
                              fontSize: '12px', color: '#313131',
                              textAlign: 'center', lineHeight: '28px'
                            }}>0</Typography>
                            <Typography sx={{
                              fontSize: '12px', color: '#313131',
                              textAlign: 'center', lineHeight: '28px'
                            }}>0</Typography>
                            <Typography sx={{
                              fontSize: '12px', color: '#313131', lineHeight: '28px',
                              textAlign: 'center'
                            }}>0</Typography>

                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>

                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '187px', display: 'flex', flexDirection: 'column', marginTop: '42px', gap: '20px', marginRight: '20px' }}>
                      <Box sx={{ width: '187x', height: '28px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Cancellation</Typography>
                        <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                      </Box>
                      <Box sx={{ width: '187x', height: '28px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131', fontFamily: 'Poppins' }}>Penalty</Typography>
                        <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                      </Box>
                      <Box sx={{ width: '187x', height: '28px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#313131s', fontFamily: 'Poppins' }}>Calculated penalty</Typography>
                        <HelpIcon sx={{ width: '12px', height: '12px', color: '#878787' }} />
                      </Box>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '692px' }}>
                      {i.map(item => {
                        return (

                          <div style={{
                            width: '158px', height: '168px', display: 'flex', flexDirection: 'column',
                            paddingTop: '11px', paddingLeft: '12px', paddingRight: '12px', paddingBottom: '7px', backgroundColor: 'white',
                            border: '1px solid #CFC9C9', gap: '12px', borderRadius: '8px'
                          }}>

                            <Typography sx={{ textAlign: 'center', fontSize: '14px', fontWeight: 400, color: '#626262' }}>Mortgage {item}</Typography>


                            {/* <OutlinedInput
                                type="text"
                                placeholder='0'
                                // name={item}
                                //value={values}
                                onChange={handleChange1}
                                sx={{width:'100%',borderRadius:'4px',fontSize:'12px',color:'#313131',
                                height:'28px',textAlign:'center', 
                                "& .MuiOutlinedInput-input":{textAlign:'center'},
                              }}
                            />  
                             <OutlinedInput
                                type="text"
                                placeholder='0'
                                // name={item}
                                //value={values}
                                onChange={handleChange1}
                                sx={{width:'100%',borderRadius:'4px',fontSize:'12px', color:'#313131',
                                height:'28px',textAlign:'center', marginTop:'4px',
                                "& .MuiOutlinedInput-input":{textAlign:'center'},
                              }}
                            />  
                             <OutlinedInput
                                type="text"
                                placeholder='0'
                                // name={item}
                                //value={values}
                                onChange={handleChange1}
                                sx={{width:'100%',borderRadius:'4px',fontSize:'12px',color:'#313131',
                                height:'28px',textAlign:'center', marginTop:'4px',
                                "& .MuiOutlinedInput-input":{textAlign:'center'},
                              }}fontSize:'12px',color:'#313131',
                                height:'28px',textAlign:'center', marginTop:'4px'
                            />   */}
                            <Typography sx={{
                              fontSize: '12px', color: '#313131',
                              textAlign: 'center', lineHeight: '28px', marginTop: '4px'
                            }}>0</Typography>
                            <Typography sx={{
                              fontSize: '12px', color: '#313131',
                              textAlign: 'center', lineHeight: '28px', marginTop: '4px'
                            }}>0</Typography>
                            <Typography sx={{
                              fontSize: '12px', color: '#313131',
                              textAlign: 'center', lineHeight: '28px', marginTop: '4px'
                            }}>0</Typography>

                          </div>

                        );

                      })}

                    </div>

                  </div>

                </TabPanel>

                {/* <Typography sx={{fontSize:'14px',marginTop:'30px',color:'#414141',borderBottom:'1px solid black'}}>Monthly payment</Typography>
                              <Typography sx={{fontSize:'14px',marginTop:'30px',color:'#414141'}}>Calculate Penalty on cancellation</Typography> */}

              </div>
            </div>
          </div>
          <div style={{ height: '970px', display: 'flex', alignItems: 'center' }}>
            <Button startIcon={<ControlPointOutlinedIcon sx={{ width: '10px', height: '10px' }} />} sx={{
              width: '124px', height: '30px', borderRadius: '12px', textTransform: 'none', backgroundColor: '#1F6373', gap: '4px', color: 'white', fontSize: '12px', fontWeight: 500,
              '&:hover': {
                backgroundColor: '#D2E0E3',
                color: '#1F6373',
                border: '1px solid #1F6373',
              },

              '&:active': {

                backgroundColor: '#1F6373',
                color: 'white',
              },
            }} onClick={addElement}>Add Mortgage</Button>
          </div>






        </div>
        <Footer />

      </Box>

    </div>
  )
}

export default Mainpart;