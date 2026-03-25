// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ContextDev from 'context.dev';

const client = new ContextDev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ai', () => {
  // Mock server tests are disabled
  test.skip('aiQuery: only required params', async () => {
    const responsePromise = client.ai.aiQuery({
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

  // Mock server tests are disabled
  test.skip('aiQuery: required and optional params', async () => {
    const response = await client.ai.aiQuery({
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

  // Mock server tests are disabled
  test.skip('extractProduct: only required params', async () => {
    const responsePromise = client.ai.extractProduct({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('extractProduct: required and optional params', async () => {
    const response = await client.ai.extractProduct({ url: 'https://example.com', timeoutMS: 1000 });
  });

  // Mock server tests are disabled
  test.skip('extractProducts: only required params', async () => {
    const responsePromise = client.ai.extractProducts({ domain: 'domain' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('extractProducts: required and optional params', async () => {
    const response = await client.ai.extractProducts({
      domain: 'domain',
      maxProducts: 1,
      timeoutMS: 1000,
    });
  });
});
