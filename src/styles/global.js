import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *,
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        list-style-type: none;
    }

    ul {
  list-style: none;
    }
`