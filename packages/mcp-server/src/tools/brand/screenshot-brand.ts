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
  httpPath: '/brand/screenshot',
};

export const tool: Tool = {
  name: 'screenshot_brand',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBeta feature: Capture a screenshot of a website. Supports both viewport (standard browser view) and full-page screenshots. Can also screenshot specific page types (login, pricing, etc.) by using heuristics to find the appropriate URL. Returns a URL to the uploaded screenshot image hosted on our CDN.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/brand_screenshot_response',\n  $defs: {\n    brand_screenshot_response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer',\n          description: 'HTTP status code'\n        },\n        domain: {\n          type: 'string',\n          description: 'The normalized domain that was processed'\n        },\n        screenshot: {\n          type: 'string',\n          description: 'Public URL of the uploaded screenshot image'\n        },\n        screenshotType: {\n          type: 'string',\n          description: 'Type of screenshot that was captured',\n          enum: [            'viewport',\n            'fullPage'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the response, e.g., \\'ok\\''\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description:
          "Domain name to take screenshot of (e.g., 'example.com', 'google.com'). The domain will be automatically normalized and validated.",
      },
      fullScreenshot: {
        type: 'string',
        description:
          "Optional parameter to determine screenshot type. If 'true', takes a full page screenshot capturing all content. If 'false' or not provided, takes a viewport screenshot (standard browser view).",
        enum: ['true', 'false'],
      },
      page: {
        type: 'string',
        description:
          "Optional parameter to specify which page type to screenshot. If provided, the system will scrape the domain's links and use heuristics to find the most appropriate URL for the specified page type (30 supported languages). If not provided, screenshots the main domain landing page.",
        enum: ['login', 'signup', 'blog', 'careers', 'pricing', 'terms', 'privacy', 'contact'],
      },
      prioritize: {
        type: 'string',
        description:
          "Optional parameter to prioritize screenshot capture. If 'speed', optimizes for faster capture with basic quality. If 'quality', optimizes for higher quality with longer wait times. Defaults to 'quality' if not provided.",
        enum: ['speed', 'quality'],
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.brand.screenshot(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
