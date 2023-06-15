import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { education } from "../../config";
import styled from "styled-components";

const StyledRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--text-color);
  border-radius: 50%;
`;
const StyledLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--text-color);
  transform: translate(6px, -7px);
`;

const StyledEducationSection = styled.section`
  max-width: 780px;

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledDataDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
`;

const StyledTitle = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
`;
const StyledSubtitle = styled.span`
  display: inline-block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-1);
`;

const StyledCalendarText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--small-font-size);
`;

const HiOutlineCalendarStyled = styled(HiOutlineCalendar)`
  vertical-align: baseline;
  font-size: 1rem;
  width: 20px;
  margin-right: var(--mb-0-25);
`;

const Education = () => {
  return (
    <StyledEducationSection id='education'>
      <h2 className='numbered-heading'>Where I've Studied</h2>

      <div className='inner'>
        <div>
          {education.map((item, index) => (
            <div style={{ display: "block" }} key={index}>
              <StyledDataDisplay>
                {index % 2 !== 0 && (
                  <>
                    <div></div>
                    <div>
                      <StyledRounder />
                      {index !== education.length - 1 && <StyledLine />}
                      {/* <StyledLine /> */}
                    </div>
                  </>
                )}
                <div>
                  <StyledTitle>
                    <a
                      href={item.schoolURL}
                      aria-label={item.schoolName}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {item.schoolName}
                    </a>
                  </StyledTitle>
                  <StyledSubtitle>{item.degree}</StyledSubtitle>
                  <StyledCalendarText>
                    <HiOutlineCalendarStyled />
                    {item.date} | {item.location}
                  </StyledCalendarText>
                </div>

                {index % 2 === 0 && (
                  <div>
                    <StyledRounder />
                    {index !== education.length - 1 && <StyledLine />}
                  </div>
                )}
              </StyledDataDisplay>
            </div>
          ))}
        </div>
      </div>
    </StyledEducationSection>
  );
};

export default Education;
