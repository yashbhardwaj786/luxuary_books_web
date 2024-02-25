// components/Footer.tsx
"use client";
import React from "react";
import { StyledFooter, MenuItem } from './style'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Facebook from './facebook'
import Twitter from './twitter'
import Linkedin from './Linkedin'
import Insta from './Insta'

const Footer = () => {
  const pathname = usePathname();
  return (
    <StyledFooter>
      <img className="image"
        src='/images/logo1.png'
        alt="Logo" />
      <div className='option-container'>
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
      </div>
      <div className='image-container'>
        <div className='social-icon'>
          <Facebook />
        </div>
        <div className='social-icon'>
          <Twitter />
        </div>
        <div className='social-icon'>
          <Linkedin />
        </div>
        <div className='social-icon'>
          <Insta />
        </div>
      </div>
    </StyledFooter>
  );
};

function NavItem({ href, isActive, children}) {
  return (
    <li>
      <Link href={href}>
        <MenuItem isActive={isActive}>{children}</MenuItem>
      </Link>
    </li>
  );
}


export default Footer;
