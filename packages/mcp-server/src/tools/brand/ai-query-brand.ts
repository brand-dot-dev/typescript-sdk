// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BrandDev from 'brand.dev';

export const metadata: Metadata = {
  resource: 'brand',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/brand/ai/query',
};

export const tool: Tool = {
  name: 'ai_query_brand',
  description:
    "Beta feature: Use AI to extract specific data points from a brand's website. The AI will crawl the website and extract the requested information based on the provided data points.",
  inputSchema: {
    type: 'object',
    properties: {
      data_to_extract: {
        type: 'array',
        description: 'Array of data points to extract from the website',
        items: {
          type: 'object',
          properties: {
            datapoint_description: {
              type: 'string',
              description: 'Description of what to extract',
            },
            datapoint_example: {
              type: 'string',
              description: 'Example of the expected value',
            },
            datapoint_name: {
              type: 'string',
              description: 'Name of the data point to extract',
            },
            datapoint_type: {
              type: 'string',
              description: 'Type of the data point',
              enum: ['text', 'number', 'date', 'boolean', 'list', 'url'],
            },
          },
          required: ['datapoint_description', 'datapoint_example', 'datapoint_name', 'datapoint_type'],
        },
      },
      domain: {
        type: 'string',
        description: 'The domain name to analyze',
      },
      specific_pages: {
        type: 'array',
        description: 'Optional array of specific pages to analyze',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.brand.aiQuery(body);
};

export default { metadata, tool, handler };
