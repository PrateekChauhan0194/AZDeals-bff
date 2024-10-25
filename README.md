# AZDeals-BFF

**AZDeals-BFF** is a Backend for Frontend (BFF) service built with Node.js. It interacts with the AZDeals-Domain service to retrieve and transform Amazon deals before passing the data to the frontend in a format optimized for user interfaces.

## Features

- Acts as a BFF (Backend for Frontend) layer for transforming data fetched from the AZDeals-Domain service.
- Transforms raw deal data from the Domain service into a more frontend-friendly format.
- Provides a simple and effective interface for frontend applications to interact with.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Testing](#testing)
- [License](#license)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/AZDeals-bff.git
   cd AZDeals-bff
   ```

2. **Install the dependencies**:
   Run the following command to install the project dependencies:

   ```bash
   yarn install
   ```

3. **Set up environment variables**:
   Create a .env file in the root of the project with the following variables:

   ```bash
   PORT=4445
   ```

4. **Run the service**:
   Use the following command to start the server:
   ```bash
   yarn start
   ```

## Configuration

Before running the application, ensure the following configuration is set in your `.env` file:

- `PORT`: The port on which the BFF service will run (default is `4445`).

Example `.env` file:

```bash
PORT=4445
```

## Usage

Once the service is running, it listens on the configured port (default: `4445`). The API can be accessed via the defined endpoints.

Example request to fetch deals for Australia from the Domain service:

```bash
GET http://localhost:4445/getAustraliaDeals
```

The BFF service will internally call the Domain service (http://localhost:4444/getDeals/AU) and return a simplified response.

## API Endpoints

### `GET /getAustraliaDeals`

Fetches Amazon deals for Australia (transformed from the Domain service response).

- **Response**:
  Returns a JSON object containing the transformed deal data.

Example response:

```json
{
  "deals": [
    {
      "deal_title": "Shark FlexStyle Limited Edition",
      "deal_photo": "https://m.media-amazon.com/images/I/71a8S7ARpdL.jpg",
      "deal_url": "https://www.amazon.com.au/Shark-FlexStyle/dp/B0CKW59L1Y"
    },
    {
      "deal_title": "FOREO Luna 4 Body Scrubber",
      "deal_photo": "https://m.media-amazon.com/images/I/81R2C9JjEQL.jpg",
      "deal_url": "https://www.amazon.com.au/FOREO-Body-Scrubber/dp/B0BGL9PQVL"
    }
  ]
}
```

## Development

### Running the server locally

To start the server locally, use the following command:

```bash
yarn dev
```

The server will automatically reload upon code changes during development.

### Configuring Domain Service

Ensure the AZDeals-Domain service is running on http://localhost:4444. The BFF service depends on this domain service for fetching deal data.

## Testing

We use **Supertest** and **Mock Service Worker (MSW)** for testing the BFF service, ensuring that the BFF behaves correctly even when the Domain service is mocked.

### Running Tests

To run the test suite, use the following command:

```bash
yarn test
```

### Testing with Mock Service Worker (MSW)

MSW mocks the Domain service during tests, so you can ensure that the BFF service behaves correctly without needing the actual Domain service to be live.

    1.	Set up mock handlers (mocks/handlers.ts) to simulate the Domain service response.
    2.	Write tests (test/bff.test.ts) to verify the API behavior using Supertest and MSW.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
