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
  httpPath: '/brand/retrieve-by-ticker',
};

export const tool: Tool = {
  name: 'retrieve_by_ticker_brand',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve brand data by stock ticker (e.g. AAPL, TSLA, etc.)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    brand: {\n      type: 'object',\n      description: 'Detailed brand information',\n      properties: {\n        address: {\n          type: 'object',\n          description: 'Physical address of the brand',\n          properties: {\n            city: {\n              type: 'string',\n              description: 'City name'\n            },\n            country: {\n              type: 'string',\n              description: 'Country name'\n            },\n            country_code: {\n              type: 'string',\n              description: 'Country code'\n            },\n            postal_code: {\n              type: 'string',\n              description: 'Postal or ZIP code'\n            },\n            state_code: {\n              type: 'string',\n              description: 'State or province code'\n            },\n            state_province: {\n              type: 'string',\n              description: 'State or province name'\n            },\n            street: {\n              type: 'string',\n              description: 'Street address'\n            }\n          }\n        },\n        backdrops: {\n          type: 'array',\n          description: 'An array of backdrop images for the brand',\n          items: {\n            type: 'object',\n            properties: {\n              colors: {\n                type: 'array',\n                description: 'Array of colors in the backdrop image',\n                items: {\n                  type: 'object',\n                  properties: {\n                    hex: {\n                      type: 'string',\n                      description: 'Color in hexadecimal format'\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Name of the color'\n                    }\n                  }\n                }\n              },\n              resolution: {\n                type: 'object',\n                description: 'Resolution of the backdrop image',\n                properties: {\n                  height: {\n                    type: 'integer',\n                    description: 'Height of the image in pixels'\n                  },\n                  width: {\n                    type: 'integer',\n                    description: 'Width of the image in pixels'\n                  }\n                }\n              },\n              url: {\n                type: 'string',\n                description: 'URL of the backdrop image'\n              }\n            }\n          }\n        },\n        colors: {\n          type: 'array',\n          description: 'An array of brand colors',\n          items: {\n            type: 'object',\n            properties: {\n              hex: {\n                type: 'string',\n                description: 'Color in hexadecimal format'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the color'\n              }\n            }\n          }\n        },\n        description: {\n          type: 'string',\n          description: 'A brief description of the brand'\n        },\n        domain: {\n          type: 'string',\n          description: 'The domain name of the brand'\n        },\n        is_nsfw: {\n          type: 'boolean',\n          description: 'Indicates whether the brand content is not safe for work (NSFW)'\n        },\n        logos: {\n          type: 'array',\n          description: 'An array of logos associated with the brand',\n          items: {\n            type: 'object',\n            properties: {\n              colors: {\n                type: 'array',\n                description: 'Array of colors in the logo',\n                items: {\n                  type: 'object',\n                  properties: {\n                    hex: {\n                      type: 'string',\n                      description: 'Color in hexadecimal format'\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Name of the color'\n                    }\n                  }\n                }\n              },\n              group: {\n                type: 'integer',\n                description: 'Group identifier for logos'\n              },\n              mode: {\n                type: 'string',\n                description: 'Mode of the logo, e.g., \\'dark\\', \\'light\\''\n              },\n              resolution: {\n                type: 'object',\n                description: 'Resolution of the logo image',\n                properties: {\n                  height: {\n                    type: 'integer',\n                    description: 'Height of the image in pixels'\n                  },\n                  width: {\n                    type: 'integer',\n                    description: 'Width of the image in pixels'\n                  }\n                }\n              },\n              url: {\n                type: 'string',\n                description: 'URL of the logo image'\n              }\n            }\n          }\n        },\n        slogan: {\n          type: 'string',\n          description: 'The brand\\'s slogan'\n        },\n        socials: {\n          type: 'array',\n          description: 'An array of social media links for the brand',\n          items: {\n            type: 'object',\n            properties: {\n              type: {\n                type: 'string',\n                description: 'Type of social media, e.g., \\'facebook\\', \\'twitter\\''\n              },\n              url: {\n                type: 'string',\n                description: 'URL of the social media page'\n              }\n            }\n          }\n        },\n        stock: {\n          type: 'object',\n          description: 'Stock market information for this brand (will be null if not a publicly traded company)',\n          properties: {\n            exchange: {\n              type: 'string',\n              description: 'Stock exchange name'\n            },\n            ticker: {\n              type: 'string',\n              description: 'Stock ticker symbol'\n            }\n          }\n        },\n        title: {\n          type: 'string',\n          description: 'The title or name of the brand'\n        }\n      }\n    },\n    code: {\n      type: 'integer',\n      description: 'HTTP status code'\n    },\n    status: {\n      type: 'string',\n      description: 'Status of the response, e.g., \\'ok\\''\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ticker: {
        type: 'string',
        description: 'Stock ticker symbol to retrieve brand data for (e.g. AAPL, TSLA, etc.)',
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
    required: ['ticker'],
  },
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.brand.retrieveByTicker(body)));
};

export default { metadata, tool, handler };
