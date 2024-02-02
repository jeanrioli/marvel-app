import { Creator } from '../../entities/Creator';

export const CreatorMock: Creator = {
	id: 7921,
	firstName: 'Xurxo',
	middleName: '',
	lastName: 'Penalta',
	suffix: '',
	fullName: 'Xurxo Penalta',
	modified: new Date('2022-08-11T09:50:00-0400'),
	thumbnail: {
		path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
		extension: 'jpg',
	},
	resourceURI: 'http://gateway.marvel.com/v1/public/creators/7921',
	comics: {
		available: 7,
		collectionURI: 'http://gateway.marvel.com/v1/public/creators/7921/comics',
		items: [
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/23994',
				name: 'Marvel Assistant-Sized Spectacular (2009) #1',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/84509',
				name: 'SPIDER-MAN: THE GAUNTLET - THE COMPLETE COLLECTION VOL. 2 TPB (Trade Paperback)',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/29455',
				name: 'Spider-Man: The Gauntlet Vol. 4 - Juggernaut (Hardcover)',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/29456',
				name: 'Spider-Man: The Gauntlet Vol. 5 - Lizard (Trade Paperback)',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/29457',
				name: 'Spider-Man: The Gauntlet Vol. 5 - Lizard (Hardcover)',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/26565',
				name: 'Terror, Inc. - Apocalypse Soon (2009) #3',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/30641',
				name: 'Web of Spider-Man (2009) #6',
			},
		],
		returned: 7,
	},
	series: {
		available: 7,
		collectionURI: 'http://gateway.marvel.com/v1/public/creators/7921/series',
		items: [
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/series/7171',
				name: 'Marvel Assistant-Sized Spectacular (2009)',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/series/29786',
				name: 'SPIDER-MAN: THE GAUNTLET - THE COMPLETE COLLECTION VOL. 2 TPB (2020)',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/series/10438',
				name: 'Spider-Man: The Gauntlet Vol. 4 - Juggernaut (2011)',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/series/10439',
				name: 'Spider-Man: The Gauntlet Vol. 5 - Lizard (2011)',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/series/9596',
				name: 'Spider-Man: The Gauntlet Vol. 5 - Lizard (2010)',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/series/7369',
				name: 'Terror, Inc. - Apocalypse Soon (2009)',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/series/9234',
				name: 'Web of Spider-Man (2009 - 2010)',
			},
		],
		returned: 7,
	},
	stories: {
		available: 7,
		collectionURI: 'http://gateway.marvel.com/v1/public/creators/7921/stories',
		items: [
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/stories/53221',
				name: '1 of 2',
				type: 'interiorStory',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/stories/58440',
				name: 'Interior #58440',
				type: 'interiorStory',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/stories/64064',
				name: 'Interior #64064',
				type: 'interiorStory',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/stories/64066',
				name: 'Interior #64066',
				type: 'interiorStory',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/stories/64067',
				name: 'Spider-Man: The Gauntlet Vol.5 - The Lizard TPB',
				type: 'cover',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/stories/75280',
				name: 'Interior #75280',
				type: 'interiorStory',
			},
			{
				resourceURI: 'http://gateway.marvel.com/v1/public/stories/186818',
				name: 'story from SPIDER-MAN: THE GAUNTLET - THE COMPLETE COLLECTION VOL. 2 TPB (2020) #2',
				type: 'interiorStory',
			},
		],
		returned: 7,
	},
	events: {
		available: 0,
		collectionURI: 'http://gateway.marvel.com/v1/public/creators/7921/events',
		items: [],
		returned: 0,
	},
	urls: [
		{
			type: 'detail',
			url: 'http://marvel.com/comics/creators/7921/xurxo_penalta?utm_campaign=apiRef&utm_source=dee2436a7571e5855f3a9fd04b131220',
		},
	],
};
