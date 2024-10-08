import Link from 'next/link';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import { PositionType } from 'Content';

// eslint-disable-next-line no-confusing-arrow
const List = ({ ordered, ...props }) =>
	// eslint-disable-next-line implicit-arrow-linebreak
	ordered ? <ol className="list-decimal ml-7" {...props} /> : <ul className="list-disc ml-7" {...props} />;

// eslint-disable-next-line jsx-a11y/anchor-has-content
const Anchor = ({ ...props }) => <a href={props.href} className="underline inline" {...props} />;

type Props = {
	readonly information: PositionType;
};
export const Position: React.FC<Props> = ({ information }) => (
	<div className="w-full flex flex-col gap-4">
		<div className="flex flex-col">
			<div className="flex flex-col md:flex-row justify-between flex-col-reverse">
				<h2 className="font-semibold text-lg">{information.title}</h2>
				<h4 className="text-md">{information.dates}</h4>
			</div>
			<h4 className="text-md">
				{information.placeUrl ? (
					<Link href={information.placeUrl}>{information.place}</Link>
				) : (
					information.place
				)}
			</h4>
		</div>
		<ReactMarkdown
			components={{
				ul: List,
				a: Anchor,
			}}
			className="text-md flex flex-col gap-4"
		>
			{information.description}
		</ReactMarkdown>
	</div>
);
