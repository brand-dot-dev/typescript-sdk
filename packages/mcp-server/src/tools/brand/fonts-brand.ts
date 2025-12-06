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
  httpPath: '/brand/fonts',
};

export const tool: Tool = {
  name: 'fonts_brand',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBeta feature: Extract font information from a brand's website including font families, usage statistics, fallbacks, and element/word counts.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/brand_fonts_response',\n  $defs: {\n    brand_fonts_response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer',\n          description: 'HTTP status code, e.g., 200'\n        },\n        domain: {\n          type: 'string',\n          description: 'The normalized domain that was processed'\n        },\n        fonts: {\n          type: 'array',\n          description: 'Array of font usage information',\n          items: {\n            type: 'object',\n            properties: {\n              fallbacks: {\n                type: 'array',\n                description: 'Array of fallback font families',\n                items: {\n                  type: 'string'\n                }\n              },\n              font: {\n                type: 'string',\n                description: 'Font family name'\n              },\n              num_elements: {\n                type: 'number',\n                description: 'Number of elements using this font'\n              },\n              num_words: {\n                type: 'number',\n                description: 'Number of words using this font'\n              },\n              percent_elements: {\n                type: 'number',\n                description: 'Percentage of elements using this font'\n              },\n              percent_words: {\n                type: 'number',\n                description: 'Percentage of words using this font'\n              },\n              uses: {\n                type: 'array',\n                description: 'Array of CSS selectors or element types where this font is used',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'fallbacks',\n              'font',\n              'num_elements',\n              'num_words',\n              'percent_elements',\n              'percent_words',\n              'uses'\n            ]\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the response, e.g., \\'ok\\''\n        }\n      },\n      required: [        'code',\n        'domain',\n        'fonts',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description:
          "Domain name to extract fonts from (e.g., 'example.com', 'google.com'). The domain will be automatically normalized and validated.",
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
    required: ['domain'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.brand.fonts(body)));
  } catch (error) {
    if (error instanceof BrandDev.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
