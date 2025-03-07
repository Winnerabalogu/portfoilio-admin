"use client"
import React, { Fragment } from 'react';
import Navbar from '../components/LoginNav/LoginNav';
import Footer from '../components/footer/Footer';
import SignUp from '../components/SignUp/SignUp';



const HomePage = () => {
  return (
    <Fragment>
      <Navbar/>
      <SignUp/>
      <Footer/>
    </Fragment>
  );
};

export default HomePage;