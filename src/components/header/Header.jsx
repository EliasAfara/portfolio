import React, { useState } from "react";
import "./header.css";
import { navLinks } from "@/config";
import DynamicIcon from "../DynamicIcon";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import styled from "styled-components";
import Resume from "@/assets/Resume_EliasAfara_2023_EN.pdf";

const ResumeLink = styled.a`
  ${({ theme }) => theme.mixins.smallButton};
  margin-left: 15px;
  font-size: var(--fz-xs);

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const handleNavItemClick = (id) => {
    setActiveNav(id);
    showMenu(false);
  };

  return (
    <header className='header'>
      <nav className='nav'>
        <a href='/' className='nav__logo'>
          <span className='grey-color'> &lt;</span>
          <span className='logo-name'>Elias</span>
          <span className='grey-color'>/&gt;</span>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            {navLinks.map(({ id, name, url, icon }, index) => {
              return (
                <li className='nav__item' key={index}>
                  <a
                    href={url}
                    onClick={() => handleNavItemClick(`${id}`)}
                    className={
                      activeNav === id ? "nav__link active-link" : "nav__link"
                    }
                  >
                    <DynamicIcon name={icon} className={"nav__icon"} />
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* TODO: Lofi music player to be added here */}
          <ResumeLink href={Resume} target='_blank' rel='noopener noreferrer'>
            Resume
          </ResumeLink>
        </div>
        {Toggle && (
          <HiX className='nav__close' onClick={() => showMenu(!Toggle)} />
        )}
        {/* {Toggle && <div className='nav__overlay' />} */}

        <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
          <HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
