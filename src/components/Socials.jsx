import React from "react";
import styled from "styled-components";
import { socialMedia } from "../data";
import Side from "./Side";
import DynamicIcon from "./DynamicIcon";

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #a8b2d1;
    // background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Socials = () => {
  return (
    <Side orientation='left'>
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ url, name, icon }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target='_blank' rel='noreferrer'>
                <DynamicIcon name={icon} />
              </a>
            </li>
          ))}
      </StyledSocialList>
    </Side>
  );
};

export default Socials;
