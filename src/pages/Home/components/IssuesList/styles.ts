import styled from "styled-components";

export const IssueListContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const IssueCardContainer = styled.a`
  padding: 2rem 1.8rem 2rem 2rem;
  background: ${({ theme }) => theme.colors.post};
  border-radius: 10px;

  text-decoration: none;

  &:visited {
    text-decoration: none !important;
  }

  box-shadow: 0 4px 4px rgba(0,0,0,0.25);

  border: 1px hidden;
  width: 26rem;
  height: 16.25rem;

  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.label};
  }

  header {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;

    h1 {
      ${({ theme }) => theme.typography.titleM};
      color: ${({ theme }) => theme.colors.title};
      width: 17rem;
    }

    span {
      ${({ theme }) => theme.typography.textS};
      color: ${({ theme }) => theme.colors.span};
      margin-top: 0.25rem;
    }
  }

  p {
    ${({ theme }) => theme.typography.textM};
    color: ${({ theme }) => theme.colors.text};
    margin-top: 1.25rem;
    width: 100%;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`