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
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add' element={<AddGiftee />} />
          <Route path='/:giftee_id/requestgift' element={<RequestGiftForm />} />
          <Route path='/:giftee_id' element={<GifteeDetails />} />
          <Route path='/:giftee_id/edit' element={<EditGifteeDetails />} />
          <Route path='/:giftee_id/add' element={<AddGift />}/>
          <Route path='/:giftee_id/:gift_id' element={<GiftDetails />}/>
          <Route path='/:giftee_id/:gift_id/edit' element={<EditGiftDetails />} />
          <Route path='/:user_id/:giftee_id/add' element={<GifteeRequestForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}