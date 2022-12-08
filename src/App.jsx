import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import AddGiftee from './pages/AddGiftee/AddGiftee'
import GifteeDetails from './pages/GifteeDetails/GifteeDetails'
import EditGifteeDetails from './pages/EditGifteeDetails/EditGifteeDetails'
import AddGift from './pages/AddGift/AddGift'
import GiftDetails from './pages/GiftDetails/GiftDetails'
import EditGiftDetails from './pages/EditGiftDetails/EditGiftDetails'
import GifteeRequestForm from './pages/GifteeRequestForm/GifteeRequestForm'
import RequestGiftForm from './pages/RequestGiftForm/RequestGiftForm'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />                                     // done
          <Route path='/about' element={<About />} />                               //       // second last priority
          <Route path='/login' element={<Login />} />                               //       // last priority
          <Route path='/add' element={<AddGiftee />} />                             // done 
          <Route path='/:giftee_id/requestgift' element={<RequestGiftForm />} />    //       // request gift from giftee // Email JS
          <Route path='/:giftee_id' element={<GifteeDetails />} />                  // done
          <Route path='/:giftee_id/edit' element={<EditGifteeDetails />} />         // done 
          <Route path='/:giftee_id/add' element={<AddGift />}/>                     // done
          <Route path='/:giftee_id/:gift_id' element={<GiftDetails />}/>            // done  // single gift details
          <Route path='/:giftee_id/:gift_id/edit' element={<EditGiftDetails />} />  // done
          <Route path='/:user_id/:giftee_id/add' element={<GifteeRequestForm />} /> //       // for external users
        </Routes>
      </BrowserRouter>
    </div>
  );
}