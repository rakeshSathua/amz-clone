import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/styles/globalstyles";  

const theme: DefaultTheme = {
  colors: {
    black : "#000",
    white : "#fff",
    background : "#EAEDED",
    orange : "orange",
    navBg : "#131921",

  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
