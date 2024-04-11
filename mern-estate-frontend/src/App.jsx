import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Header from './components/Header'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import Search from './pages/Search'
import Listing from './pages/Listinng'
import UpdateListing from './pages/Updatelisting'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-in' element={<Signin />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route element={<PrivateRoute />}>
           <Route path='/profile' element={<Profile />}/>
           <Route path='/create-listing' element={<CreateListing />} />
        </Route>
        <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        
      </Routes>   
    </BrowserRouter>
  )
}

export default App