import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import styled from "styled-components";
import DynamicIcon from "../DynamicIcon";
import { navLinks } from "@/data";
import Resume from "@/assets/Resume_EliasAfara_2023_EN.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./header.css";

const ResumeLink = styled.a`
  ${({ theme }) => theme.mixins.smallButton};
  margin-left: 15px;
  font-size: var(--fz-xs);

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const NavigationLink = ({
  id,
  url,
  routerLink,
  children,
  activeNav,
  handleNavItemClick,
  isHomePage,
}) => {
  const commonProps = {
    onClick: () => handleNavItemClick(id),
    className: activeNav === id ? "nav__link active-link" : "nav__link",
  };

  if (routerLink) {
    return (
      <Link to={url} {...commonProps}>
        {children}
      </Link>
    );
  } else {
    if (isHomePage) {
      return (
        <AnchorLink href={url} {...commonProps}>
          {children}
        </AnchorLink>
      );
    } else {
      return (
        <NavLink to='/' {...commonProps}>
          {children}
        </NavLink>
      );
    }
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = (id) => {
    setActiveNav(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const targetSection = document.getElementById(activeNav.substring(1));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <header className='header'>
      <nav className='nav'>
        <Link to='/' className='nav__logo'>
          <span className='grey-color'> &lt;</span>
          <span className='logo-name'>Elias</span>
          <span className='grey-color'>/&gt;</span>
        </Link>

        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className='nav__list'>
            {navLinks.map(({ id, name, url, icon, routerLink }, index) => (
              <li className='nav__item' key={index}>
                <NavigationLink
                  id={id}
                  url={url}
                  routerLink={routerLink}
                  activeNav={activeNav}
                  handleNavItemClick={handleNavItemClick}
                  isHomePage={isHomePage}
                >
                  <DynamicIcon name={icon} className='nav__icon' />
                  {name}
                </NavigationLink>
              </li>
            ))}
          </ul>
          {/* TODO: Lofi music player to be added here */}
          <ResumeLink href={Resume} target='_blank' rel='noopener noreferrer'>
            Resume
          </ResumeLink>
        </div>
        {isMenuOpen && (
          <HiX
            className='nav__close'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
        <div className='nav__toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
