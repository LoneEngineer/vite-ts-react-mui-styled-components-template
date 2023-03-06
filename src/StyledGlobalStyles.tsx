import { createGlobalStyle, css } from 'styled-components/macro'

// todo: how to override DefaultTheme types correcly for IDEA ??? see also styled.d.ts
export const StyledGlobalStyles = createGlobalStyle`
  ${({theme}) => css`
    #h1 {
      font-size: 14px;
      background-color: ${theme.palette.background.default};
    }
  `}
`
