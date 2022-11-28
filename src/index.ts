import { default as requestHelper, RequestParameters } from './helpers/request.js';

const PUSHED_API_BASE_URL = 'https://api.pushed.co/1';

export interface Initializer {
	app_key: string;
	app_secret: string;
};

export interface NotificationRequest {
	content: string;
	content_type?: 'url';
	content_extra?: string;
	target_type: 'app' | 'channel' | 'user' | 'pusher_id' | 'subscription_alias' | 'email';
	target_alias?: string;
	pushed_id?: string;
	email?: string;
};

export default class PushedSdk {
	app_key: string;
	app_secret: string;
	headers: object;

	constructor(initializer: Initializer) {
		this.app_key = initializer.app_key;
		this.app_secret = initializer.app_secret;
	}

	// Utils
	async request(path: string = '', parameters: RequestParameters = {}) {
		const data = {
			...(parameters?.data),
			app_key: this.app_key,
			app_secret: this.app_secret,
		};

		return await requestHelper({
			method: parameters?.method || 'get',
			url: `${PUSHED_API_BASE_URL}${path}`,
			data,
		});
	}

	// Scope
	public readonly notifications = {
		send: async (parameters: object = {}): Promise<any> => {
			const result = await this.request('/push', { method: 'post', data: parameters });
			return result;
		},
	};
};
