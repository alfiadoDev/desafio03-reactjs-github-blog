import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;

  header {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    h2 {
      ${({ theme }) => theme.typography.titleS};
      color: ${({ theme }) => theme.colors.subtitle};
    }

    span {
      ${({ theme }) => theme.typography.textS};
      color: ${({ theme }) => theme.colors.span};
    }
  }

  input {
    margin-top: 0.75rem;
    flex: 1;
    border-radius: 6px;
    border: 0;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.input};
    ${({ theme }) => theme.typography.textM};
    color: ${({ theme }) => theme.colors.label};

    &::placeholder {
      color: ${({ theme }) => theme.colors.label};
    }
  }
`