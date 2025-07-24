// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'brand.dev-mcp/filtering';
import { Metadata, asTextContentResult } from 'brand.dev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBeta feature: Use AI to extract specific data points from a brand's website. The AI will crawl the website and extract the requested information based on the provided data points.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer',\n      description: 'HTTP status code'\n    },\n    data_extracted: {\n      type: 'array',\n      description: 'Array of extracted data points',\n      items: {\n        type: 'object',\n        properties: {\n          datapoint_name: {\n            type: 'string',\n            description: 'Name of the extracted data point'\n          },\n          datapoint_value: {\n            anyOf: [              {\n                type: 'string'\n              },\n              {\n                type: 'number'\n              },\n              {\n                type: 'boolean'\n              },\n              {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              {\n                type: 'array',\n                items: {\n                  type: 'number'\n                }\n              }\n            ],\n            description: 'Value of the extracted data point'\n          }\n        }\n      }\n    },\n    domain: {\n      type: 'string',\n      description: 'The domain that was analyzed'\n    },\n    status: {\n      type: 'string',\n      description: 'Status of the response, e.g., \\'ok\\''\n    },\n    urls_analyzed: {\n      type: 'array',\n      description: 'List of URLs that were analyzed',\n      items: {\n        type: 'string'\n      }\n    }\n  }\n}\n```",
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
      },
      timeoutMS: {
        type: 'integer',
        description:
          'Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['data_to_extract', 'domain'],
  },
  annotations: {},
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.brand.aiQuery(body)));
};

export default { metadata, tool, handler };
