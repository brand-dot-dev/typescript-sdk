// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'brand.dev-mcp/tools/types';

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
    'Retrieve brand information using a stock ticker symbol. This endpoint looks up the company associated with the ticker and returns its brand data.',
  inputSchema: {
    type: 'object',
    properties: {
      ticker: {
        type: 'string',
        description:
          "Stock ticker symbol to retrieve brand data for (e.g., 'AAPL', 'GOOGL', 'BRK.A'). Must be 1-15 characters, letters/numbers/dots only.",
      },
      force_language: {
        type: 'string',
        description: 'Optional parameter to force the language of the retrieved brand data.',
        enum: [
          'albanian',
          'arabic',
          'azeri',
          'bengali',
          'bulgarian',
          'cebuano',
          'croatian',
          'czech',
          'danish',
          'dutch',
          'english',
          'estonian',
          'farsi',
          'finnish',
          'french',
          'german',
          'hausa',
          'hawaiian',
          'hindi',
          'hungarian',
          'icelandic',
          'indonesian',
          'italian',
          'kazakh',
          'kyrgyz',
          'latin',
          'latvian',
          'lithuanian',
          'macedonian',
          'mongolian',
          'nepali',
          'norwegian',
          'pashto',
          'pidgin',
          'polish',
          'portuguese',
          'romanian',
          'russian',
          'serbian',
          'slovak',
          'slovene',
          'somali',
          'spanish',
          'swahili',
          'swedish',
          'tagalog',
          'turkish',
          'ukrainian',
          'urdu',
          'uzbek',
          'vietnamese',
          'welsh',
        ],
      },
      maxSpeed: {
        type: 'boolean',
        description:
          'Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.',
      },
      ticker_exchange: {
        type: 'string',
        description: 'Optional stock exchange for the ticker. Defaults to NASDAQ if not specified.',
        enum: [
          'AMEX',
          'AMS',
          'AQS',
          'ASX',
          'ATH',
          'BER',
          'BME',
          'BRU',
          'BSE',
          'BUD',
          'BUE',
          'BVC',
          'CBOE',
          'CNQ',
          'CPH',
          'DFM',
          'DOH',
          'DUB',
          'DUS',
          'DXE',
          'EGX',
          'FSX',
          'HAM',
          'HEL',
          'HKSE',
          'HOSE',
          'ICE',
          'IOB',
          'IST',
          'JKT',
          'JNB',
          'JPX',
          'KLS',
          'KOE',
          'KSC',
          'KUW',
          'LIS',
          'LSE',
          'MCX',
          'MEX',
          'MIL',
          'MUN',
          'NASDAQ',
          'NEO',
          'NSE',
          'NYSE',
          'NZE',
          'OSL',
          'OTC',
          'PAR',
          'PNK',
          'PRA',
          'RIS',
          'SAO',
          'SAU',
          'SES',
          'SET',
          'SGO',
          'SHH',
          'SHZ',
          'SIX',
          'STO',
          'STU',
          'TAI',
          'TAL',
          'TLV',
          'TSX',
          'TSXV',
          'TWO',
          'VIE',
          'WSE',
          'XETRA',
        ],
      },
      timeoutMS: {
        type: 'integer',
        description:
          'Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).',
      },
    },
    required: ['ticker'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BrandDev, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.brand.retrieveByTicker(body));
  } catch (error) {
    if (error instanceof BrandDev.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
