// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextDev from 'context.dev';

const client = new ContextDev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource industry', () => {
  // Mock server tests are disabled
  test.skip('retrieveNaics: only required params', async () => {
    const responsePromise = client.industry.retrieveNaics({ input: 'input' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveNaics: required and optional params', async () => {
    const response = await client.industry.retrieveNaics({
      input: 'input',
      maxResults: 1,
      minResults: 1,
      timeoutMS: 1000,
    });
  });
});
