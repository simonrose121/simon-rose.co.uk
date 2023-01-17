import Script from 'next/script';
import * as React from 'react';

export const Analytics: React.FC = () => {
	const gtagId = 'G-169KYJLKHH';

	return (
		<>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${gtagId}');
				`}
			</Script>
		</>
	);
};