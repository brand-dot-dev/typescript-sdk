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
  httpPath: '/brand/prefetch',
};

export const tool: Tool = {
  name: 'prefetch_brand',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSignal that you may fetch brand data for a particular domain soon to improve latency. This endpoint does not charge credits and is available for paid customers to optimize future requests. [You must be on a paid plan to use this endpoint]\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    domain: {\n      type: 'string',\n      description: 'The domain that was queued for prefetching'\n    },\n    message: {\n      type: 'string',\n      description: 'Success message'\n    },\n    status: {\n      type: 'string',\n      description: 'Status of the response, e.g., \\'ok\\''\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description: 'Domain name to prefetch brand data for',
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
  return asTextContentResult(await maybeFilter(args, await client.brand.prefetch(body)));
};

export default { metadata, tool, handler };
