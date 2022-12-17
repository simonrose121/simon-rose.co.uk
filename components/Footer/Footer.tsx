import * as React from 'react';

export const Footer: React.FC = () => {
	const currentYear = new Date().getUTCFullYear();

	return (
		<footer id="footer" className="relative z-50 bg-black mt-24">
			<div className="py-8 text-center">
				<p className="text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
					{`${currentYear} Simon Rose. All Rights Reserved.`}
				</p>
			</div>
		</footer>
	);
};
