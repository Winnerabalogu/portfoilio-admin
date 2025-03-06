import React from 'react'
import Link from 'next/link'
import Logo from '../../public/images/foot-logo.png'
import Image from 'next/image'

const Footer = (props) => {
    return (
        <div className="tp-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <Link className="logo" href="/"><Image src={Logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                <li><Link href="https://web.facebook.com/xstonnershub"><i className="ti-facebook"></i></Link></li>
                                <li><Link href="https://x.com/WealthPrim82754"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link href="https://www.linkedin.com/in/abalogu-winner/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link href="https://www.instagram.com/nerdwave.io/"><i className="ti-instagram"></i></Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© 2025. All rights reserved by Abalogu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;