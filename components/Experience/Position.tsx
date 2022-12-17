import Link from 'next/link';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import { PositionType } from 'Content';

const List = ({ ...props }) => <ul className="list-disc ml-7" {...props} />;
const Anchor = ({ ...props }) => <Link href={props.href} className="underline inline" {...props} />;

type Props = {
	information: PositionType;
};
export const Position: React.FC<Props> = ({ information }) => (
	<div className="w-full flex flex-col gap-4">
		<div className="flex flex-col">
			<div className="flex flex-col md:flex-row justify-between flex-col-reverse">
				<h2 className="font-semibold">{information.title}</h2>
				<h4 className="text-sm">{information.dates}</h4>
			</div>
			<h4 className="text-sm">{information.place}</h4>
		</div>
		<ReactMarkdown
			components={{
				ul: List,
				a: Anchor,
			}}
			className="text-sm flex flex-col gap-4"
		>
			{information.description}
		</ReactMarkdown>
	</div>
);