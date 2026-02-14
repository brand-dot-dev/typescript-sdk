// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BrandDev from 'brand.dev';

const client = new BrandDev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource brand', () => {
  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.brand.retrieve({
      domain: 'domain',
      force_language: 'albanian',
      maxSpeed: true,
      timeoutMS: 1000,
    });
  });

  // Prism tests are disabled
  test.skip('aiProduct: only required params', async () => {
    const responsePromise = client.brand.aiProduct({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('aiProduct: required and optional params', async () => {
    const response = await client.brand.aiProduct({ url: 'https://example.com', timeoutMS: 1000 });
  });

  // Prism tests are disabled
  test.skip('aiProducts: only required params', async () => {
    const responsePromise = client.brand.aiProducts({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('aiProducts: required and optional params', async () => {
    const response = await client.brand.aiProducts({
      domain: 'domain',
      maxProducts: 1,
      timeoutMS: 1000,
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('aiQuery: required and optional params', async () => {
    const response = await client.brand.aiQuery({
      data_to_extract: [
        {
          datapoint_description: 'datapoint_description',
          datapoint_example: 'datapoint_example',
          datapoint_name: 'datapoint_name',
          datapoint_type: 'text',
          datapoint_list_type: 'string',
          datapoint_object_schema: { testimonial_text: 'string', testimonial_author: 'string' },
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
        pricing: true,
        privacy_policy: true,
        terms_and_conditions: true,
      },
      timeoutMS: 1000,
    });
  });

  // Prism tests are disabled
  test.skip('fonts: only required params', async () => {
    const responsePromise = client.brand.fonts({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('fonts: required and optional params', async () => {
    const response = await client.brand.fonts({ domain: 'domain', timeoutMS: 1000 });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('identifyFromTransaction: required and optional params', async () => {
    const response = await client.brand.identifyFromTransaction({
      transaction_info: 'transaction_info',
      city: 'city',
      country_gl: 'ad',
      force_language: 'albanian',
      maxSpeed: true,
      mcc: 'mcc',
      phone: 0,
      timeoutMS: 1000,
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('prefetch: required and optional params', async () => {
    const response = await client.brand.prefetch({ domain: 'domain', timeoutMS: 1000 });
  });

  // Prism tests are disabled
  test.skip('prefetchByEmail: only required params', async () => {
    const responsePromise = client.brand.prefetchByEmail({ email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('prefetchByEmail: required and optional params', async () => {
    const response = await client.brand.prefetchByEmail({ email: 'dev@stainless.com', timeoutMS: 1000 });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('retrieveByEmail: required and optional params', async () => {
    const response = await client.brand.retrieveByEmail({
      email: 'dev@stainless.com',
      force_language: 'albanian',
      maxSpeed: true,
      timeoutMS: 1000,
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('retrieveByIsin: required and optional params', async () => {
    const response = await client.brand.retrieveByIsin({
      isin: 'SE60513A9993',
      force_language: 'albanian',
      maxSpeed: true,
      timeoutMS: 1000,
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('retrieveByName: required and optional params', async () => {
    const response = await client.brand.retrieveByName({
      name: 'xxx',
      force_language: 'albanian',
      maxSpeed: true,
      timeoutMS: 1000,
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('retrieveByTicker: required and optional params', async () => {
    const response = await client.brand.retrieveByTicker({
      ticker: 'ticker',
      force_language: 'albanian',
      maxSpeed: true,
      ticker_exchange: 'AMEX',
      timeoutMS: 1000,
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('retrieveNaics: required and optional params', async () => {
    const response = await client.brand.retrieveNaics({
      input: 'input',
      maxResults: 1,
      minResults: 1,
      timeoutMS: 1000,
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('retrieveSimplified: required and optional params', async () => {
    const response = await client.brand.retrieveSimplified({ domain: 'domain', timeoutMS: 1000 });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('screenshot: required and optional params', async () => {
    const response = await client.brand.screenshot({
      domain: 'domain',
      fullScreenshot: 'true',
      page: 'login',
      prioritize: 'speed',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('styleguide: required and optional params', async () => {
    const response = await client.brand.styleguide({
      domain: 'domain',
      prioritize: 'speed',
      timeoutMS: 1000,
    });
  });
});
