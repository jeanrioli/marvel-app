import axios, { AxiosError, AxiosResponse } from 'axios';
import md5 from 'md5';
import { getCookie } from '../utils';

export interface MarvelRequest {
	endpoint: string;
	query?: string;
}

export interface MarvelResponse {
	success: boolean;
	status?: number;
	body?: any;
}

export class MarvelApi {
	private GetCredentials() {
		const ts = 1;
		const publicKey = getCookie('publicKey');
		const privateKey = getCookie('privateKey');
		const hash = md5(`${ts}${privateKey}${publicKey}`);

		return `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
	}

	public async Get(request: MarvelRequest): Promise<MarvelResponse> {
		const baseUrl = `http://gateway.marvel.com/v1/public`;
		const credentials = this.GetCredentials();
		const { endpoint, query } = request;

		let url = baseUrl + endpoint + '?' + credentials;

		if (!!query) {
			url = baseUrl + endpoint + '?' + query + '&' + credentials;
		}

		try {
			const response: AxiosResponse = await axios.get(url);
			return { success: true, body: response.data };
		} catch (error) {
			const _error = error as AxiosError;
			return { success: false, status: _error.response?.status, body: _error.response?.data };
		}
	}
}
