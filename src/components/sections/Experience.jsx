import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { workExperience } from "@/config";

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };
  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  return (
    <StyledJobsSection id='experience'>
      <h2 className='numbered-heading'>Where I've Worked</h2>
      <div className='inner'>
        <StyledTabList
          role='tablist'
          aria-label='Job tabs'
          onKeyDown={(e) => onKeyDown(e)}
        >
          {workExperience &&
            workExperience.map(
              (
                { date, title, company, location, range, url, activities },
                i
              ) => {
                return (
                  <StyledTabButton
                    key={i}
                    isactivetab={activeTabId === i ? "true" : "false"}
                    onClick={() => setActiveTabId(i)}
                    ref={(el) => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role='tab'
                    tabIndex={activeTabId === i ? "0" : "-1"}
                    aria-selected={activeTabId === i ? true : false}
                    aria-controls={`panel-${i}`}
                  >
                    <span>{company}</span>
                  </StyledTabButton>
                );
              }
            )}
          <StyledHighlight activetabid={activeTabId} />
        </StyledTabList>
        {/*  */}
        <StyledTabPanels>
          {workExperience &&
            workExperience.map(
              ({ title, company, location, range, url, activities }, i) => {
                return (
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role='tabpanel'
                    tabIndex={activeTabId === i ? "0" : "-1"}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}
                    key={i}
                  >
                    <h3>
                      <span>{title}</span>
                      <span className='company'>
                        &nbsp;@&nbsp;
                        <a
                          href={url}
                          className='inline-link'
                          target='_blank'
                          rel='noreferrer'
                        >
                          {company}
                        </a>
                      </span>
                    </h3>

                    <p className='range'>
                      {range} | {location}
                    </p>

                    <ul>
                      {activities &&
                        activities.map((activity, i) => {
                          return (
                            <li key={i}>
                              <span>{activity}</span>
                            </li>
                          );
                        })}
                    </ul>
                  </StyledTabPanel>
                );
              }
            )}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 100%;
    // padding-left: 50px;
    // margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: 100%;
    // padding-left: 25px;
    // margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--chinese-black);
  background-color: transparent;
  color: ${({ isactivetab }) =>
    isactivetab ? "var(--moonstone-blue)" : "var(--slate)"};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    max-width: 180px;
    min-width: 180px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--chinese-black);
    text-align: center;
  }

  @media (max-width: 390px) {
    max-width: 160px;
    min-width: 160px;
  }

  &:hover,
  &:focus {
    background-color: #e2f2f4;
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--moonstone-blue);
  transform: translateY(
    calc(${({ activetabid }) => activetabid} * var(--tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 180px;
    height: 2px;
    // margin-left: 50px;
    transform: translateX(calc(${({ activetabid }) => activetabid} * 180px));
  }

  @media (max-width: 390px) {
    width: 100%;
    max-width: 160px;
    transform: translateX(calc(${({ activetabid }) => activetabid} * 160px));
  }
  @media (max-width: 480px) {
    // margin-left: 25px;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--moonstone-blue);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

export default Experience;
