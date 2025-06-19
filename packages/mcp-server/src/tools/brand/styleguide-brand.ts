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
  httpPath: '/brand/styleguide',
};

export const tool: Tool = {
  name: 'styleguide_brand',
  description:
    "Beta feature: Automatically extract comprehensive design system information from a brand's website including colors, typography, spacing, shadows, and UI components. Uses AI-powered analysis of website screenshots to identify design patterns and create a reusable styleguide.",
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description:
          "Domain name to extract styleguide from (e.g., 'example.com', 'google.com'). The domain will be automatically normalized and validated.",
      },
      timeoutMS: {
        type: 'integer',
        description:
          'Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).',
      },
    },
  },
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.brand.styleguide(body));
};

export default { metadata, tool, handler };
