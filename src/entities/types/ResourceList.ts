type Item = { name: string; resourceURI: string; type?: string; role?: string };

export type ResourceList = {
	available: number;
	collectionURI: string;
	items: Array<Item>;
	returned: number;
};
