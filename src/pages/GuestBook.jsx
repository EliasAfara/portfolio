import React from "react";
import styled from "styled-components";
import Giscus from "@giscus/react";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 30px 30px 30px;

  .inner {
    display: flex;
    align-items: center;
    flex-direction: column;

    .form-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 30px;

      @media (max-width: 768px) {
        padding: 0;
      }

      @media (max-width: 640px) {
        flex-direction: column-reverse;
        align-items: center;
        gap: 2rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 80px 0 0 0;
  }

  @media (max-width: 600px) {
    padding: 80px 0 0 0;
  }
`;

const GuestBook = () => {
  const projectRepo = import.meta.env.VITE_GISCUS_PROJECT_REPO;
  const projectRepoId = import.meta.env.VITE_GISCUS_PROJECT_REPO_ID;
  const discussionCategoryName = import.meta.env
    .VITE_GISCUS_DISCUSSION_CATEGORY_NAME;
  const discussionCategoryId = import.meta.env
    .VITE_GISCUS_DISCUSSION_CATEGORY_ID;

  return (
    <StyledContainer>
      <h2 className='in-between-heading'>Guestbook</h2>
      <div className='inner'>
        <Giscus
          id='comments'
          repo={projectRepo}
          repoId={projectRepoId}
          category={discussionCategoryName}
          categoryId={discussionCategoryId}
          mapping='specific'
          term='Guestbook main discussion'
          reactionsEnabled='1'
          emitMetadata='1'
          inputPosition='top'
          theme='light_protanopia'
          lang='en'
          loading='lazy'
        />
      </div>
    </StyledContainer>
  );
};

export default GuestBook;
