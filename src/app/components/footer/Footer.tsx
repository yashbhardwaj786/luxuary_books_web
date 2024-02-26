// components/Footer.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { StyledFooter, MenuItem } from './style'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Facebook from './facebook'
import Twitter from './twitter'
import Linkedin from './Linkedin'
import Insta from './Insta'
import { Console } from "console";

const Footer = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the breakpoint as needed
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);
  return (
    <StyledFooter>
      <img className="image"
        src='/images/logo1.png'
        alt="Logo" />
      <div className='option-container'>

        {isMobile ? (
          <ul className="sidebar-nav text-center leading-relaxed text-xl">
            <li>
              <NavItem href="/aboutus" isActive={pathname === '/aboutus'}>
                About Us
              </NavItem>
            </li>
            <li>
              <NavItem href="/shop" isActive={pathname === '/shop'}>
                Shop
              </NavItem>
            </li>
            <li>
              <NavItem href="/contactus" isActive={pathname === '/contactus'}>
                Contact Us
              </NavItem>
            </li>
            <li>
              <NavItem href="/casestudies" isActive={pathname === '/casestudies'}>
                Case studies
              </NavItem>
            </li>
            <li>
              <NavItem href="/privacypolicy" isActive={pathname === '/privacypolicy'}>
                privacy policy
              </NavItem>
            </li>
          </ul>
        )

          : (
            <ul className="hidden md:flex">
              <NavItem href="/aboutus" isActive={pathname === '/aboutus'}>
                About Us
              </NavItem>
              <NavItem href="/shop" isActive={pathname === '/shop'}>
                Shop
              </NavItem>
              <NavItem href="/contactus" isActive={pathname === '/contactus'}>
                Contact Us
              </NavItem>
              <NavItem href="/casestudies" isActive={pathname === '/casestudies'}>
                Case studies
              </NavItem>
              <NavItem href="/privacypolicy" isActive={pathname === '/privacypolicy'}>
                privacy policy
              </NavItem>
            </ul>
          )}


      </div>
      <div className='image-container'>
        <div className='social-icon'>
          <Facebook isMobile={isMobile}/>
        </div>
        <div className='social-icon'>
          <Twitter isMobile={isMobile}/>
        </div>
        <div className='social-icon'>
          <Linkedin isMobile={isMobile}/>
        </div>
        <div className='social-icon'>
          <Insta isMobile={isMobile}/>
        </div>
      </div>
    </StyledFooter>
  );
};

function NavItem({ href, isActive, children }) {
  return (
    <li>
      <Link href={href}>
        <MenuItem isActive={isActive}>{children}</MenuItem>
      </Link>
    </li>
  );
}


export default Footer;
