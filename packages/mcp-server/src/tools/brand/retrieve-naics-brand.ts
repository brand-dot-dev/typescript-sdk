// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'brand.dev-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'brand.dev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEndpoint to classify any brand into a 2022 NAICS code.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/brand_retrieve_naics_response',\n  $defs: {\n    brand_retrieve_naics_response: {\n      type: 'object',\n      properties: {\n        codes: {\n          type: 'array',\n          description: 'Array of NAICS codes and titles.',\n          items: {\n            type: 'object',\n            properties: {\n              code: {\n                type: 'string',\n                description: 'NAICS code'\n              },\n              confidence: {\n                type: 'string',\n                description: 'Confidence level for how well this NAICS code matches the company description',\n                enum: [                  'high',\n                  'medium',\n                  'low'\n                ]\n              },\n              name: {\n                type: 'string',\n                description: 'NAICS title'\n              }\n            },\n            required: [              'code',\n              'confidence',\n              'name'\n            ]\n          }\n        },\n        domain: {\n          type: 'string',\n          description: 'Domain found for the brand'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the response, e.g., \\'ok\\''\n        },\n        type: {\n          type: 'string',\n          description: 'Industry classification type, for naics api it will be `naics`'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'string',
        description:
          'Brand domain or title to retrieve NAICS code for. If a valid domain is provided in `input`, it will be used for classification, otherwise, we will search for the brand using the provided title.',
      },
      maxResults: {
        type: 'integer',
        description: 'Maximum number of NAICS codes to return. Must be between 1 and 10. Defaults to 5.',
      },
      minResults: {
        type: 'integer',
        description: 'Minimum number of NAICS codes to return. Must be at least 1. Defaults to 1.',
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
    required: ['input'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.brand.retrieveNaics(body)));
  } catch (error) {
    if (error instanceof BrandDev.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
