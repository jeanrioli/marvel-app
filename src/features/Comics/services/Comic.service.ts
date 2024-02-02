import { MarvelApi, MarvelRequest, MarvelResponse } from '../../../api';
import { Comic } from '../../../entities/Comic';

const MarvelClient = new MarvelApi();

export const ComicService = {
	GetComics: async (): Promise<Partial<{ comics: Array<Comic>; errorMessage: string }>> => {
		const request: MarvelRequest = {
			endpoint: '/comics',
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { comics: response.body?.data?.results };
	},

	GetComicById: async (id: number): Promise<Partial<{ comics: Array<Comic>; errorMessage: string }>> => {
		const request: MarvelRequest = {
			endpoint: `/comics/${id}`,
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { comics: response.body?.data?.results };
	},

	GetComicsBySearch: async (search: string): Promise<Partial<{ comics: Array<Comic>; errorMessage: string }>> => {
		const limit = 8;
		const request: MarvelRequest = {
			endpoint: '/comics',
			query: `titleStartsWith=${search}&limit=${limit}`,
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { comics: response.body?.data?.results };
	},
};
