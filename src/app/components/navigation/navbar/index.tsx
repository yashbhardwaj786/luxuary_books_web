import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { usePathname } from 'next/navigation';
import {StyledNavigationContainer, StyledNavItem} from './style'


const Navbar = ({ toggle }: { toggle: () => void }) => {
  const pathname = usePathname();
  console.log('hh yashal Current pathname:', {pathname})
  return (
    <>
      <StyledNavigationContainer className="sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-16">
              <li className={pathname === '/aboutus' ? 'active' : ''}>
                <Link href="/aboutus">
                  <StyledNavItem>About Us</StyledNavItem>
                </Link>
              </li>
              <li className={pathname === '/shop' ? 'active' : ''}>
                <Link href="/shop">
                  <StyledNavItem>Shop</StyledNavItem>
                </Link>
              </li>
              <li className={pathname === '/contactus' ? 'active' : ''}>
                <Link href="/contactus">
                  <StyledNavItem>Contact Us</StyledNavItem>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </StyledNavigationContainer>
    </>
  );
};

export default Navbar;
