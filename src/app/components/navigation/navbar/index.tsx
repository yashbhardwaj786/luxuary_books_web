import React, { useCallback } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { commonMethod } from '../../../utils/Utility'

interface NavItemProps {
  href: string;
  isactive?: boolean;
  children: React.ReactNode;
}

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const pathname = usePathname();
  const isMobile = commonMethod();

  return (
    <>
      <nav className={styles.navbar}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo isMobile={isMobile}/>
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-16">
              <NavItem href="/" isactive={pathname === '/'}>
                Home
              </NavItem>
              <NavItem href="/aboutus" isactive={pathname === '/aboutus'}>
              About author
              </NavItem>
              <NavItem href="/shop" isactive={pathname === '/shop'}>
                Shop
              </NavItem>
              <NavItem href="/contactus" isactive={pathname === '/contactus'}>
                Author contact
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

function NavItem({ href, isactive, children }: NavItemProps) {
  return (
    <li>
      <Link href={href}>
        <p style={{ fontFamily: isactive ? 'primary font bold, sans-serif' : 'primary font, sans-serif'}}>{children}</p>
      </Link>
    </li>
  );
}


export default Navbar;


