import "@mantine/core/styles.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { createTheme, MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    primaryColor: "cyan",
  });

  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
