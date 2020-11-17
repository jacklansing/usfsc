import { Theme, ThemeProvider } from 'theme-ui';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme as Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
