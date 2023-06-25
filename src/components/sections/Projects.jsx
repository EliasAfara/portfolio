import React from "react";
import styled from "styled-components";
import { projects, techColors } from "@/data";

import { FiGithub, FiExternalLink, FiYoutube } from "react-icons/fi";
// import { useWindowSize } from "@uidotdev/usehooks";

const StyledProjectsSection = styled.section`
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const loadImage = (imageName) => {
  return new URL(`../../assets/${imageName}`, import.meta.url).href;
  // vite react dynamic import image - dynamic URL pattern via template literal
  // ref: https://vitejs.dev/guide/assets.html#the-public-directory
};

const loadTechnologiesColors = (tech) => {
  return tech.map((technology) => {
    return {
      name: technology,
      color: techColors[technology],
    };
  });
};
const NormalProjectsCardsDisplay = () => (
  <StyledProjectsFlex>
    {projects &&
      projects.map(
        (
          { title, cover_name, github, external, youtube, tech, description },
          index
        ) => {
          const image = loadImage(cover_name);
          const newTech = loadTechnologiesColors(tech);
          return (
            <div className='project-card-wrapper' key={index}>
              <StyledProjectCard>
                <div
                  className='project-card__image'
                  // style={{ backgroundImage: `url(${image})` }}
                >
                  <img src={image} alt={title} draggable='false' />
                </div>
                <div className='project-card__content'>
                  <p className='card-content__title'>{title}</p>
                  <p className='card-content__description'>{description}</p>
                  <div className='card-content__technologies'>
                    {newTech.length && (
                      <ul className='technologies-list'>
                        {newTech.map(({ name, color }, i) => (
                          <li
                            key={i}
                            style={{
                              color: `${color}`,
                              border: `1px solid ${color}`,
                            }}
                          >
                            {name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <StyledProjectLinks>
                    {github && (
                      <a
                        href={github}
                        aria-label='GitHub Link'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FiGithub />
                      </a>
                    )}
                    {external && (
                      <a
                        href={external}
                        aria-label='External Link'
                        className='external'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FiExternalLink />
                      </a>
                    )}
                    {youtube && (
                      <a
                        href={youtube}
                        aria-label='youtube Link'
                        className='external'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FiYoutube />
                      </a>
                    )}
                  </StyledProjectLinks>
                </div>
              </StyledProjectCard>
            </div>
          );
        }
      )}
  </StyledProjectsFlex>
);

const GridProjectsCardsDisplay = () => {
  // not responsive
  return (
    <StyledProjectsGrid>
      {projects &&
        projects.map(
          (
            { title, cover_name, github, external, youtube, tech, description },
            index
          ) => {
            const image = loadImage(cover_name);
            return (
              <StyledProject key={index}>
                <div className='project-content'>
                  <div>
                    <p className='project-overline'>Featured Project</p>

                    <h3 className='project-title'>
                      <a href={external}>{title}</a>
                    </h3>

                    <div className='project-description'>
                      <p>{description}</p>
                    </div>

                    {tech.length && (
                      <ul className='project-tech-list'>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className='project-links'>
                      {github && (
                        <a
                          href={github}
                          aria-label='GitHub Link'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <FiGithub />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          aria-label='External Link'
                          className='external'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <FiExternalLink />
                        </a>
                      )}
                      {youtube && (
                        <a
                          href={youtube}
                          aria-label='youtube Link'
                          className='external'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <FiYoutube />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className='project-image'>
                  <a
                    href={external ? external : github ? github : "#"}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={image}
                      alt={title}
                      className='img'
                      draggable='false'
                    />
                  </a>
                </div>
              </StyledProject>
            );
          }
        )}
    </StyledProjectsGrid>
  );
};

const Projects = () => {
  return (
    <StyledProjectsSection id='projects'>
      <h2 className='left-aligned-heading'>Projects</h2>
      <NormalProjectsCardsDisplay />
    </StyledProjectsSection>
  );
};

const StyledProjectsFlex = styled.div`
  width: 100%;
  //   max-width: 960px;
  //   margin: 0 auto;
  // position: relative;
  background-color: transparent;

  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  .project-card-wrapper {
    flex-basis: 100%;
    max-width: 100%;
    padding: calc(0.2rem * 3) 0;

    animation: fade-in 1s;
    animation-play-state: running;
    position: relative;

    @media (min-width: 768px) {
      flex-basis: 33.3333333333%;
      max-width: 33.3333333333%;
    }

    @media (min-width: 576px) {
      flex-basis: 50%;
      max-width: 50%;
      padding: calc(0.2rem * 3);
    }
  }
`;

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;

  background-color: white;
  color: #3c3c60;

  box-shadow: 0 2px 1px -1px rgba(0, 0, 15, 0.2),
    0 1px 1px 0 rgba(0, 0, 15, 0.14), 0 1px 3px 0 rgba(0, 0, 15, 0.12);

  .project-card__image {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    img {
      overflow: hidden;
      background-size: cover;
    }
  }

  .project-card__content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100%;
    height: 100%;
    padding: calc(0.5rem * 2);

    .card-content__title {
      font-weight: 700;
      font-size: 1.25rem;
    }
    .card-content__content__description {
      font-size: 1rem;
    }

    .card-content__technologies {
      margin-top: 10px;

      .technologies-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        list-style: none;

        li {
          margin: 0 5px 5px 0;
          font-family: var(--font-mono);
          font-size: var(--fz-xs);
          white-space: nowrap;
          padding: 5px 14px;
          border-radius: 5px;
        }
      }
    }
  }
`;

const StyledProjectLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  margin-bottom: -10px;
  color: var(--slate);

  a {
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 10px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
    }

    .project-title {
      margin-left: auto;
    }

    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
  }

  .project-overline {
    margin: 10px 0;
    color: var(--moonstone-blue);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    width: 60%;
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);
  }

  .project-description {
    // ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    a {
      width: 100%;
      height: 100%;
      //   background-color: var(--moonstone-blue);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }
    }

    .img {
      border-radius: var(--border-radius);
      //   mix-blend-mode: multiply;
      //   filter: grayscale(100%) contrast(1) brightness(90%);
    }
  }
`;

export default Projects;
