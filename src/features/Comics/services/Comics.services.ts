import { MarvelApi } from '../../../api';
import { Comic } from '../../../entities/Comic';

const MarvelClient = new MarvelApi();

export const ComicService = {
	GetComics: async (): Promise<Partial<{ characters: Array<Comic>; errorMessage: string }>> => {
		const response = await MarvelClient.Get('/comics');

		if (!response.success) {
			return { errorMessage: response.body.message };
		}

		return { characters: response.body };
	},

	GetComicById: async (id: number): Promise<Partial<{ characters: Comic; errorMessage: string }>> => {
		const response = await MarvelClient.Get(`/comics/${id}`);

		if (!response.success) {
			return { errorMessage: response.body.message };
		}

		return { characters: response.body };
	},
};
