// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import retrieve_brand from './brand/retrieve-brand';
import ai_query_brand from './brand/ai-query-brand';
import identify_from_transaction_brand from './brand/identify-from-transaction-brand';
import prefetch_brand from './brand/prefetch-brand';
import retrieve_by_ticker_brand from './brand/retrieve-by-ticker-brand';
import retrieve_naics_brand from './brand/retrieve-naics-brand';
import retrieve_simplified_brand from './brand/retrieve-simplified-brand';
import screenshot_brand from './brand/screenshot-brand';
import search_brand from './brand/search-brand';
import styleguide_brand from './brand/styleguide-brand';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_brand);
addEndpoint(ai_query_brand);
addEndpoint(identify_from_transaction_brand);
addEndpoint(prefetch_brand);
addEndpoint(retrieve_by_ticker_brand);
addEndpoint(retrieve_naics_brand);
addEndpoint(retrieve_simplified_brand);
addEndpoint(screenshot_brand);
addEndpoint(search_brand);
addEndpoint(styleguide_brand);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
