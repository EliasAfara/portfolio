import React from "react";
import styled from "styled-components";
import { skills } from "@/data";
import { Tooltip } from "antd";

const StyledSkillsSection = styled.section`
  max-width: 900px;
  // background-color: aliceblue;

  .inner {
    max-width: 600px;
    height: 100%;
    margin: 100px auto -100px auto;

    @media (max-width: 768px) {
      margin-top: 80px;
      margin-bottom: -80px;
    }

    @media (max-width: 480px) {
      margin-top: 60px;
      margin-bottom: -60px;
    }

    .technologies {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      & > span {
        margin: 12px calc(1.5 * 12px);
      }
    }
  }
`;

const Skills = () => {
  return (
    <StyledSkillsSection id='skills'>
      <h2 className='left-aligned-heading'>Skills</h2>
      <div className='inner'>
        <div className='technologies'>
          {skills &&
            skills.map((skill, index) => (
              <Tooltip
                placement='top'
                title={skill.name}
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <span>
                  {skill.icon({
                    size: "46px",
                    style: {
                      // color: `${skill.color}`,
                      color: `var(--chinese-black)`,
                      userSelect: "none",
                      fontSize: "2.2rem",
                    },
                  })}
                </span>
              </Tooltip>
            ))}
        </div>
        {/*  */}
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;
