import { FC, ReactNode, Children } from 'react';

interface DetailPageProps {
	children: ReactNode;
}

export const DetailPage: FC<DetailPageProps> = ({ children }) => {
	const content = Children.toArray(children);

	return (
		<div>
			<div>{content[0]}</div>
			<div>{content[1]}</div>
		</div>
	);
};
