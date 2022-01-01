import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Menu } from '../src/components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Menu />
    <Component {...pageProps} />
  </>
);

export default MyApp;
