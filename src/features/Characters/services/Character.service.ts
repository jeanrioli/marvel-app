import { MarvelApi, MarvelRequest, MarvelResponse } from '../../../api';
import { Character } from '../../../entities';

const MarvelClient = new MarvelApi();

export const CharacterService = {
	GetCharacters: async (offset: number): Promise<Partial<{ characters: Array<Character>; errorMessage: string }>> => {
		const limit = 20;

		const request: MarvelRequest = {
			endpoint: '/characters',
			query: `offset=${offset * limit}&limit=${limit}`,
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { characters: response.body?.data?.results };
	},

	GetCharactersById: async (id: number): Promise<Partial<{ characters: Array<Character>; errorMessage: string }>> => {
		const request: MarvelRequest = {
			endpoint: `/characters/${id}`,
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { characters: response.body?.data?.results };
	},

	GetCharacterByName: async (
		name: string
	): Promise<Partial<{ characters: Array<Character>; errorMessage: string }>> => {
		const request: MarvelRequest = {
			endpoint: '/characters',
			query: `name=${name}`,
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { characters: response.body?.data?.results };
	},

	GetCharactersBySearch: async (
		search: string
	): Promise<Partial<{ characters: Array<Character>; errorMessage: string }>> => {
		const limit = 8;
		const request: MarvelRequest = {
			endpoint: '/characters',
			query: `nameStartsWith=${search}&limit=${limit}`,
		};

		const response: MarvelResponse = await MarvelClient.Get(request);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { characters: response.body?.data?.results };
	},
};
