import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/images/logo.png';

const navLinks = [
   { path: '/home', display: 'Home' },
   { path: '/about', display: 'About' },
   { path: '/tours', display: 'Tours' },
];

const Header = () => {
   const headerRef = useRef(null);
   const menuRef = useRef(null);

   const stickyHeaderFunc = () => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 80) {
            headerRef.current.classList.add('sticky__header');
         } else {
            headerRef.current.classList.remove('sticky__header');
         }
      });
   };

   useEffect(() => {
      stickyHeaderFunc();
      return () => window.removeEventListener('scroll', stickyHeaderFunc);
   }, []);

   const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

   return (
      <header className='header' ref={headerRef}>
         <div className="logo">
            <img src={Logo} alt="Logo" />
         </div>
         <nav className="navigation" ref={menuRef}>
            <div className="menu-container">
               <ul className="menu">
                  {navLinks.map((item, index) => (
                     <li className="nav__item" key={index}>
                        <NavLink to={item.path} activeClassName="active__link">
                           {item.display}
                        </NavLink>
                     </li>
                  ))}
               </ul>
            </div>
            <div className='menu-container1'>
            <ul className="menu-btn">
               <li className="nav__item1" >
                  <Link to='/login'>Login</Link>
               </li>
               <li className="nav__item2">
                <Link to='/register'>Register</Link>
               </li>
            </ul>
            </div>
         </nav>
         <span className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
         </span>
      </header>
   );
};

export default Header;
