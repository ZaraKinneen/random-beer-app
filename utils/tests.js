import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

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

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: ThemeWrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
