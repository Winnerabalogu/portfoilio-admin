"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/images/port-logo.png";


const LoginNav = () => {


  return (
    <nav className="navbar">

      {/* Centered Logo */}
      <div className="logo-container">
        <a href="/">
          <Image src={Logo} alt="Logo" width={200} height={50} />
        </a>
      </div>
    </nav>
  );
};

export default LoginNav;