// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextDev from 'context.dev';

const client = new ContextDev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource utility', () => {
  // Mock server tests are disabled
  test.skip('prefetch: only required params', async () => {
    const responsePromise = client.utility.prefetch({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('prefetch: required and optional params', async () => {
    const response = await client.utility.prefetch({ domain: 'domain', timeoutMS: 1000 });
  });

  // Mock server tests are disabled
  test.skip('prefetchByEmail: only required params', async () => {
    const responsePromise = client.utility.prefetchByEmail({ email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('prefetchByEmail: required and optional params', async () => {
    const response = await client.utility.prefetchByEmail({ email: 'dev@stainless.com', timeoutMS: 1000 });
  });
});
