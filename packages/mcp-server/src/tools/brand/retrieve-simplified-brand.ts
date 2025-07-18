// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'brand.dev-mcp/filtering';
import { Metadata, asTextContentResult } from 'brand.dev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a simplified version of brand data containing only essential information: domain, title, colors, logos, and backdrops. This endpoint is optimized for faster responses and reduced data transfer.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    brand: {\n      type: 'object',\n      description: 'Simplified brand information',\n      properties: {\n        backdrops: {\n          type: 'array',\n          description: 'An array of backdrop images for the brand',\n          items: {\n            type: 'object',\n            properties: {\n              colors: {\n                type: 'array',\n                description: 'Array of colors in the backdrop image',\n                items: {\n                  type: 'object',\n                  properties: {\n                    hex: {\n                      type: 'string',\n                      description: 'Color in hexadecimal format'\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Name of the color'\n                    }\n                  }\n                }\n              },\n              resolution: {\n                type: 'object',\n                description: 'Resolution of the backdrop image',\n                properties: {\n                  aspect_ratio: {\n                    type: 'number',\n                    description: 'Aspect ratio of the image (width/height)'\n                  },\n                  height: {\n                    type: 'integer',\n                    description: 'Height of the image in pixels'\n                  },\n                  width: {\n                    type: 'integer',\n                    description: 'Width of the image in pixels'\n                  }\n                }\n              },\n              url: {\n                type: 'string',\n                description: 'URL of the backdrop image'\n              }\n            }\n          }\n        },\n        colors: {\n          type: 'array',\n          description: 'An array of brand colors',\n          items: {\n            type: 'object',\n            properties: {\n              hex: {\n                type: 'string',\n                description: 'Color in hexadecimal format'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the color'\n              }\n            }\n          }\n        },\n        domain: {\n          type: 'string',\n          description: 'The domain name of the brand'\n        },\n        logos: {\n          type: 'array',\n          description: 'An array of logos associated with the brand',\n          items: {\n            type: 'object',\n            properties: {\n              colors: {\n                type: 'array',\n                description: 'Array of colors in the logo',\n                items: {\n                  type: 'object',\n                  properties: {\n                    hex: {\n                      type: 'string',\n                      description: 'Color in hexadecimal format'\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Name of the color'\n                    }\n                  }\n                }\n              },\n              group: {\n                type: 'integer',\n                description: 'Group identifier for logos'\n              },\n              mode: {\n                type: 'string',\n                description: 'Mode of the logo, e.g., \\'dark\\', \\'light\\''\n              },\n              resolution: {\n                type: 'object',\n                description: 'Resolution of the logo image',\n                properties: {\n                  aspect_ratio: {\n                    type: 'number',\n                    description: 'Aspect ratio of the image (width/height)'\n                  },\n                  height: {\n                    type: 'integer',\n                    description: 'Height of the image in pixels'\n                  },\n                  width: {\n                    type: 'integer',\n                    description: 'Width of the image in pixels'\n                  }\n                }\n              },\n              type: {\n                type: 'string',\n                description: 'Type of the logo based on resolution (e.g., \\'icon\\', \\'logo\\', \\'banner\\')'\n              },\n              url: {\n                type: 'string',\n                description: 'URL of the logo image'\n              }\n            }\n          }\n        },\n        title: {\n          type: 'string',\n          description: 'The title or name of the brand'\n        }\n      }\n    },\n    code: {\n      type: 'integer',\n      description: 'HTTP status code of the response'\n    },\n    status: {\n      type: 'string',\n      description: 'Status of the response, e.g., \\'ok\\''\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['domain'],
  },
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.brand.retrieveSimplified(body)));
};

export default { metadata, tool, handler };
