// components/Footer.tsx
"use client";
import React from 'react';
import { StyledFooter, MenuItem } from './style'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Facebook from './facebook'
import Twitter from './twitter'
import Linkedin from './Linkedin'
import Insta from './Insta'
import { Console } from "console";
import { commonMethod } from '../../utils/Utility'

interface NavItemProps {
  href: string; // Explicitly define the type as string
  isactive?: boolean;
  children: React.ReactNode;
}

const Footer = () => {
  const pathname = usePathname();
  const isMobile = commonMethod();


  return (
    <StyledFooter>
      <img className="image"
        src='/images/logo1.png'
        alt="Logo" />
      <div className='option-container'>

        {isMobile ? (
          <ul className="sidebar-nav text-center leading-relaxed text-xl">
            <li>
              <NavItem href="/aboutus" isactive={pathname === '/aboutus'}>
                About Us
              </NavItem>
            </li>
            <li>
              <NavItem href="/shop" isactive={pathname === '/shop'}>
                Shop
              </NavItem>
            </li>
            <li>
              <NavItem href="/contactus" isactive={pathname === '/contactus'}>
                Contact Us
              </NavItem>
            </li>
          </ul>
        )

          : (
            <ul className="hidden md:flex">
              <li>
                <NavItem href="/aboutus" isactive={pathname === '/aboutus'}>
                  About Us
                </NavItem>
              </li>
              <li>
                <NavItem href="/shop" isactive={pathname === '/shop'}>
                  Shop
                </NavItem>
              </li>
              <li>
                <NavItem href="/contactus" isactive={pathname === '/contactus'}>
                  Contact Us
                </NavItem>
              </li>

            </ul>
          )}


      </div>
      <div className='image-container'>
        <div className='social-icon'>
          <a href='https://www.facebook.com/profile.php?id=100063830482431'
            target="_blank">
            <Facebook ismobile={isMobile} />
          </a>
        </div>
        <div className='social-icon'>
          <a href='https://twitter.com/YashBhardwaj274'
            target="_blank">
            <Twitter ismobile={isMobile} />
          </a>
        </div>
        <div className='social-icon'>
          <a href='https://www.linkedin.com/in/yash-bhardwaj/'
            target="_blank">
            <Linkedin ismobile={isMobile} />
          </a>
        </div>
        <div className='social-icon'>
          <a href='https://www.instagram.com/warriorsexam'
            target='_blank'>
            <Insta ismobile={isMobile} />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

function NavItem({ href, isactive, children }: NavItemProps) {

  return (

    <Link href={href}>
      <MenuItem isactive={isactive}>
        <p className='paragraph'>{children}</p>
      </MenuItem>
    </Link>

  );
}


export default Footer;
