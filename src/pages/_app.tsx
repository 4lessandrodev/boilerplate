import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App ({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>4lessandrodev - Boilerplate</title>
				<link rel="shortcut icon" href="/img/shortcut-icon.png" />
				<link rel="apple-touch-icon" href="/img/icon.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#ffffff" />
				<meta
					name="description"
					content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
				/>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
