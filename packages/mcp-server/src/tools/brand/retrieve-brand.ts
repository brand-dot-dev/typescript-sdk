// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Retrieve brand data by domain',
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description: 'Domain name to retrieve brand data for',
      },
      force_language: {
        type: 'string',
        description: 'Optional parameter to force the language of the retrieved brand data',
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
    },
  },
};

export const handler = (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.brand.retrieve(body);
};

export default { metadata, tool, handler };
