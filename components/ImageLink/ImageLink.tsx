import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import * as React from 'react';

type Props = {
	alt: string;
	src: StaticImageData;
	width: 150;
	height: 200;
	href: string;
};
export const ImageLink: React.FC<Props> = ({ alt, src, width, height, href }) => (
	<Link href={href}>
		<Image alt={alt} src={src} width={width} height={height} />
	</Link>
);
