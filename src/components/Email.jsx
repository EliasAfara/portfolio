import React from "react";
import styled from "styled-components";
import { contactInfo } from "../config";
import Side from "./Side";

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #a8b2d1;
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--body-font);
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    color: inherit;

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var(--title-color-dark);
    }
  }
`;

const Email = () => (
  <Side orientation='right'>
    <StyledLinkWrapper>
      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
    </StyledLinkWrapper>
  </Side>
);

export default Email;
