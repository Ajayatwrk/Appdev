// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Info from './components/Info';
import Splash from './components/Splash';
import Community from './components/Community';
import Profile from './components/Profile';
import Details from './components/Details';
import Map from './components/Map';
import ProfileCard1 from './components/ProfileCard1';
import ProfileCard2 from './components/ProfileCard2';
import ProfileCard3 from './components/ProfileCard3';
import ProfileCard4 from './components/ProfileCard4';
import NewsCardList from './components/NewsCardList';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Home" element={<Home />}/>
        <Route path="/Info" element={<Info/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path="/community" element={<Community />} />
        <Route path="/details" element={<Details />} />
        <Route path="/map" element={<Map />} />  {/* Map page */}
        <Route path="/ProfileCard1" element={<ProfileCard1 />} />  {/* Profile 1 */}
        <Route path="/ProfileCard2" element={<ProfileCard2 />} />  {/* Profile 2 */}
        <Route path="/ProfileCard3" element={<ProfileCard3 />} />  {/* Profile 3 */}
        <Route path="/ProfileCard4" element={<ProfileCard4 />} />  {/* Profile 4 */}
      </Routes>
    </Router>
  );
};

export default App;
