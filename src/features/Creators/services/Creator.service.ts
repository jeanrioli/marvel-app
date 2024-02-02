import { MarvelApi, MarvelRequest, MarvelResponse } from '../../../api';
import { Creator } from '../../../entities/Creator';

const MarvelClient = new MarvelApi();

export const CreatorService = {
	GetCreators: async (): Promise<Partial<{ creators: Array<Creator>; errorMessage: string }>> => {
		const request: MarvelRequest = {
			endpoint: '/creators',
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { creators: response.body?.data?.results };
	},

	GetCreatorById: async (id: number): Promise<Partial<{ creators: Array<Creator>; errorMessage: string }>> => {
		const request: MarvelRequest = {
			endpoint: `/creators/${id}`,
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { creators: response.body?.data?.results };
	},

	GetCreatorByName: async (name: string): Promise<Partial<{ creators: Array<Creator>; errorMessage: string }>> => {
		console.log(name);
		const splittedName = name.split(' ');
		const request: MarvelRequest = {
			endpoint: '/creators',
			query: `firstName=${splittedName[0]}&lastName=${splittedName[splittedName.length - 1]}`,
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { creators: response.body?.data?.results };
	},

	GetCreatorsBySearch: async (search: string): Promise<Partial<{ creators: Array<Creator>; errorMessage: string }>> => {
		const limit = 8;
		const request: MarvelRequest = {
			endpoint: '/creators',
			query: `nameStartsWith=${search}&limit=${limit}`,
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { creators: response.body?.data?.results };
	},
};
