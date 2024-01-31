type Item = { name: string; resourceURI: string; type: string };

export type ResourceList = {
	available: number;
	collectionURI: string;
	items: Array<Item>;
	returned: number;
};
