import React from "react";
import styled from "styled-components";
import "./SkillHexagon.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaTerminal,
  FaServer,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiPostman, SiPostgresql } from "react-icons/si";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";

const StyledSkillsSection = styled.section`
  max-width: 900px;

  .inner {
    max-width: 750px;
    margin: 0 auto;
  }
`;

const Skills = () => {
  const [isHovered, setHovered] = React.useState({
    hovered: false,
    index: null,
  });

  const skills = [
    { name: "HTML", icon: FaHtml5, color: "#E44D26" },
    { name: "CSS", icon: FaCss3Alt, color: "#264de4" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: FaServer, color: "#000000" },
    { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Bash", icon: FaTerminal, color: "#000000" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
  ];

  return (
    <StyledSkillsSection id='skills'>
      <h2 className='left-aligned-heading'>Skills</h2>
      <div className='inner'>
        <ResponsiveHoneycomb
          className='hexagon-container'
          size={56}
          items={skills}
          renderItem={(item, index) => (
            <>
              <div
                id={`my-tooltip-anchor-${index}`}
                onMouseEnter={() => setHovered({ hovered: true, index: index })}
                onMouseLeave={() =>
                  setHovered({
                    hovered: false,
                    index: null,
                  })
                }
              >
                <Hexagon
                  key={`hexagon-${index}`}
                  className='hexagon'
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: `${
                      isHovered.hovered && isHovered.index === index
                        ? "#fff"
                        : item.color
                    }`,
                    inset: 0,
                  }}
                >
                  {item.icon({
                    className: "skill-icon",
                    style: {
                      color: `${
                        isHovered.hovered && isHovered.index === index
                          ? item.color
                          : "#fff"
                      }`,
                      userSelect: "none",
                      fontSize: "2.2rem",
                    },
                  })}
                </Hexagon>
              </div>

              <ReactTooltip
                anchorSelect={`#my-tooltip-anchor-${index}`}
                content={item.name}
                effect='float'
                place='top'
                style={{
                  marginTop: "15px",
                  borderRadius: "0.5rem",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </>
          )}
        />
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;
