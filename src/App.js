import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Mainpart from './components/mainpart';
import PenaltyCalculation from './components/penaltycalculation';
import { Box } from '@mui/material';
import Modalsendtoemail from './components/modalsendtoemail';
import Signup from './components/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/signin';
import Reset from './components/reset';
import Createpwd from './components/createpwd';
import Changepwd from './components/changepwd';
import Resetlink from './components/resetlink';
import Quotes from './components/quotes';
import Enterotp from './components/enterotp';
import Getquotes from './components/getquotes';
import Modaldelete from './components/modaldelete';
import Receivedqtn from './components/receivedqtn';
import Negotiatemodal from './components/negotiatemodal';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Mainpart />}
        />
       <Route path='/mainpart' element={<Mainpart />}/>
        <Route path='/penaltycalculation' element={<PenaltyCalculation />}/>
        <Route path='/modalsendtoemail' element={<Modalsendtoemail/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/createpwd' element={<Createpwd />}/>
        <Route path='/changepwd' element={<Changepwd />}/>
        <Route path='/resetlink' element={<Resetlink />}/>
        <Route path='/quotes' element={<Quotes />}/>
        <Route path='/enterotp' element={<Enterotp />}/>
        <Route path='/getquotes' element={<Getquotes />}/>
        <Route path='/modaldelete' element={<Modaldelete />}/>
        <Route path='/receivedqtn' element={<Receivedqtn />}/>
        <Route path='/negotiatemodal' element={<Negotiatemodal />}/>
    {/* <div style={{overflow:'hidden'}}>
          <Header />
           <Box sx={{height:'calc(100vh - 75px)',overflowY:'auto'}}>
        {/* <div className='mainpart'> */}
          {/* <Mainpart /> */}
        {/* </div> */}
        {/* <PenaltyCalculation /> */}
        {/* <sendmodal />
        <Footer />
         </Box>
     </div>    */}

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
