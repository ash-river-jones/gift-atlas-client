import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<></>} /> // home page dashboard
          <Route path='/about' element={<></>} /> // about page
          <Route path='/login' element={<></>} /> // login page --- Not required for MVP
          <Route path='/add' element={<></>} /> // add giftee
          <Route path='/:giftee_id' element={<></>} /> //giftee details
          <Route path='/:giftee_id/edit' element={<></>} /> // edit giftee
          <Route path='/:giftee_id/add' element={<></>}/> // add gift for giftee
          <Route path='/:giftee_id/:gift_id' element={<></>}/> // gift details for giftee
          <Route path='/:giftee_id/:gift_id/edit' element={<></>} /> // edit gift detials for giftee
          <Route path='/:used_id/:giftee_id/add' element={<></>} /> // Giftee Gift Request Form
        </Routes>
      </BrowserRouter>
    </div>
  );
}