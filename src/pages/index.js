import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero/';
import InfoSection from '../components/Info';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info/Data';
import Services from '../components/Services';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return  (
    <>
    <Sidebar  isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection/>
    <InfoSection {...homeObjOne}/>
    <Services/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    
    </>
  );
};
export default Home