import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class TicketTailorApi implements ICredentialType {
	name = 'ticketTailorApi';

	displayName = 'TicketTailor API';

	icon: Icon = { light: 'file:../icons/tt_dark_logo.svg', dark: 'file:../icons/tt_light_logo.svg' };

	documentationUrl =
		'https://developers.tickettailor.com/docs/api/ticket-tailor-api/#authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			auth: {
				username: '={{$credentials.apiKey}}',
				password: '',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.tickettailor.com/v1',
			url: '/ping',
			method: 'GET',
		},
	};
}
