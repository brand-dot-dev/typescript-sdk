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
        type: 'object',
        description: 'Optional object specifying which pages to analyze',
        properties: {
          about_us: {
            type: 'boolean',
            description: 'Whether to analyze the about us page',
          },
          blog: {
            type: 'boolean',
            description: 'Whether to analyze the blog',
          },
          careers: {
            type: 'boolean',
            description: 'Whether to analyze the careers page',
          },
          contact_us: {
            type: 'boolean',
            description: 'Whether to analyze the contact us page',
          },
          faq: {
            type: 'boolean',
            description: 'Whether to analyze the FAQ page',
          },
          home_page: {
            type: 'boolean',
            description: 'Whether to analyze the home page',
          },
          privacy_policy: {
            type: 'boolean',
            description: 'Whether to analyze the privacy policy page',
          },
          terms_and_conditions: {
            type: 'boolean',
            description: 'Whether to analyze the terms and conditions page',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.brand.aiQuery(body);
};

export default { metadata, tool, handler };
