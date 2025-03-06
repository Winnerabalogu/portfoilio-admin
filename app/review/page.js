"use client"
import Table from '../../components/Table/Reviews';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import React from 'react';

export default function review() {
  return (
    <div className="app-container">
      <Navbar/>
      <Table />
      <Footer/>
    </div>
  );
}