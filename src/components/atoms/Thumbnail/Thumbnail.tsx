import { FC } from 'react';
import * as Styled from './Thumbnail.styled';

interface ThumbnailProps {
	src: string;
	alt: string;
}

export const Thumbnail: FC<ThumbnailProps> = ({ src, alt }) => {
	return <Styled.Image src={src} alt={alt} />;
};
