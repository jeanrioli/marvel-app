import { MarvelApi } from '../../../api';
import { Character } from '../../../entities';

const MarvelClient = new MarvelApi();

export const CharacterService = {
	GetCharacters: async (): Promise<Partial<{ characters: Array<Character>; errorMessage: string }>> => {
		const response = await MarvelClient.Get('/characters');

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}
		return { characters: response.body?.data?.results };
	},

	GetCharactersById: async (id: number): Promise<Partial<{ character: Character; errorMessage: string }>> => {
		const response = await MarvelClient.Get(`/characters/${id}`);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { character: response.body?.data?.results?.[0] };
	},
};
