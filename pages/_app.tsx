import type { AppProps } from 'next/app';
import { cssVars } from './_app.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={cssVars}>
			<Component {...pageProps} />
		</div>
	);
}
