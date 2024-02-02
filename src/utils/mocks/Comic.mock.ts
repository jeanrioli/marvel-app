import { Comic } from '../../entities/Comic';

export const ComicMock: Comic = {
	id: 82967,
	title: 'Marvel Previews (2017)',
	description: '',
	modified: new Date('2019-11-07T08:46:15-0500'),
	pageCount: 112,
	resourceURI: 'http://gateway.marvel.com/v1/public/comics/82967',
	urls: [
		{
			type: 'detail',
			url: 'http://marvel.com/comics/issue/82967/marvel_previews_2017?utm_campaign=apiRef&utm_source=dee2436a7571e5855f3a9fd04b131220',
		},
	],

	thumbnail: {
		path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
		extension: 'jpg',
	},
	creators: {
		available: 1,
		collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/creators',
		items: [
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/creators/10021',
				name: 'Jim Nausedas',
				role: 'editor',
			},
		],
		returned: 1,
	},
	characters: {
		available: 0,
		collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/characters',
		items: [],
		returned: 0,
	},
	stories: {
		available: 2,
		collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/stories',
		items: [
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/stories/183698',
				name: 'cover from Marvel Previews (2017)',
				type: 'cover',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/stories/183699',
				name: 'story from Marvel Previews (2017)',
				type: 'interiorStory',
			},
		],
		returned: 2,
	},
	events: {
		available: 0,
		collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/events',
		items: [],
		returned: 0,
	},
};
