import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</Layout>
	);
}

export default MyApp;
