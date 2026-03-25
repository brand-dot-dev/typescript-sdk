// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.web.screenshot',
    fullyQualifiedName: 'web.screenshot',
    httpMethod: 'get',
    httpPath: '/brand/screenshot',
  },
  {
    clientCallName: 'client.web.webScrapeHTML',
    fullyQualifiedName: 'web.webScrapeHTML',
    httpMethod: 'get',
    httpPath: '/web/scrape/html',
  },
  {
    clientCallName: 'client.web.webScrapeImages',
    fullyQualifiedName: 'web.webScrapeImages',
    httpMethod: 'get',
    httpPath: '/web/scrape/images',
  },
  {
    clientCallName: 'client.web.webScrapeMd',
    fullyQualifiedName: 'web.webScrapeMd',
    httpMethod: 'get',
    httpPath: '/web/scrape/markdown',
  },
  {
    clientCallName: 'client.web.webScrapeSitemap',
    fullyQualifiedName: 'web.webScrapeSitemap',
    httpMethod: 'get',
    httpPath: '/web/scrape/sitemap',
  },
  {
    clientCallName: 'client.ai.aiQuery',
    fullyQualifiedName: 'ai.aiQuery',
    httpMethod: 'post',
    httpPath: '/brand/ai/query',
  },
  {
    clientCallName: 'client.ai.extractProduct',
    fullyQualifiedName: 'ai.extractProduct',
    httpMethod: 'post',
    httpPath: '/brand/ai/product',
  },
  {
    clientCallName: 'client.ai.extractProducts',
    fullyQualifiedName: 'ai.extractProducts',
    httpMethod: 'post',
    httpPath: '/brand/ai/products',
  },
  {
    clientCallName: 'client.style.extractFonts',
    fullyQualifiedName: 'style.extractFonts',
    httpMethod: 'get',
    httpPath: '/brand/fonts',
  },
  {
    clientCallName: 'client.style.extractStyleguide',
    fullyQualifiedName: 'style.extractStyleguide',
    httpMethod: 'get',
    httpPath: '/brand/styleguide',
  },
  {
    clientCallName: 'client.brand.retrieve',
    fullyQualifiedName: 'brand.retrieve',
    httpMethod: 'get',
    httpPath: '/brand/retrieve',
  },
  {
    clientCallName: 'client.brand.identifyFromTransaction',
    fullyQualifiedName: 'brand.identifyFromTransaction',
    httpMethod: 'get',
    httpPath: '/brand/transaction_identifier',
  },
  {
    clientCallName: 'client.brand.retrieveByEmail',
    fullyQualifiedName: 'brand.retrieveByEmail',
    httpMethod: 'get',
    httpPath: '/brand/retrieve-by-email',
  },
  {
    clientCallName: 'client.brand.retrieveByIsin',
    fullyQualifiedName: 'brand.retrieveByIsin',
    httpMethod: 'get',
    httpPath: '/brand/retrieve-by-isin',
  },
  {
    clientCallName: 'client.brand.retrieveByName',
    fullyQualifiedName: 'brand.retrieveByName',
    httpMethod: 'get',
    httpPath: '/brand/retrieve-by-name',
  },
  {
    clientCallName: 'client.brand.retrieveByTicker',
    fullyQualifiedName: 'brand.retrieveByTicker',
    httpMethod: 'get',
    httpPath: '/brand/retrieve-by-ticker',
  },
  {
    clientCallName: 'client.brand.retrieveSimplified',
    fullyQualifiedName: 'brand.retrieveSimplified',
    httpMethod: 'get',
    httpPath: '/brand/retrieve-simplified',
  },
  {
    clientCallName: 'client.industry.retrieveNaics',
    fullyQualifiedName: 'industry.retrieveNaics',
    httpMethod: 'get',
    httpPath: '/brand/naics',
  },
  {
    clientCallName: 'client.utility.prefetch',
    fullyQualifiedName: 'utility.prefetch',
    httpMethod: 'post',
    httpPath: '/brand/prefetch',
  },
  {
    clientCallName: 'client.utility.prefetchByEmail',
    fullyQualifiedName: 'utility.prefetchByEmail',
    httpMethod: 'post',
    httpPath: '/brand/prefetch-by-email',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
