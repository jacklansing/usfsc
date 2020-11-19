import { Theme, ThemeProvider } from 'theme-ui';
import { AnimatePresence } from 'framer-motion';
import theme from '../styles/theme';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme as Theme}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
