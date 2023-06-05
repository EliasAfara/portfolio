import React, { useState } from "react";
import "./header.css";
import * as Icons from "react-icons/hi";

import config from "../../config";

const DynamicHiIcon = ({ name }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) return <Icons.HiBan className='nav__icon' />;
  return <IconComponent className='nav__icon' />;
};

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const navLinks = config.navLinks;

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className='header'>
      <nav className='nav' style={{ padding: "0px 50px" }}>
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
                    onClick={() => setActiveNav(`${id}`)}
                    className={
                      activeNav === id ? "nav__link active-link" : "nav__link"
                    }
                  >
                    {/* <HiOutlineHome className='nav__icon' /> */}
                    <DynamicHiIcon name={icon} />
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <Icons.HiX className='nav__close' onClick={() => showMenu(!Toggle)} />
        </div>
        <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
          <Icons.HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
