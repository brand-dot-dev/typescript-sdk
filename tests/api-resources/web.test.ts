// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextDev from 'context.dev';

const client = new ContextDev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource web', () => {
  // Mock server tests are disabled
  test.skip('screenshot: only required params', async () => {
    const responsePromise = client.web.screenshot({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('screenshot: required and optional params', async () => {
    const response = await client.web.screenshot({
      domain: 'domain',
      fullScreenshot: 'true',
      page: 'login',
      prioritize: 'speed',
    });
  });

  // Mock server tests are disabled
  test.skip('webScrapeHTML: only required params', async () => {
    const responsePromise = client.web.webScrapeHTML({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('webScrapeHTML: required and optional params', async () => {
    const response = await client.web.webScrapeHTML({ url: 'https://example.com' });
  });

  // Mock server tests are disabled
  test.skip('webScrapeImages: only required params', async () => {
    const responsePromise = client.web.webScrapeImages({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('webScrapeImages: required and optional params', async () => {
    const response = await client.web.webScrapeImages({ url: 'https://example.com' });
  });

  // Mock server tests are disabled
  test.skip('webScrapeMd: only required params', async () => {
    const responsePromise = client.web.webScrapeMd({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('webScrapeMd: required and optional params', async () => {
    const response = await client.web.webScrapeMd({
      url: 'https://example.com',
      includeImages: true,
      includeLinks: true,
      shortenBase64Images: true,
    });
  });

  // Mock server tests are disabled
  test.skip('webScrapeSitemap: only required params', async () => {
    const responsePromise = client.web.webScrapeSitemap({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('webScrapeSitemap: required and optional params', async () => {
    const response = await client.web.webScrapeSitemap({ domain: 'domain' });
  });
});
