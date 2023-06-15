import React from "react";
import "./about.css";
import AboutImg from "../../assets/EliasAfara.jpeg";
import Resume from "../../assets/Resume_EliasAfara_2023_EN.pdf";

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>A short introduction</span>
      <div className='about__container container grid'>
        <img src={AboutImg} alt='about' className='about__img' />
        <div className='about__data'>
          <p className='about__description'>
            I create applications highlighting minimal design and friendly UI/UX
            interfaces.
          </p>
          <a download='' href={Resume} className='button button--flex'>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
