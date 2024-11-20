import React from 'react'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'
import Joinnow from './components/Joinnow'
import Menu from './components/Menu'
import Giftcards from './components/Giftcards'
import Rewards from './components/Rewards'
import ErrorPage from './components/ErrorPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/giftcards' element={<Giftcards />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/joinnow' element={<Joinnow />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App