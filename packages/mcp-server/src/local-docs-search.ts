// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'retrieve',
    endpoint: '/brand/retrieve',
    httpMethod: 'get',
    summary: 'Retrieve brand data by domain',
    description: 'Retrieve logos, backdrops, colors, industry, description, and more from any domain',
    stainlessPath: '(resource) brand > (method) retrieve',
    qualified: 'client.brand.retrieve',
    params: ['domain: string;', 'force_language?: string;', 'maxSpeed?: boolean;', 'timeoutMS?: number;'],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve\n\n`client.brand.retrieve(domain: string, force_language?: string, maxSpeed?: boolean, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve`\n\nRetrieve logos, backdrops, colors, industry, description, and more from any domain\n\n### Parameters\n\n- `domain: string`\n  Domain name to retrieve brand data for (e.g., 'example.com', 'google.com'). Cannot be used with name or ticker parameters.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data. Works with all three lookup methods.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data. Works with all three lookup methods.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst brand = await client.brand.retrieve({ domain: 'domain' });\n\nconsole.log(brand);\n```",
  },
  {
    name: 'ai_product',
    endpoint: '/brand/ai/product',
    httpMethod: 'post',
    summary: 'Extract a single product from a URL',
    description:
      'Beta feature: Given a single URL, determines if it is a product detail page, classifies the platform/product type, and extracts the product information. Supports Amazon, TikTok Shop, Etsy, and generic ecommerce sites.',
    stainlessPath: '(resource) brand > (method) ai_product',
    qualified: 'client.brand.aiProduct',
    params: ['url: string;', 'timeoutMS?: number;'],
    response:
      "{ is_product_page?: boolean; platform?: 'amazon' | 'tiktok_shop' | 'etsy' | 'generic'; product?: { description: string; features: string[]; images: string[]; name: string; tags: string[]; target_audience: string[]; billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based'; category?: string; currency?: string; image_url?: string; price?: number; pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom'; url?: string; }; }",
    markdown:
      "## ai_product\n\n`client.brand.aiProduct(url: string, timeoutMS?: number): { is_product_page?: boolean; platform?: 'amazon' | 'tiktok_shop' | 'etsy' | 'generic'; product?: object; }`\n\n**post** `/brand/ai/product`\n\nBeta feature: Given a single URL, determines if it is a product detail page, classifies the platform/product type, and extracts the product information. Supports Amazon, TikTok Shop, Etsy, and generic ecommerce sites.\n\n### Parameters\n\n- `url: string`\n  The product page URL to extract product data from.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ is_product_page?: boolean; platform?: 'amazon' | 'tiktok_shop' | 'etsy' | 'generic'; product?: { description: string; features: string[]; images: string[]; name: string; tags: string[]; target_audience: string[]; billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based'; category?: string; currency?: string; image_url?: string; price?: number; pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom'; url?: string; }; }`\n\n  - `is_product_page?: boolean`\n  - `platform?: 'amazon' | 'tiktok_shop' | 'etsy' | 'generic'`\n  - `product?: { description: string; features: string[]; images: string[]; name: string; tags: string[]; target_audience: string[]; billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based'; category?: string; currency?: string; image_url?: string; price?: number; pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom'; url?: string; }`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.aiProduct({ url: 'https://example.com' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'ai_products',
    endpoint: '/brand/ai/products',
    httpMethod: 'post',
    summary: "Extract products from a brand's website",
    description:
      "Beta feature: Extract product information from a brand's website. We will analyze the website and return a list of products with details such as name, description, image, pricing, features, and more.",
    stainlessPath: '(resource) brand > (method) ai_products',
    qualified: 'client.brand.aiProducts',
    params: [
      '{ domain: string; maxProducts?: number; timeoutMS?: number; } | { directUrl: string; maxProducts?: number; timeoutMS?: number; };',
    ],
    response:
      "{ products?: { description: string; features: string[]; images: string[]; name: string; tags: string[]; target_audience: string[]; billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based'; category?: string; currency?: string; image_url?: string; price?: number; pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom'; url?: string; }[]; }",
  },
  {
    name: 'ai_query',
    endpoint: '/brand/ai/query',
    httpMethod: 'post',
    summary: 'Query website data using AI',
    description:
      "Use AI to extract specific data points from a brand's website. The AI will crawl the website and extract the requested information based on the provided data points.",
    stainlessPath: '(resource) brand > (method) ai_query',
    qualified: 'client.brand.aiQuery',
    params: [
      "data_to_extract: { datapoint_description: string; datapoint_example: string; datapoint_name: string; datapoint_type: 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url'; datapoint_list_type?: 'string' | 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url' | 'object'; datapoint_object_schema?: object; }[];",
      'domain: string;',
      'specific_pages?: { about_us?: boolean; blog?: boolean; careers?: boolean; contact_us?: boolean; faq?: boolean; home_page?: boolean; pricing?: boolean; privacy_policy?: boolean; terms_and_conditions?: boolean; };',
      'timeoutMS?: number;',
    ],
    response:
      '{ data_extracted?: { datapoint_name?: string; datapoint_value?: string | number | boolean | string[] | number[] | object[]; }[]; domain?: string; status?: string; urls_analyzed?: string[]; }',
    markdown:
      "## ai_query\n\n`client.brand.aiQuery(data_to_extract: { datapoint_description: string; datapoint_example: string; datapoint_name: string; datapoint_type: 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url'; datapoint_list_type?: 'string' | 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url' | 'object'; datapoint_object_schema?: object; }[], domain: string, specific_pages?: { about_us?: boolean; blog?: boolean; careers?: boolean; contact_us?: boolean; faq?: boolean; home_page?: boolean; pricing?: boolean; privacy_policy?: boolean; terms_and_conditions?: boolean; }, timeoutMS?: number): { data_extracted?: object[]; domain?: string; status?: string; urls_analyzed?: string[]; }`\n\n**post** `/brand/ai/query`\n\nUse AI to extract specific data points from a brand's website. The AI will crawl the website and extract the requested information based on the provided data points.\n\n### Parameters\n\n- `data_to_extract: { datapoint_description: string; datapoint_example: string; datapoint_name: string; datapoint_type: 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url'; datapoint_list_type?: 'string' | 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url' | 'object'; datapoint_object_schema?: object; }[]`\n  Array of data points to extract from the website\n\n- `domain: string`\n  The domain name to analyze\n\n- `specific_pages?: { about_us?: boolean; blog?: boolean; careers?: boolean; contact_us?: boolean; faq?: boolean; home_page?: boolean; pricing?: boolean; privacy_policy?: boolean; terms_and_conditions?: boolean; }`\n  Optional object specifying which pages to analyze\n  - `about_us?: boolean`\n    Whether to analyze the about us page\n  - `blog?: boolean`\n    Whether to analyze the blog\n  - `careers?: boolean`\n    Whether to analyze the careers page\n  - `contact_us?: boolean`\n    Whether to analyze the contact us page\n  - `faq?: boolean`\n    Whether to analyze the FAQ page\n  - `home_page?: boolean`\n    Whether to analyze the home page\n  - `pricing?: boolean`\n    Whether to analyze the pricing page\n  - `privacy_policy?: boolean`\n    Whether to analyze the privacy policy page\n  - `terms_and_conditions?: boolean`\n    Whether to analyze the terms and conditions page\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ data_extracted?: { datapoint_name?: string; datapoint_value?: string | number | boolean | string[] | number[] | object[]; }[]; domain?: string; status?: string; urls_analyzed?: string[]; }`\n\n  - `data_extracted?: { datapoint_name?: string; datapoint_value?: string | number | boolean | string[] | number[] | object[]; }[]`\n  - `domain?: string`\n  - `status?: string`\n  - `urls_analyzed?: string[]`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.aiQuery({ data_to_extract: [{\n  datapoint_description: 'datapoint_description',\n  datapoint_example: 'datapoint_example',\n  datapoint_name: 'datapoint_name',\n  datapoint_type: 'text',\n}], domain: 'domain' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'fonts',
    endpoint: '/brand/fonts',
    httpMethod: 'get',
    summary: 'Extract fonts from website',
    description:
      "Extract font information from a brand's website including font families, usage statistics, fallbacks, and element/word counts.",
    stainlessPath: '(resource) brand > (method) fonts',
    qualified: 'client.brand.fonts',
    params: ['domain: string;', 'timeoutMS?: number;'],
    response:
      '{ code: number; domain: string; fonts: { fallbacks: string[]; font: string; num_elements: number; num_words: number; percent_elements: number; percent_words: number; uses: string[]; }[]; status: string; }',
    markdown:
      "## fonts\n\n`client.brand.fonts(domain: string, timeoutMS?: number): { code: number; domain: string; fonts: object[]; status: string; }`\n\n**get** `/brand/fonts`\n\nExtract font information from a brand's website including font families, usage statistics, fallbacks, and element/word counts.\n\n### Parameters\n\n- `domain: string`\n  Domain name to extract fonts from (e.g., 'example.com', 'google.com'). The domain will be automatically normalized and validated.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ code: number; domain: string; fonts: { fallbacks: string[]; font: string; num_elements: number; num_words: number; percent_elements: number; percent_words: number; uses: string[]; }[]; status: string; }`\n\n  - `code: number`\n  - `domain: string`\n  - `fonts: { fallbacks: string[]; font: string; num_elements: number; num_words: number; percent_elements: number; percent_words: number; uses: string[]; }[]`\n  - `status: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.fonts({ domain: 'domain' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'identify_from_transaction',
    endpoint: '/brand/transaction_identifier',
    httpMethod: 'get',
    summary: 'Identify brand from transaction data',
    description:
      'Endpoint specially designed for platforms that want to identify transaction data by the transaction title.',
    stainlessPath: '(resource) brand > (method) identify_from_transaction',
    qualified: 'client.brand.identifyFromTransaction',
    params: [
      'transaction_info: string;',
      'city?: string;',
      'country_gl?: string;',
      'force_language?: string;',
      'high_confidence_only?: boolean;',
      'maxSpeed?: boolean;',
      'mcc?: string;',
      'phone?: number;',
      'timeoutMS?: number;',
    ],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## identify_from_transaction\n\n`client.brand.identifyFromTransaction(transaction_info: string, city?: string, country_gl?: string, force_language?: string, high_confidence_only?: boolean, maxSpeed?: boolean, mcc?: string, phone?: number, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/transaction_identifier`\n\nEndpoint specially designed for platforms that want to identify transaction data by the transaction title.\n\n### Parameters\n\n- `transaction_info: string`\n  Transaction information to identify the brand\n\n- `city?: string`\n  Optional city name to prioritize when searching for the brand.\n\n- `country_gl?: string`\n  Optional country code (GL parameter) to specify the country. This affects the geographic location used for search queries.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `high_confidence_only?: boolean`\n  When set to true, the API will perform an additional verification steps to ensure the identified brand matches the transaction with high confidence. Defaults to false.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.\n\n- `mcc?: string`\n  Optional Merchant Category Code (MCC) to help identify the business category/industry. \n\n- `phone?: number`\n  Optional phone number from the transaction to help verify brand match.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.identifyFromTransaction({ transaction_info: 'transaction_info' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'prefetch',
    endpoint: '/brand/prefetch',
    httpMethod: 'post',
    summary: 'Prefetch brand data for a domain',
    description:
      'Signal that you may fetch brand data for a particular domain soon to improve latency. This endpoint does not charge credits and is available for paid customers to optimize future requests. [You must be on a paid plan to use this endpoint]',
    stainlessPath: '(resource) brand > (method) prefetch',
    qualified: 'client.brand.prefetch',
    params: ['domain: string;', 'timeoutMS?: number;'],
    response: '{ domain?: string; message?: string; status?: string; }',
    markdown:
      "## prefetch\n\n`client.brand.prefetch(domain: string, timeoutMS?: number): { domain?: string; message?: string; status?: string; }`\n\n**post** `/brand/prefetch`\n\nSignal that you may fetch brand data for a particular domain soon to improve latency. This endpoint does not charge credits and is available for paid customers to optimize future requests. [You must be on a paid plan to use this endpoint]\n\n### Parameters\n\n- `domain: string`\n  Domain name to prefetch brand data for\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ domain?: string; message?: string; status?: string; }`\n\n  - `domain?: string`\n  - `message?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.prefetch({ domain: 'domain' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'prefetch_by_email',
    endpoint: '/brand/prefetch-by-email',
    httpMethod: 'post',
    summary: 'Prefetch brand data by email',
    description:
      "Signal that you may fetch brand data for a particular domain soon to improve latency. This endpoint accepts an email address, extracts the domain from it, validates that it's not a disposable or free email provider, and queues the domain for prefetching. This endpoint does not charge credits and is available for paid customers to optimize future requests. [You must be on a paid plan to use this endpoint]",
    stainlessPath: '(resource) brand > (method) prefetch_by_email',
    qualified: 'client.brand.prefetchByEmail',
    params: ['email: string;', 'timeoutMS?: number;'],
    response: '{ domain?: string; message?: string; status?: string; }',
    markdown:
      "## prefetch_by_email\n\n`client.brand.prefetchByEmail(email: string, timeoutMS?: number): { domain?: string; message?: string; status?: string; }`\n\n**post** `/brand/prefetch-by-email`\n\nSignal that you may fetch brand data for a particular domain soon to improve latency. This endpoint accepts an email address, extracts the domain from it, validates that it's not a disposable or free email provider, and queues the domain for prefetching. This endpoint does not charge credits and is available for paid customers to optimize future requests. [You must be on a paid plan to use this endpoint]\n\n### Parameters\n\n- `email: string`\n  Email address to prefetch brand data for. The domain will be extracted from the email. Free email providers (gmail.com, yahoo.com, etc.) and disposable email addresses are not allowed.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ domain?: string; message?: string; status?: string; }`\n\n  - `domain?: string`\n  - `message?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.prefetchByEmail({ email: 'dev@stainless.com' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_by_email',
    endpoint: '/brand/retrieve-by-email',
    httpMethod: 'get',
    summary: 'Retrieve brand data by email address',
    description:
      'Retrieve brand information using an email address while detecting disposable and free email addresses. This endpoint extracts the domain from the email address and returns brand data for that domain. Disposable and free email addresses (like gmail.com, yahoo.com) will throw a 422 error.',
    stainlessPath: '(resource) brand > (method) retrieve_by_email',
    qualified: 'client.brand.retrieveByEmail',
    params: ['email: string;', 'force_language?: string;', 'maxSpeed?: boolean;', 'timeoutMS?: number;'],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve_by_email\n\n`client.brand.retrieveByEmail(email: string, force_language?: string, maxSpeed?: boolean, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve-by-email`\n\nRetrieve brand information using an email address while detecting disposable and free email addresses. This endpoint extracts the domain from the email address and returns brand data for that domain. Disposable and free email addresses (like gmail.com, yahoo.com) will throw a 422 error.\n\n### Parameters\n\n- `email: string`\n  Email address to retrieve brand data for (e.g., 'contact@example.com'). The domain will be extracted from the email. Free email providers (gmail.com, yahoo.com, etc.) and disposable email addresses are not allowed.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveByEmail({ email: 'dev@stainless.com' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_by_isin',
    endpoint: '/brand/retrieve-by-isin',
    httpMethod: 'get',
    summary: 'Retrieve brand data by ISIN',
    description:
      'Retrieve brand information using an ISIN (International Securities Identification Number). This endpoint looks up the company associated with the ISIN and returns its brand data.',
    stainlessPath: '(resource) brand > (method) retrieve_by_isin',
    qualified: 'client.brand.retrieveByIsin',
    params: ['isin: string;', 'force_language?: string;', 'maxSpeed?: boolean;', 'timeoutMS?: number;'],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve_by_isin\n\n`client.brand.retrieveByIsin(isin: string, force_language?: string, maxSpeed?: boolean, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve-by-isin`\n\nRetrieve brand information using an ISIN (International Securities Identification Number). This endpoint looks up the company associated with the ISIN and returns its brand data.\n\n### Parameters\n\n- `isin: string`\n  ISIN (International Securities Identification Number) to retrieve brand data for (e.g., 'AU000000IMD5', 'US0378331005'). Must be exactly 12 characters: 2 letters followed by 9 alphanumeric characters and ending with a digit.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveByIsin({ isin: 'SE60513A9993' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_by_name',
    endpoint: '/brand/retrieve-by-name',
    httpMethod: 'get',
    summary: 'Retrieve brand data by company name',
    description:
      'Retrieve brand information using a company name. This endpoint searches for the company by name and returns its brand data.',
    stainlessPath: '(resource) brand > (method) retrieve_by_name',
    qualified: 'client.brand.retrieveByName',
    params: [
      'name: string;',
      'country_gl?: string;',
      'force_language?: string;',
      'maxSpeed?: boolean;',
      'timeoutMS?: number;',
    ],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve_by_name\n\n`client.brand.retrieveByName(name: string, country_gl?: string, force_language?: string, maxSpeed?: boolean, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve-by-name`\n\nRetrieve brand information using a company name. This endpoint searches for the company by name and returns its brand data.\n\n### Parameters\n\n- `name: string`\n  Company name to retrieve brand data for (e.g., 'Apple Inc', 'Microsoft Corporation'). Must be 3-30 characters.\n\n- `country_gl?: string`\n  Optional country code (GL parameter) to specify the country. This affects the geographic location used for search queries.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveByName({ name: 'xxx' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_by_ticker',
    endpoint: '/brand/retrieve-by-ticker',
    httpMethod: 'get',
    summary: 'Retrieve brand data by stock ticker',
    description:
      'Retrieve brand information using a stock ticker symbol. This endpoint looks up the company associated with the ticker and returns its brand data.',
    stainlessPath: '(resource) brand > (method) retrieve_by_ticker',
    qualified: 'client.brand.retrieveByTicker',
    params: [
      'ticker: string;',
      'force_language?: string;',
      'maxSpeed?: boolean;',
      'ticker_exchange?: string;',
      'timeoutMS?: number;',
    ],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve_by_ticker\n\n`client.brand.retrieveByTicker(ticker: string, force_language?: string, maxSpeed?: boolean, ticker_exchange?: string, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve-by-ticker`\n\nRetrieve brand information using a stock ticker symbol. This endpoint looks up the company associated with the ticker and returns its brand data.\n\n### Parameters\n\n- `ticker: string`\n  Stock ticker symbol to retrieve brand data for (e.g., 'AAPL', 'GOOGL', 'BRK.A'). Must be 1-15 characters, letters/numbers/dots only.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.\n\n- `ticker_exchange?: string`\n  Optional stock exchange for the ticker. Defaults to NASDAQ if not specified.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveByTicker({ ticker: 'ticker' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_naics',
    endpoint: '/brand/naics',
    httpMethod: 'get',
    summary: 'Retrieve NAICS code for any brand',
    description: 'Endpoint to classify any brand into a 2022 NAICS code.',
    stainlessPath: '(resource) brand > (method) retrieve_naics',
    qualified: 'client.brand.retrieveNaics',
    params: ['input: string;', 'maxResults?: number;', 'minResults?: number;', 'timeoutMS?: number;'],
    response:
      "{ codes?: { code: string; confidence: 'high' | 'medium' | 'low'; name: string; }[]; domain?: string; status?: string; type?: string; }",
    markdown:
      "## retrieve_naics\n\n`client.brand.retrieveNaics(input: string, maxResults?: number, minResults?: number, timeoutMS?: number): { codes?: object[]; domain?: string; status?: string; type?: string; }`\n\n**get** `/brand/naics`\n\nEndpoint to classify any brand into a 2022 NAICS code.\n\n### Parameters\n\n- `input: string`\n  Brand domain or title to retrieve NAICS code for. If a valid domain is provided in `input`, it will be used for classification, otherwise, we will search for the brand using the provided title.\n\n- `maxResults?: number`\n  Maximum number of NAICS codes to return. Must be between 1 and 10. Defaults to 5.\n\n- `minResults?: number`\n  Minimum number of NAICS codes to return. Must be at least 1. Defaults to 1.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ codes?: { code: string; confidence: 'high' | 'medium' | 'low'; name: string; }[]; domain?: string; status?: string; type?: string; }`\n\n  - `codes?: { code: string; confidence: 'high' | 'medium' | 'low'; name: string; }[]`\n  - `domain?: string`\n  - `status?: string`\n  - `type?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveNaics({ input: 'input' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_simplified',
    endpoint: '/brand/retrieve-simplified',
    httpMethod: 'get',
    summary: 'Retrieve simplified brand data by domain',
    description:
      'Returns a simplified version of brand data containing only essential information: domain, title, colors, logos, and backdrops. This endpoint is optimized for faster responses and reduced data transfer.',
    stainlessPath: '(resource) brand > (method) retrieve_simplified',
    qualified: 'client.brand.retrieveSimplified',
    params: ['domain: string;', 'timeoutMS?: number;'],
    response:
      "{ brand?: { backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; domain?: string; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve_simplified\n\n`client.brand.retrieveSimplified(domain: string, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve-simplified`\n\nReturns a simplified version of brand data containing only essential information: domain, title, colors, logos, and backdrops. This endpoint is optimized for faster responses and reduced data transfer.\n\n### Parameters\n\n- `domain: string`\n  Domain name to retrieve simplified brand data for\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; domain?: string; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; domain?: string; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveSimplified({ domain: 'domain' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'screenshot',
    endpoint: '/brand/screenshot',
    httpMethod: 'get',
    summary: 'Take screenshot of website',
    description:
      'Capture a screenshot of a website. Supports both viewport (standard browser view) and full-page screenshots. Can also screenshot specific page types (login, pricing, etc.) by using heuristics to find the appropriate URL. Returns a URL to the uploaded screenshot image hosted on our CDN.',
    stainlessPath: '(resource) brand > (method) screenshot',
    qualified: 'client.brand.screenshot',
    params: [
      'domain: string;',
      "fullScreenshot?: 'true' | 'false';",
      "page?: 'login' | 'signup' | 'blog' | 'careers' | 'pricing' | 'terms' | 'privacy' | 'contact';",
      "prioritize?: 'speed' | 'quality';",
    ],
    response:
      "{ code?: number; domain?: string; screenshot?: string; screenshotType?: 'viewport' | 'fullPage'; status?: string; }",
    markdown:
      "## screenshot\n\n`client.brand.screenshot(domain: string, fullScreenshot?: 'true' | 'false', page?: 'login' | 'signup' | 'blog' | 'careers' | 'pricing' | 'terms' | 'privacy' | 'contact', prioritize?: 'speed' | 'quality'): { code?: number; domain?: string; screenshot?: string; screenshotType?: 'viewport' | 'fullPage'; status?: string; }`\n\n**get** `/brand/screenshot`\n\nCapture a screenshot of a website. Supports both viewport (standard browser view) and full-page screenshots. Can also screenshot specific page types (login, pricing, etc.) by using heuristics to find the appropriate URL. Returns a URL to the uploaded screenshot image hosted on our CDN.\n\n### Parameters\n\n- `domain: string`\n  Domain name to take screenshot of (e.g., 'example.com', 'google.com'). The domain will be automatically normalized and validated.\n\n- `fullScreenshot?: 'true' | 'false'`\n  Optional parameter to determine screenshot type. If 'true', takes a full page screenshot capturing all content. If 'false' or not provided, takes a viewport screenshot (standard browser view).\n\n- `page?: 'login' | 'signup' | 'blog' | 'careers' | 'pricing' | 'terms' | 'privacy' | 'contact'`\n  Optional parameter to specify which page type to screenshot. If provided, the system will scrape the domain's links and use heuristics to find the most appropriate URL for the specified page type (30 supported languages). If not provided, screenshots the main domain landing page.\n\n- `prioritize?: 'speed' | 'quality'`\n  Optional parameter to prioritize screenshot capture. If 'speed', optimizes for faster capture with basic quality. If 'quality', optimizes for higher quality with longer wait times. Defaults to 'quality' if not provided.\n\n### Returns\n\n- `{ code?: number; domain?: string; screenshot?: string; screenshotType?: 'viewport' | 'fullPage'; status?: string; }`\n\n  - `code?: number`\n  - `domain?: string`\n  - `screenshot?: string`\n  - `screenshotType?: 'viewport' | 'fullPage'`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.screenshot({ domain: 'domain' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'styleguide',
    endpoint: '/brand/styleguide',
    httpMethod: 'get',
    summary: 'Extract design system and styleguide from website',
    description:
      "Automatically extract comprehensive design system information from a brand's website including colors, typography, spacing, shadows, and UI components. Either 'domain' or 'directUrl' must be provided as a query parameter, but not both.",
    stainlessPath: '(resource) brand > (method) styleguide',
    qualified: 'client.brand.styleguide',
    params: [
      'directUrl?: string;',
      'domain?: string;',
      "prioritize?: 'speed' | 'quality';",
      'timeoutMS?: number;',
    ],
    response:
      "{ code?: number; domain?: string; status?: string; styleguide?: { colors?: { accent?: string; background?: string; text?: string; }; components?: { button?: object; card?: object; }; elementSpacing?: { lg?: string; md?: string; sm?: string; xl?: string; xs?: string; }; mode?: 'light' | 'dark'; shadows?: { inner?: string; lg?: string; md?: string; sm?: string; xl?: string; }; typography?: { headings?: object; p?: object; }; }; }",
    markdown:
      "## styleguide\n\n`client.brand.styleguide(directUrl?: string, domain?: string, prioritize?: 'speed' | 'quality', timeoutMS?: number): { code?: number; domain?: string; status?: string; styleguide?: object; }`\n\n**get** `/brand/styleguide`\n\nAutomatically extract comprehensive design system information from a brand's website including colors, typography, spacing, shadows, and UI components. Either 'domain' or 'directUrl' must be provided as a query parameter, but not both.\n\n### Parameters\n\n- `directUrl?: string`\n  A specific URL to fetch the styleguide from directly, bypassing domain resolution (e.g., 'https://example.com/design-system').\n\n- `domain?: string`\n  Domain name to extract styleguide from (e.g., 'example.com', 'google.com'). The domain will be automatically normalized and validated.\n\n- `prioritize?: 'speed' | 'quality'`\n  Optional parameter to prioritize screenshot capture for styleguide extraction. If 'speed', optimizes for faster capture with basic quality. If 'quality', optimizes for higher quality with longer wait times. Defaults to 'quality' if not provided.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ code?: number; domain?: string; status?: string; styleguide?: { colors?: { accent?: string; background?: string; text?: string; }; components?: { button?: object; card?: object; }; elementSpacing?: { lg?: string; md?: string; sm?: string; xl?: string; xs?: string; }; mode?: 'light' | 'dark'; shadows?: { inner?: string; lg?: string; md?: string; sm?: string; xl?: string; }; typography?: { headings?: object; p?: object; }; }; }`\n\n  - `code?: number`\n  - `domain?: string`\n  - `status?: string`\n  - `styleguide?: { colors?: { accent?: string; background?: string; text?: string; }; components?: { button?: { link?: { backgroundColor?: string; borderColor?: string; borderRadius?: string; borderStyle?: string; borderWidth?: string; boxShadow?: string; color?: string; fontSize?: string; fontWeight?: number; padding?: string; textDecoration?: string; }; primary?: { backgroundColor?: string; borderColor?: string; borderRadius?: string; borderStyle?: string; borderWidth?: string; boxShadow?: string; color?: string; fontSize?: string; fontWeight?: number; padding?: string; textDecoration?: string; }; secondary?: { backgroundColor?: string; borderColor?: string; borderRadius?: string; borderStyle?: string; borderWidth?: string; boxShadow?: string; color?: string; fontSize?: string; fontWeight?: number; padding?: string; textDecoration?: string; }; }; card?: { backgroundColor?: string; borderColor?: string; borderRadius?: string; borderStyle?: string; borderWidth?: string; boxShadow?: string; padding?: string; textColor?: string; }; }; elementSpacing?: { lg?: string; md?: string; sm?: string; xl?: string; xs?: string; }; mode?: 'light' | 'dark'; shadows?: { inner?: string; lg?: string; md?: string; sm?: string; xl?: string; }; typography?: { headings?: { h1?: { fontFamily?: string; fontSize?: string; fontWeight?: number; letterSpacing?: string; lineHeight?: string; }; h2?: { fontFamily?: string; fontSize?: string; fontWeight?: number; letterSpacing?: string; lineHeight?: string; }; h3?: { fontFamily?: string; fontSize?: string; fontWeight?: number; letterSpacing?: string; lineHeight?: string; }; h4?: { fontFamily?: string; fontSize?: string; fontWeight?: number; letterSpacing?: string; lineHeight?: string; }; }; p?: { fontFamily?: string; fontSize?: string; fontWeight?: number; letterSpacing?: string; lineHeight?: string; }; }; }`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.styleguide();\n\nconsole.log(response);\n```",
  },
  {
    name: 'web_scrape_html',
    endpoint: '/web/scrape/html',
    httpMethod: 'get',
    summary: 'Scrape raw HTML from a URL',
    description: 'Scrapes the given URL and returns the raw HTML content of the page.',
    stainlessPath: '(resource) brand > (method) web_scrape_html',
    qualified: 'client.brand.webScrapeHTML',
    params: ['url: string;'],
    response: '{ html: string; success: true; url: string; }',
    markdown:
      "## web_scrape_html\n\n`client.brand.webScrapeHTML(url: string): { html: string; success: true; url: string; }`\n\n**get** `/web/scrape/html`\n\nScrapes the given URL and returns the raw HTML content of the page.\n\n### Parameters\n\n- `url: string`\n  Full URL to scrape (must include http:// or https:// protocol)\n\n### Returns\n\n- `{ html: string; success: true; url: string; }`\n\n  - `html: string`\n  - `success: true`\n  - `url: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.webScrapeHTML({ url: 'https://example.com' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'web_scrape_images',
    endpoint: '/web/scrape/images',
    httpMethod: 'get',
    summary: 'Scrape images from a URL',
    description:
      'Scrapes all images from the given URL. Extracts images from img, svg, picture/source, link, and video elements including inline SVGs, base64 data URIs, and standard URLs.',
    stainlessPath: '(resource) brand > (method) web_scrape_images',
    qualified: 'client.brand.webScrapeImages',
    params: ['url: string;'],
    response:
      "{ images: { alt: string; element: 'img' | 'svg' | 'link' | 'source' | 'video' | 'css' | 'object' | 'meta' | 'background'; src: string; type: 'url' | 'html' | 'base64'; }[]; success: true; url: string; }",
    markdown:
      "## web_scrape_images\n\n`client.brand.webScrapeImages(url: string): { images: object[]; success: true; url: string; }`\n\n**get** `/web/scrape/images`\n\nScrapes all images from the given URL. Extracts images from img, svg, picture/source, link, and video elements including inline SVGs, base64 data URIs, and standard URLs.\n\n### Parameters\n\n- `url: string`\n  Full URL to scrape images from (must include http:// or https:// protocol)\n\n### Returns\n\n- `{ images: { alt: string; element: 'img' | 'svg' | 'link' | 'source' | 'video' | 'css' | 'object' | 'meta' | 'background'; src: string; type: 'url' | 'html' | 'base64'; }[]; success: true; url: string; }`\n\n  - `images: { alt: string; element: 'img' | 'svg' | 'link' | 'source' | 'video' | 'css' | 'object' | 'meta' | 'background'; src: string; type: 'url' | 'html' | 'base64'; }[]`\n  - `success: true`\n  - `url: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.webScrapeImages({ url: 'https://example.com' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'web_scrape_md',
    endpoint: '/web/scrape/markdown',
    httpMethod: 'get',
    summary: 'Scrape URL and convert to Markdown',
    description: 'Scrapes the given URL, converts the HTML content to Markdown, and returns the result.',
    stainlessPath: '(resource) brand > (method) web_scrape_md',
    qualified: 'client.brand.webScrapeMd',
    params: [
      'url: string;',
      'includeImages?: boolean;',
      'includeLinks?: boolean;',
      'shortenBase64Images?: boolean;',
      'useMainContentOnly?: boolean;',
    ],
    response: '{ markdown: string; success: true; url: string; }',
    markdown:
      "## web_scrape_md\n\n`client.brand.webScrapeMd(url: string, includeImages?: boolean, includeLinks?: boolean, shortenBase64Images?: boolean, useMainContentOnly?: boolean): { markdown: string; success: true; url: string; }`\n\n**get** `/web/scrape/markdown`\n\nScrapes the given URL, converts the HTML content to Markdown, and returns the result.\n\n### Parameters\n\n- `url: string`\n  Full URL to scrape and convert to markdown (must include http:// or https:// protocol)\n\n- `includeImages?: boolean`\n  Include image references in Markdown output\n\n- `includeLinks?: boolean`\n  Preserve hyperlinks in Markdown output\n\n- `shortenBase64Images?: boolean`\n  Shorten base64-encoded image data in the Markdown output\n\n- `useMainContentOnly?: boolean`\n  Extract only the main content of the page, excluding headers, footers, sidebars, and navigation\n\n### Returns\n\n- `{ markdown: string; success: true; url: string; }`\n\n  - `markdown: string`\n  - `success: true`\n  - `url: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.webScrapeMd({ url: 'https://example.com' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'web_scrape_sitemap',
    endpoint: '/web/scrape/sitemap',
    httpMethod: 'get',
    summary: 'Crawl website sitemap',
    description:
      'Crawls the sitemap of the given domain and returns all discovered page URLs. Supports sitemap index files (recursive), parallel fetching with concurrency control, deduplication, and filters out non-page resources (images, PDFs, etc.).',
    stainlessPath: '(resource) brand > (method) web_scrape_sitemap',
    qualified: 'client.brand.webScrapeSitemap',
    params: ['domain: string;', 'maxLinks?: number;'],
    response:
      '{ domain: string; meta: { errors: number; sitemapsDiscovered: number; sitemapsFetched: number; sitemapsSkipped: number; }; success: true; urls: string[]; }',
    markdown:
      "## web_scrape_sitemap\n\n`client.brand.webScrapeSitemap(domain: string, maxLinks?: number): { domain: string; meta: object; success: true; urls: string[]; }`\n\n**get** `/web/scrape/sitemap`\n\nCrawls the sitemap of the given domain and returns all discovered page URLs. Supports sitemap index files (recursive), parallel fetching with concurrency control, deduplication, and filters out non-page resources (images, PDFs, etc.).\n\n### Parameters\n\n- `domain: string`\n  Domain name to crawl sitemaps for (e.g., 'example.com'). The domain will be automatically normalized and validated.\n\n- `maxLinks?: number`\n  Maximum number of links to return from the sitemap crawl. Defaults to 10,000. Minimum is 1, maximum is 100,000.\n\n### Returns\n\n- `{ domain: string; meta: { errors: number; sitemapsDiscovered: number; sitemapsFetched: number; sitemapsSkipped: number; }; success: true; urls: string[]; }`\n\n  - `domain: string`\n  - `meta: { errors: number; sitemapsDiscovered: number; sitemapsFetched: number; sitemapsSkipped: number; }`\n  - `success: true`\n  - `urls: string[]`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.webScrapeSitemap({ domain: 'domain' });\n\nconsole.log(response);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
