import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: 100vh;
`;

const StyledTitle = styled.h1`
  color: #d4e0e7;
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
  text-shadow: -1px -1px 0 #d0d5d8;
`;

const StyledSubtitle = styled.h2`
  color: #dde7ec;
  font-size: clamp(30px, 5vw, 60px);
  font-weight: 600;
  text-shadow: -1px -1px 0 #d0d5d8;
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
