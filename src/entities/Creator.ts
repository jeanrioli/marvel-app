import { Image, ResourceList, Url } from './types';

export class Creator {
	id: number;
	firstName: string;
	middleName: string;
	lastName: string;
	suffix: string;
	fullName: string;
	modified: Date;
	resourceURI: string;
	urls: Array<Url>;
	thumbnail: Image;
	comics: ResourceList;
	stories: ResourceList;
	events: ResourceList;
	series: ResourceList;
}
