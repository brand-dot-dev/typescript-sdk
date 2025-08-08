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
  httpPath: '/brand/naics',
};

export const tool: Tool = {
  name: 'retrieve_naics_brand',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEndpoint to classify any brand into a 2022 NAICS code.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    codes: {\n      type: 'array',\n      description: 'Array of NAICS codes and titles.',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'string',\n            description: 'NAICS code'\n          },\n          title: {\n            type: 'string',\n            description: 'NAICS title'\n          }\n        }\n      }\n    },\n    domain: {\n      type: 'string',\n      description: 'Domain found for the brand'\n    },\n    status: {\n      type: 'string',\n      description: 'Status of the response, e.g., \\'ok\\''\n    },\n    type: {\n      type: 'string',\n      description: 'Industry classification type, for naics api it will be `naics`'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'string',
        description:
          'Brand domain or title to retrieve NAICS code for. If a valid domain is provided in `input`, it will be used for classification, otherwise, we will search for the brand using the provided title.',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.brand.retrieveNaics(body)));
};

export default { metadata, tool, handler };
