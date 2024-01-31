import { MarvelApi } from '../../../api';
import { Creator } from '../../../entities/Creator';

const MarvelClient = new MarvelApi();

export const CharacterService = {
	GetCreators: async (): Promise<Partial<{ characters: Array<Creator>; errorMessage: string }>> => {
		const response = await MarvelClient.Get('/creators');

		if (!response.success) {
			return { errorMessage: response.body.message };
		}

		return { characters: response.body };
	},

	GetCreatorById: async (id: number): Promise<Partial<{ characters: Creator; errorMessage: string }>> => {
		const response = await MarvelClient.Get(`/creators/${id}`);

		if (!response.success) {
			return { errorMessage: response.body.message };
		}

		return { characters: response.body };
	},
};
