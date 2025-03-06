import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/foot-logo.png"; // Update with actual logo path


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Logo */}
        <div className="footer-logo">
          <Link href="/">
            <Image src={Logo} alt="Company Logo" width={150} height={50} />
          </Link>
        </div>

        {/* Social Media Links */}
        <nav className="footer-social">
          <ul>
            <li>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <i className="ti-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <i className="ti-twitter-alt"></i>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <i className="ti-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href="https://pinterest.com" target="_blank" aria-label="Pinterest">
                <i className="ti-pinterest"></i>
              </Link>
            </li>
            <li>
              <Link href="https://vimeo.com" target="_blank" aria-label="Vimeo">
                <i className="ti-vimeo-alt"></i>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()}. All rights reserved by Abalogu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
