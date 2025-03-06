"use client"
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';
import Login from '../components/Login/Login';



const HomePage = () => {
  return (
    <Fragment>
      <Navbar/>
      <Login/>
      <Footer/>
    </Fragment>
  );
};

export default HomePage;