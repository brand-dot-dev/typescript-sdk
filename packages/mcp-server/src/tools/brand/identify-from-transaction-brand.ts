// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BrandDev from 'brand.dev';

export const metadata: Metadata = {
  resource: 'brand',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/brand/transaction_identifier',
};

export const tool: Tool = {
  name: 'identify_from_transaction_brand',
  description:
    'Endpoint specially designed for platforms that want to identify transaction data by the transaction title.',
  inputSchema: {
    type: 'object',
    properties: {
      transaction_info: {
        type: 'string',
        description: 'Transaction information to identify the brand',
      },
    },
  },
};

export const handler = (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.brand.identifyFromTransaction(body);
};

export default { metadata, tool, handler };
