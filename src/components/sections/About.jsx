import React from "react";
import styled from "styled-components";

// import AboutImg from "@/assets/EliasAfara.jpeg";
import AboutImg from "@/assets/EliasAfara-transparent.png";

const StyledAboutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-auto-flow: dense;
    grid-gap: 50px;

    @media (max-width: 950px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    @media (max-width: 450px) {
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledAboutImage = styled.img`
  width: 350px;
  border-radius: 8px;
  justify-self: center;

  // remove image white background
  // mix-blend-mode: multiply;

  //   unselectable
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media (max-width: 950px) {
    margin: 40px auto 0;
  }
`;

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "Node.js",
    "React",
    "Vue.js",
    "MongoDB",
  ];
  return (
    <StyledAboutSection id='about'>
      <h2 className='numbered-heading'>About Me</h2>
      <div className='inner'>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "fit-content",
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <StyledAboutImage src={AboutImg} alt='about' draggable='false' />
            <div
              style={{
                position: "absolute",
                width: "10rem",
                zIndex: "-1",
                bottom: 0,
                left: 0,
                marginBottom: "-2.7rem",
                marginLeft: "-2.4rem",
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                viewBox='0 0 335.2 335.2'
                width='120'
                height='120'
              >
                <circle
                  fill='none'
                  stroke='#d0e5ff'
                  stroke-width='75'
                  cx='167.6'
                  cy='167.6'
                  r='130.1'
                ></circle>
              </svg>
            </div>
          </div>
        </div>

        <StyledText>
          <div>
            <p>
              Hello! My name is Elias, and I have a true passion for bringing
              ideas to life on the internet. During my journey in web
              development, I have explored various aspects of this dynamic field
              &amp; I find great joy in the process of crafting elegant and
              functional solutions that not only meet user needs but also exceed
              their expectations.
            </p>

            <p>
              Fast-forward to today, I am proud to have successfully completed
              my{" "}
              <a
                href='https://www.epita.fr/en/'
                target='_blank'
                rel='noreferrer'
              >
                master's studies
              </a>
              , specializing in Software Engineering. This academic pursuit has
              equipped me with a solid understanding of web technologies,
              industry best practices, and the ability to adapt to emerging
              trends. Additionally, I had the privilege of undertaking a
              transformative 6-month internship at{" "}
              <a
                href='https://rangor.poker/en'
                target='_blank'
                rel='noreferrer'
              >
                Rangor Poker
              </a>
              , where I had hands-on experience collaborating with a talented
              team to deliver innovative web applications.
            </p>

            <p>
              Now, as I embark on the next chapter of my career, I am excited to
              channel my knowledge and skills into practical projects. I am
              actively seeking new opportunities to contribute to a dynamic
              organization that values creativity, collaboration, and continuous
              growth. I am particularly drawn to positions that allow me to work
              on challenging problems, leverage cutting-edge technologies, and
              contribute to meaningful projects.
            </p>

            <p>
              If you are looking for a dedicated and resourceful web developer
              with a keen eye for detail and a passion for creating exceptional
              digital experiences, I would love to{" "}
              <a
                href='https://www.linkedin.com/in/eliasafara'
                target='_blank'
                rel='noreferrer'
              >
                connect
              </a>
              .
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className='skills-list'>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
