import styled from "styled-components";

export const IssueInfoConainer = styled.div`
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors.profile};
  box-shadow: 0px 2px 28px rgba(0,0,0,0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    ${({ theme }) => theme.typography.titleL};
    color: ${({ theme }) => theme.colors.title};
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      ${({ theme }) => theme.typography.textM};
      color: ${({ theme }) => theme.colors.span};

      svg {
        color: ${({ theme }) => theme.colors.label};
      }
    }
  }
`

export const IssueContainer = styled.div`
  padding: 2rem 2.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
  
  p {
    ${({ theme }) => theme.typography.textM};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    ${({ theme }) => theme.typography.textM};
    color: ${({ theme }) => theme.colors.blue};
  }

  img {
    width: 100%;
  }

  h3 {
    ${({ theme }) => theme.typography.titleM};   
    color: ${({ theme }) => theme.colors.title};   
  }

  pre {
    display: flex;
    align-items: center;
    justify-content: flex-start;


    background: ${({ theme }) => theme.colors.post};
    border-radius: 2px;
    padding: 1rem;

    div {
      background: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }

  code {
    font-style: none !important;
    font-weight: 400 !important;
    font-size: 1rem !important;
    line-height: 160%;
  }
`