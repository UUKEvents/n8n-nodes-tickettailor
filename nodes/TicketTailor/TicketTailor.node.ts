import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';

export class TicketTailor implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'TicketTailor',
		name: 'ticketTailor',
		icon: 'file:../../icons/tt-logo.svg',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Allows use of the Ticket Tailor API',
		defaults: {
			name: 'TicketTailor',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'ticketTailorApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.tickettailor.com/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Bundle',
						value: 'bundle',
					},
					{
						name: 'Check-In',
						value: 'checkIn',
					},
					{
						name: 'Discount',
						value: 'discount',
					},
					{
						name: 'Event',
						value: 'event',
					},
					{
						name: 'Event Set',
						value: 'eventSeries',
					},
					{
						name: 'Hold',
						value: 'hold',
					},
					{
						name: 'Issued Membership',
						value: 'issuedMembership',
					},
					{
						name: 'Issued Ticket',
						value: 'issuedTicket',
					},
					{
						name: 'Membership Redemption',
						value: 'membershipRedemption',
					},
					{
						name: 'Membership Type',
						value: 'membershipType',
					},
					{
						name: 'Order',
						value: 'order',
					},
					{
						name: 'Ping',
						value: 'ping',
					},
					{
						name: 'Product',
						value: 'product',
					},
					{
						name: 'Ticket Group',
						value: 'ticketGroup',
					},
					{
						name: 'Ticket Type',
						value: 'ticketType',
					},
					{
						name: 'Voucher',
						value: 'voucher',
					},
					{
						name: 'Waitlist',
						value: 'waitlist',
					},
				],
				default: 'event',
			},
			// Events
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['bundle'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many bundles',
						routing: {
							request: {
								method: 'GET',
								url: '/bundles',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get a bundle',
						routing: {
							request: {
								method: 'GET',
								url: '=/bundles/{{$parameter["bundleId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Bundle ID',
				name: 'bundleId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bundle'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['checkIn'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many checkins',
						routing: {
							request: {
								method: 'GET',
								url: '/check_ins',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['discount'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many discounts',
						routing: {
							request: {
								method: 'GET',
								url: '/discounts',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get a discount',
						routing: {
							request: {
								method: 'GET',
								url: '=/discounts/{{$parameter["discountId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Discount ID',
				name: 'discountId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['discount'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['event'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many events',
						routing: {
							request: {
								method: 'GET',
								url: '/events',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get an event',
						routing: {
							request: {
								method: 'GET',
								url: '=/events/{{$parameter["eventId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Event ID',
				name: 'eventId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['event'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['eventSeries'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many event series',
						routing: {
							request: {
								method: 'GET',
								url: '/event_series',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get an event series',
						routing: {
							request: {
								method: 'GET',
								url: '=/event_series/{{$parameter["eventSeriesId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Event Series ID',
				name: 'eventSeriesId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['eventSeries'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['hold'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many holds',
						routing: {
							request: {
								method: 'GET',
								url: '/holds',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get a hold',
						routing: {
							request: {
								method: 'GET',
								url: '=/holds/{{$parameter["holdId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Hold ID',
				name: 'holdId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['hold'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['issuedMembership'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many issued memberships',
						routing: {
							request: {
								method: 'GET',
								url: '/issued_memberships',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get an issued membership',
						routing: {
							request: {
								method: 'GET',
								url: '=/issued_memberships/{{$parameter["issuedMembershipId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Issued Membership ID',
				name: 'issuedMembershipId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['issuedMembership'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['issuedTicket'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many issued tickets',
						routing: {
							request: {
								method: 'GET',
								url: '/issued_tickets',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get an issued ticket',
						routing: {
							request: {
								method: 'GET',
								url: '=/issued_tickets/{{$parameter["issuedTicketId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Issued Ticket ID',
				name: 'issuedTicketId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['issuedTicket'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['membershipRedemption'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many membership redemptions',
						routing: {
							request: {
								method: 'GET',
								url: '/membership_redemptions',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['membershipType'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many membership types',
						routing: {
							request: {
								method: 'GET',
								url: '/membership_types',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get a membership type',
						routing: {
							request: {
								method: 'GET',
								url: '=/membership_types/{{$parameter["membershipTypeId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Membership Type ID',
				name: 'membershipTypeId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['membershipType'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['order'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many orders',
						routing: {
							request: {
								method: 'GET',
								url: '/orders',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get an order',
						routing: {
							request: {
								method: 'GET',
								url: '=/orders/{{$parameter["orderId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Order ID',
				name: 'orderId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['order'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['ping'],
					},
				},
				options: [
					{
						name: 'Ping',
						value: 'ping',
						action: 'Ping the API',
						routing: {
							request: {
								method: 'GET',
								url: '/ping',
							},
						},
					},
				],
				default: 'ping',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['product'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many products',
						routing: {
							request: {
								method: 'GET',
								url: '/products',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get a product',
						routing: {
							request: {
								method: 'GET',
								url: '=/products/{{$parameter["productId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Product ID',
				name: 'productId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['product'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['ticketGroup'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many ticket groups',
						routing: {
							request: {
								method: 'GET',
								url: '/ticket_groups',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get a ticket group',
						routing: {
							request: {
								method: 'GET',
								url: '=/ticket_groups/{{$parameter["ticketGroupId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Ticket Group ID',
				name: 'ticketGroupId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['ticketGroup'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['ticketType'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many ticket types',
						routing: {
							request: {
								method: 'GET',
								url: '/ticket_types',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get a ticket type',
						routing: {
							request: {
								method: 'GET',
								url: '=/ticket_types/{{$parameter["ticketTypeId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Ticket Type ID',
				name: 'ticketTypeId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['ticketType'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['voucher'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many vouchers',
						routing: {
							request: {
								method: 'GET',
								url: '/vouchers',
							},
						},
					},
					{
						name: 'Get One',
						value: 'get',
						action: 'Get a voucher',
						routing: {
							request: {
								method: 'GET',
								url: '=/vouchers/{{$parameter["voucherId"]}}',
							},
						},
					},
				],
				default: 'getAll',
			},
			{
				displayName: 'Voucher ID',
				name: 'voucherId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['voucher'],
						operation: ['get'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['waitlist'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						action: 'Get many waitlists',
						routing: {
							request: {
								method: 'GET',
								url: '/waitlist_entries',
							},
						},
					},
				],
				default: 'getAll',
			},
		],
	};
}
