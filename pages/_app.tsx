import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "@/src/aws-exports";
Amplify.configure(awsExports);
import "@aws-amplify/ui-react/styles.css";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import { theme } from "@/theme";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator.Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Authenticator.Provider>
    </ThemeProvider>
  );
}
