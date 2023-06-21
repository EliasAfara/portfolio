import React from "react";
import styled from "styled-components";
import { projects } from "@/config";

import { FiGithub, FiExternalLink, FiYoutube } from "react-icons/fi";

const StyledProjectsSection = styled.section`
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const Projects = () => {
  const loadImage = (imageName) => {
    return new URL(`../../assets/${imageName}`, import.meta.url).href;
    // vite react dynamic import image - dynamic URL pattern via template literal
    // ref: https://vitejs.dev/guide/assets.html#the-public-directory
  };

  return (
    <StyledProjectsSection id='projects'>
      <h2 className='numbered-heading'>Projects</h2>
      <StyledProjectsGrid>
        {projects &&
          projects.map(
            (
              {
                title,
                cover_name,
                github,
                external,
                youtube,
                tech,
                description,
              },
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
                          <a href={github} aria-label='GitHub Link'>
                            <FiGithub />
                          </a>
                        )}
                        {external && (
                          <a
                            href={external}
                            aria-label='External Link'
                            className='external'
                          >
                            <FiExternalLink />
                          </a>
                        )}
                        {youtube && (
                          <a
                            href={youtube}
                            aria-label='youtube Link'
                            className='external'
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
                      <img src={image} alt={title} className='img' />
                    </a>
                  </div>
                </StyledProject>
              );
            }
          )}
      </StyledProjectsGrid>
    </StyledProjectsSection>
  );
};

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
    color: var(--green);
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

    .cta {
      ${({ theme }) => theme.mixins.smallButton};
      margin: 10px;
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
      //   background-color: var(--green);
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
