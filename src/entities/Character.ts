import { Url, ResourceList, Image } from './types';

export class Character {
	id: number;
	name: string;
	description: string;
	modified: Date;
	resourceURI: string;
	urls: Array<Url>;
	thumbnail: Image;
	comics: ResourceList;
	stories: ResourceList;
	events: ResourceList;
	series: ResourceList;
}
