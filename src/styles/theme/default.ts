import { css } from "styled-components";

export const defaultTheme = {
  colors: {
    background: '#071422',
    input: '#040F1A',
    profile: '#0B1B2B',
    post: '#112131',
    border: '#1C2F41',
    label: '#3A536B',
    span: '#7B96B2',
    text: '#AFC2D4',
    subtitle: '#C4D4E3',
    title: '#E7EDF4',
    blue: '#3294F8'
  },
  typography: {
    titleL: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 700;
    `,
    titleM: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: 700;
  `,
    titleS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.125rem;
      line-height: 160%;
      font-weight: 700;
  `,
    textM: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
  `,
    textS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 400;
  `,
    link: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 700;
  `,
  }
} as const