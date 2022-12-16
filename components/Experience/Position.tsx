import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import { Experience } from 'Content';

const List = ({ ...props }) => <ul className="list-disc ml-7" {...props} />;

type Props = {
	information: Experience;
};
export const Position: React.FC<Props> = ({ information }) => (
	<div className="w-full flex flex-col gap-4">
		<div>
			<div className="flex justify-between ">
				<h2>{information.position}</h2>
				<h4>{information.dates}</h4>
			</div>
			<h4 className="text-sm">{information.company}</h4>
		</div>
		<ReactMarkdown
			components={{
				ul: List,
			}}
		>
			{information.description}
		</ReactMarkdown>
	</div>
);
