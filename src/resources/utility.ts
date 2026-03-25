// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Utility extends APIResource {
  /**
   * Signal that you may fetch brand data for a particular domain soon to improve
   * latency. This endpoint does not charge credits and is available for paid
   * customers to optimize future requests. [You must be on a paid plan to use this
   * endpoint]
   */
  prefetch(body: UtilityPrefetchParams, options?: RequestOptions): APIPromise<UtilityPrefetchResponse> {
    return this._client.post('/brand/prefetch', { body, ...options });
  }

  /**
   * Signal that you may fetch brand data for a particular domain soon to improve
   * latency. This endpoint accepts an email address, extracts the domain from it,
   * validates that it's not a disposable or free email provider, and queues the
   * domain for prefetching. This endpoint does not charge credits and is available
   * for paid customers to optimize future requests. [You must be on a paid plan to
   * use this endpoint]
   */
  prefetchByEmail(
    body: UtilityPrefetchByEmailParams,
    options?: RequestOptions,
  ): APIPromise<UtilityPrefetchByEmailResponse> {
    return this._client.post('/brand/prefetch-by-email', { body, ...options });
  }
}

export interface UtilityPrefetchResponse {
  /**
   * The domain that was queued for prefetching
   */
  domain?: string;

  /**
   * Success message
   */
  message?: string;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export interface UtilityPrefetchByEmailResponse {
  /**
   * The domain that was queued for prefetching
   */
  domain?: string;

  /**
   * Success message
   */
  message?: string;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export interface UtilityPrefetchParams {
  /**
   * Domain name to prefetch brand data for
   */
  domain: string;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface UtilityPrefetchByEmailParams {
  /**
   * Email address to prefetch brand data for. The domain will be extracted from the
   * email. Free email providers (gmail.com, yahoo.com, etc.) and disposable email
   * addresses are not allowed.
   */
  email: string;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export declare namespace Utility {
  export {
    type UtilityPrefetchResponse as UtilityPrefetchResponse,
    type UtilityPrefetchByEmailResponse as UtilityPrefetchByEmailResponse,
    type UtilityPrefetchParams as UtilityPrefetchParams,
    type UtilityPrefetchByEmailParams as UtilityPrefetchByEmailParams,
  };
}
