import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Set up MSW to intercept network requests
export const server = setupServer(...handlers);

// Before all tests, start the server
beforeAll(() => server.listen());

// After each test, reset any request handlers
afterEach(() => server.resetHandlers());

// After all tests, close the server
afterAll(() => server.close());