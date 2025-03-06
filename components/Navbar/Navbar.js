"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/port-logo.png";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    console.log("Logging out");
    router.push('/');  // Redirect to the login page
  };

  return (
    <nav className="navbar">
      {/* Menu Toggle Button (Right) */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Centered Logo */}
      <div className="logo-container">
        <a href="/">
          <Image src={Logo} alt="Logo" width={200} height={50} />
        </a>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="menu-toggle" onClick={() => setIsOpen(false)}>
          ✖
        </button>
        <ul>
          <li><Link href="/comment">Comments</Link></li>
          <li><Link href="/review">Reviews</Link></li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;