// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BrandDev from 'brand.dev';

export const metadata: Metadata = {
  resource: 'brand',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_by_ticker_brand',
  description: 'Retrieve brand data by stock ticker (e.g. AAPL, TSLA, etc.)',
  inputSchema: {
    type: 'object',
    properties: {
      ticker: {
        type: 'string',
        description: 'Stock ticker symbol to retrieve brand data for (e.g. AAPL, TSLA, etc.)',
      },
    },
  },
};

export const handler = (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.brand.retrieveByTicker(body);
};

export default { metadata, tool, handler };
