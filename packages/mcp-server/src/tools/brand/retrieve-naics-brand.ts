// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'brand.dev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BrandDev from 'brand.dev';

export const metadata: Metadata = {
  resource: 'brand',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/brand/naics',
};

export const tool: Tool = {
  name: 'retrieve_naics_brand',
  description: 'Endpoint to classify any brand into a 2022 NAICS code.',
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'string',
        description:
          'Brand domain or title to retrieve NAICS code for. If a valid domain is provided in `input`, it will be used for classification, otherwise, we will search for the brand using the provided title.',
      },
    },
  },
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.brand.retrieveNaics(body));
};

export default { metadata, tool, handler };
