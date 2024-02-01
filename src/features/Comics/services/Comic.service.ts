import { MarvelApi } from '../../../api';
import { Comic } from '../../../entities/Comic';

const MarvelClient = new MarvelApi();

export const ComicService = {
	GetComics: async (): Promise<Partial<{ comics: Array<Comic>; errorMessage: string }>> => {
		const response = await MarvelClient.Get('/comics');

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { comics: response.body?.data?.results };
	},

	GetComicById: async (id: number): Promise<Partial<{ comic: Comic; errorMessage: string }>> => {
		const response = await MarvelClient.Get(`/comics/${id}`);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { comic: response.body?.data?.results?.[0] };
	},
};
