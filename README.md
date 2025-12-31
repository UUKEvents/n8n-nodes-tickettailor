# n8n-nodes-tickettailor

A custom n8n node for interacting with the [Ticket Tailor API](https://developers.tickettailor.com/). This node allows you to automate your event management, ticketing, and attendee data directly within your n8n workflows.

![Ticket Tailor Logo](https://storage.googleapis.com/incident-io-status-page-logos/01J17XM5GYT273DGWC986D19SS/ticket-tailor/4h1ey3z0.png)

## Features

This node supports a wide range of Ticket Tailor resources and operations, including:

- **Events & Event Sets**: List and retrieve details for your events and series.
- **Orders & Tickets**: Manage customer orders and issued tickets.
- **Check-ins**: Retrieve check-in data for your attendees.
- **Memberships**: Manage membership types, issued memberships, and redemptions.
- **Products & Bundles**: Access information about your products and ticket bundles.
- **Discounts & Vouchers**: Retrieve details on active discounts and vouchers.
- **Waitlists & Holds**: Manage waitlist entries and ticket holds.
- **Ping**: Quickly verify your API connection.

## Prerequisites

- An [n8n](https://n8n.io/) instance (self-hosted or cloud).
- A [Ticket Tailor account](https://www.tickettailor.com/) and an [API Key](https://developers.tickettailor.com/docs/api/ticket-tailor-api/#authentication).

## Installation

### Community Node (Recommended)

1. Open your n8n instance.
2. Go to **Settings > Community Nodes**.
3. Click on **Install a new node**.
4. Enter `n8n-nodes-tickettailor` in the **npm Package Name** field.
5. Click **Install**.

### Manual Installation (Development)

If you want to contribute or test locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/uukevents/n8n-nodes-tickettailor.git
   cd n8n-nodes-tickettailor
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the node:
   ```bash
   npm run build
   ```
4. Link the node to your local n8n:
   ```bash
   npm link
   # In your n8n directory:
   npm link n8n-nodes-tickettailor
   ```

## Credentials Setup

1. In n8n, go to **Credentials**.
2. Search for and select **TicketTailor API**.
3. Enter your **API Key** from your Ticket Tailor dashboard.
4. Save the credentials.

> [!TIP]
> You can find your API keys in the Ticket Tailor dashboard under **Settings > API keys**.

## Usage

Once installed, you can find the **TicketTailor** node in your n8n node selector.

1. Select the **Resource** you want to work with (e.g., Event, Order).
2. Choose the **Operation** (e.g., Get One, Get Many).
3. Provide the required parameters (e.g., Event ID).
4. Connect the node to your workflow and execute.

## Development

To start developing locally with hot-reloading:

```bash
npm run dev
```

This will build the node and start an n8n instance with the node pre-loaded.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Author

Created and maintained by [Universities UK](https://www.universitiesuk.ac.uk/) (events@universitiesuk.ac.uk).
