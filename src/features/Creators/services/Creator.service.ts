import { MarvelApi } from '../../../api';
import { Creator } from '../../../entities/Creator';

const MarvelClient = new MarvelApi();

export const CreatorService = {
	GetCreators: async (): Promise<Partial<{ creators: Array<Creator>; errorMessage: string }>> => {
		const response = await MarvelClient.Get('/creators');

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { creators: response.body?.data?.results };
	},

	GetCreatorById: async (id: number): Promise<Partial<{ creator: Creator; errorMessage: string }>> => {
		const response = await MarvelClient.Get(`/creators/${id}`);

		if (!response.success) {
			return { errorMessage: response.body?.message };
		}

		return { creator: response.body?.data?.results?.[0] };
	},
};
