import React from "react";
import styled, { keyframes } from "styled-components";
import EliasAfara from "@/assets/EliasAfara-transparent.png";

const StyledTextDiv = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  align-items: flex-start;
  flex-direction: column;
`;

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  // background-color: rgb(48, 89, 89);
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--moonstone-blue);
    // font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    max-width: 540px;
  }

  .learn-more-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const profileAnimation = keyframes`
  0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
`;

const StyledImgDiv = styled.div`
  background: url(${EliasAfara});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* filter: grayscale(.5); */
  box-shadow: inset 0 0 0 5px rgb(225 225 225 / 30%);
  order: 1;
  justify-self: center;
  width: 300px;
  height: 300px;
  border: 2px solid var(--chinese-black);
  animation: ${profileAnimation} 6s ease-in-out infinite;

  // mix-blend-mode: multiply;

  @media (max-width: 992px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 480px) {
  }
`;

const one = <h1>Hi, my name is</h1>;
const two = <h2 className='big-heading'>Elias Afara.</h2>;
const three = <h3 className='medium-heading'>I build things for the web.</h3>;
const four = (
  <p style={{ marginTop: "15px" }}>
    I am a junior software engineer poised to make a significant impact in the
    field of web development. Armed with a strong technical foundation, a
    genuine passion for continuous growth, and a proven track record of
    delivering exceptional results, I confidently present a unique combination
    of skills, adaptability, and meticulous attention to detail.
  </p>
);

const five = (
  <p style={{ marginTop: "15px" }}>
    These qualities position me as a standout candidate, ready to excel in web
    development opportunities and contribute to transformative projects.
  </p>
);

const six = (
  <a className='learn-more-link' href='/#about'>
    Learn More!
  </a>
);

const items = [one, two, four, five, six];

const Home = () => {
  return (
    <StyledHeroSection id='home'>
      <StyledTextDiv>
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      </StyledTextDiv>
      <StyledImgDiv />
    </StyledHeroSection>
  );
};

export default Home;
