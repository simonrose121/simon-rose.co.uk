import type { AppProps } from 'next/app';

import { Analytics } from 'Components';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Analytics />
		<Component {...pageProps} />
	</>
);

export default App;
