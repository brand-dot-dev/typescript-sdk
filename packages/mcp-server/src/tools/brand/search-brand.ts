// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BrandDev from 'brand.dev';

export const metadata: Metadata = {
  resource: 'brand',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/brand/search',
};

export const tool: Tool = {
  name: 'search_brand',
  description: 'Search brands by query',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Query string to search brands',
      },
    },
  },
};

export const handler = (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.brand.search(body);
};

export default { metadata, tool, handler };
