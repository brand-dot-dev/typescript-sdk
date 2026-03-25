// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextDev from 'context.dev';

const client = new ContextDev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource brand', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.brand.retrieve({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.brand.retrieve({
      domain: 'domain',
      force_language: 'albanian',
      maxSpeed: true,
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('identifyFromTransaction: only required params', async () => {
    const responsePromise = client.brand.identifyFromTransaction({ transaction_info: 'transaction_info' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('identifyFromTransaction: required and optional params', async () => {
    const response = await client.brand.identifyFromTransaction({
      transaction_info: 'transaction_info',
      city: 'city',
      country_gl: 'ad',
      force_language: 'albanian',
      high_confidence_only: true,
      maxSpeed: true,
      mcc: 'mcc',
      phone: 0,
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveByEmail: only required params', async () => {
    const responsePromise = client.brand.retrieveByEmail({ email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveByEmail: required and optional params', async () => {
    const response = await client.brand.retrieveByEmail({
      email: 'dev@stainless.com',
      force_language: 'albanian',
      maxSpeed: true,
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveByIsin: only required params', async () => {
    const responsePromise = client.brand.retrieveByIsin({ isin: 'SE60513A9993' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveByIsin: required and optional params', async () => {
    const response = await client.brand.retrieveByIsin({
      isin: 'SE60513A9993',
      force_language: 'albanian',
      maxSpeed: true,
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveByName: only required params', async () => {
    const responsePromise = client.brand.retrieveByName({ name: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveByName: required and optional params', async () => {
    const response = await client.brand.retrieveByName({
      name: 'xxx',
      country_gl: 'ad',
      force_language: 'albanian',
      maxSpeed: true,
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveByTicker: only required params', async () => {
    const responsePromise = client.brand.retrieveByTicker({ ticker: 'ticker' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveByTicker: required and optional params', async () => {
    const response = await client.brand.retrieveByTicker({
      ticker: 'ticker',
      force_language: 'albanian',
      maxSpeed: true,
      ticker_exchange: 'AMEX',
      timeoutMS: 1000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveSimplified: only required params', async () => {
    const responsePromise = client.brand.retrieveSimplified({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveSimplified: required and optional params', async () => {
    const response = await client.brand.retrieveSimplified({ domain: 'domain', timeoutMS: 1000 });
  });
});
