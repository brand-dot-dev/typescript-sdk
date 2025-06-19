// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'brand.dev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
    'Beta feature: Capture a screenshot of a website. Supports both viewport (standard browser view) and full-page screenshots. Returns a URL to the uploaded screenshot image hosted on our CDN.',
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
    },
  },
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.brand.screenshot(body));
};

export default { metadata, tool, handler };
