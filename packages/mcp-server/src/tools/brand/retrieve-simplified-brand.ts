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
  httpPath: '/brand/retrieve-simplified',
};

export const tool: Tool = {
  name: 'retrieve_simplified_brand',
  description:
    'Returns a simplified version of brand data containing only essential information: domain, title, colors, logos, and backdrops. This endpoint is optimized for faster responses and reduced data transfer.',
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description: 'Domain name to retrieve simplified brand data for',
      },
      timeoutMS: {
        type: 'integer',
        description:
          'Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).',
      },
    },
  },
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.brand.retrieveSimplified(body));
};

export default { metadata, tool, handler };
