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
            <Image src={Logo} alt="Company Logo" width={100} height={50} />
          </Link>
        </div>
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()}. All rights reserved by Abalogu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
