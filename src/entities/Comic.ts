import { Image, ResourceList, Url } from './types';

export class Comic {
	id: number;
	title: string;
	description: string;
	modified: Date;
	pageCount: number;
	resourceURI: string;
	urls: Array<Url>;
	thumbnail: Image;
	creators: ResourceList;
	characters: ResourceList;
	stories: ResourceList;
	events: ResourceList;
}
