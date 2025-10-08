// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'brand.dev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BrandDev from 'brand.dev';

export const metadata: Metadata = {
  resource: 'brand',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/brand/retrieve',
};

export const tool: Tool = {
  name: 'retrieve_brand',
  description:
    'Retrieve brand information using one of three methods: domain name, company name, or stock ticker symbol. Exactly one of these parameters must be provided.',
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description:
          "Domain name to retrieve brand data for (e.g., 'example.com', 'google.com'). Cannot be used with name or ticker parameters.",
      },
      force_language: {
        type: 'string',
        description:
          'Optional parameter to force the language of the retrieved brand data. Works with all three lookup methods.',
        enum: [
          'albanian',
          'arabic',
          'azeri',
          'bengali',
          'bulgarian',
          'cebuano',
          'croatian',
          'czech',
          'danish',
          'dutch',
          'english',
          'estonian',
          'farsi',
          'finnish',
          'french',
          'german',
          'hausa',
          'hawaiian',
          'hindi',
          'hungarian',
          'icelandic',
          'indonesian',
          'italian',
          'kazakh',
          'kyrgyz',
          'latin',
          'latvian',
          'lithuanian',
          'macedonian',
          'mongolian',
          'nepali',
          'norwegian',
          'pashto',
          'pidgin',
          'polish',
          'portuguese',
          'romanian',
          'russian',
          'serbian',
          'slovak',
          'slovene',
          'somali',
          'spanish',
          'swahili',
          'swedish',
          'tagalog',
          'turkish',
          'ukrainian',
          'urdu',
          'uzbek',
          'vietnamese',
          'welsh',
        ],
      },
      maxSpeed: {
        type: 'boolean',
        description:
          'Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data. Works with all three lookup methods.',
      },
      name: {
        type: 'string',
        description:
          "Company name to retrieve brand data for (e.g., 'Apple Inc', 'Microsoft Corporation'). Must be 3-30 characters. Cannot be used with domain or ticker parameters.",
      },
      ticker: {
        type: 'string',
        description:
          "Stock ticker symbol to retrieve brand data for (e.g., 'AAPL', 'GOOGL', 'BRK.A'). Must be 1-10 characters, letters/numbers/dots only. Cannot be used with domain or name parameters.",
      },
      timeoutMS: {
        type: 'integer',
        description:
          'Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.brand.retrieve(body));
};

export default { metadata, tool, handler };
