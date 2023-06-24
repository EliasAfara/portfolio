import React from "react";
import styled from "styled-components";
import { contactInfo, connectSection } from "@/data";

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--moonstone-blue);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .connect-action {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  return (
    <StyledContactSection id='contact'>
      <h2 className='numbered-heading overline'>What's Next?</h2>
      <h2 className='title'>Get In Touch</h2>

      {connectSection && connectSection.openToWork
        ? connectSection.openToWorkMessage
        : connectSection.notOpenToWorkMessage}

      <div>
        <a className='connect-action' href={`mailto:${contactInfo.email}`}>
          Say Hello
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          className='connect-action'
          href='https://www.linkedin.com/in/eliasafara'
        >
          Connect
        </a>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
