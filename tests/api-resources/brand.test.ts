// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BrandDev from 'brand.dev';

const client = new BrandDev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource brand', () => {
  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.brand.retrieve({
      domain: 'domain',
      force_language: 'albanian',
      maxSpeed: true,
      timeoutMS: 1,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('aiQuery: only required params', async () => {
    const responsePromise = client.brand.aiQuery({
      data_to_extract: [
        {
          datapoint_description: 'datapoint_description',
          datapoint_example: 'datapoint_example',
          datapoint_name: 'datapoint_name',
          datapoint_type: 'text',
        },
      ],
      domain: 'domain',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('aiQuery: required and optional params', async () => {
    const response = await client.brand.aiQuery({
      data_to_extract: [
        {
          datapoint_description: 'datapoint_description',
          datapoint_example: 'datapoint_example',
          datapoint_name: 'datapoint_name',
          datapoint_type: 'text',
        },
      ],
      domain: 'domain',
      specific_pages: {
        about_us: true,
        blog: true,
        careers: true,
        contact_us: true,
        faq: true,
        home_page: true,
        privacy_policy: true,
        terms_and_conditions: true,
      },
      timeoutMS: 1,
    });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('identifyFromTransaction: required and optional params', async () => {
    const response = await client.brand.identifyFromTransaction({
      transaction_info: 'transaction_info',
      timeoutMS: 1,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('prefetch: only required params', async () => {
    const responsePromise = client.brand.prefetch({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('prefetch: required and optional params', async () => {
    const response = await client.brand.prefetch({ domain: 'domain', timeoutMS: 1 });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('retrieveByTicker: required and optional params', async () => {
    const response = await client.brand.retrieveByTicker({ ticker: 'ticker', timeoutMS: 1 });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveNaics: only required params', async () => {
    const responsePromise = client.brand.retrieveNaics({ input: 'input' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveNaics: required and optional params', async () => {
    const response = await client.brand.retrieveNaics({ input: 'input', timeoutMS: 1 });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('retrieveSimplified: required and optional params', async () => {
    const response = await client.brand.retrieveSimplified({ domain: 'domain', timeoutMS: 1 });
  });

  // skipped: tests are disabled for the time being
  test.skip('screenshot: only required params', async () => {
    const responsePromise = client.brand.screenshot({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('screenshot: required and optional params', async () => {
    const response = await client.brand.screenshot({ domain: 'domain', fullScreenshot: 'true' });
  });

  // skipped: tests are disabled for the time being
  test.skip('styleguide: only required params', async () => {
    const responsePromise = client.brand.styleguide({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('styleguide: required and optional params', async () => {
    const response = await client.brand.styleguide({ domain: 'domain', timeoutMS: 1 });
  });
});
