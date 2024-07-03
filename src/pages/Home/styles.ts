import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;

  span {
    ${({ theme }) => theme.typography.titleL};
    color: ${({ theme }) => theme.colors.title};
  }
`