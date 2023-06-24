import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DynamicIcon from "./DynamicIcon";
import { socialMedia } from "../data";
import { getRepoStarsAndForks } from "../utils/getRepoStarsAndForks";

import { FaRegStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    // color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  //   color: var(--light-slate);
  //   font-family: var(--font-mono);
  //   font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;
const github_token = import.meta.env.VITE_GITHUB_REPO_TOKEN;

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  const repoDetails = async () => {
    const { stars, forks } = await getRepoStarsAndForks(
      "EliasAfara",
      "portfolio",
      github_token
    );
    console.log({ stars, forks });
    setGitHubInfo({
      stars,
      forks,
    });
  };

  useEffect(() => {
    if (!import.meta.env.PROD) {
      // ref: https://vitejs.dev/guide/env-and-mode.html
      // {boolean} whether the app is running in production.
      return;
    }

    repoDetails();
  }, []);

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ url, name, icon }, i) => (
              <li key={i}>
                <a
                  href={url}
                  aria-label={name}
                  target='_blank'
                  rel='noreferrer'
                >
                  <DynamicIcon name={icon} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabIndex='-1'>
        <a
          href='https://github.com/EliasAfara'
          aria-label='Designed and built by Elias Afara'
          target='_blank'
          rel='noreferrer'
        >
          <div>Designed &amp; Built by Elias Afara</div>

          {import.meta.env.PROD &
          (githubInfo.stars >= 0) &
          (githubInfo.forks >= 0) ? (
            <div className='github-stats'>
              <span>
                <FaRegStar />
                <span>{githubInfo.stars}</span>
              </span>
              <span>
                <BiGitRepoForked />
                <span>{githubInfo.forks}</span>
              </span>
            </div>
          ) : null}
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
