import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: 100vh;
`;

const StyledTitle = styled.h1`
  color: var(--moonstone-blue);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;

const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;

const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

const PageNotFound = () => {
  return (
    <StyledContainer>
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>Page Not Found</StyledSubtitle>
      <StyledHomeButton to='/'>Go Home</StyledHomeButton>
    </StyledContainer>
  );
};

export default PageNotFound;
