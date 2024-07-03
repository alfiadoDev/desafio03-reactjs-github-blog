import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors.profile};
  box-shadow: 0px 2px 28px rgba(0,0,0,0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      ${({ theme }) => theme.typography.titleL}
      color: ${({ theme }) => theme.colors.title};
    }
  }

  p {
    ${({ theme }) => theme.typography.textM}
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0.5rem;
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    margin-top: 1.5rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      color: ${({ theme }) => theme.colors.subtitle};

      span {
        ${({ theme }) => theme.typography.textM};
      }
    }
  }
`