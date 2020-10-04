import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  *{
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const theme = {
  colors: {
    primary: "#355C7D",
    secondary: "#C06C84",
  },
  fonts: {
    light: "#FFFFFF",
    dark: "#000000",
    highlight: "#FFCC00",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
