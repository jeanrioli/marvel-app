import axios, { AxiosError, AxiosResponse } from 'axios';
import md5 from 'md5';
import { getCookie } from '../utils';

interface MarvelResponse {
	success: boolean;
	status?: number;
	body?: any;
}

export class MarvelApi {
	private GetCredentials() {
		const TS = 1;
		const PUBLIC_KEY = getCookie('publicKey');
		const PRIVATE_KEY = getCookie('privateKey');
		const HASH = md5(`${TS}${PRIVATE_KEY}${PUBLIC_KEY}`);

		return `ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
	}

	public async Get(endpoint: string): Promise<MarvelResponse> {
		const baseUrl = `http://gateway.marvel.com/v1/public`;
		const credentials = this.GetCredentials();

		try {
			const response: AxiosResponse = await axios.get(baseUrl + endpoint + '?' + credentials);
			return { success: true, body: response.data.data.results };
		} catch (error) {
			const _error = error as AxiosError;
			console.log(_error);
			return { success: false, status: _error.response?.status, body: _error.response?.data };
		}
	}
}
