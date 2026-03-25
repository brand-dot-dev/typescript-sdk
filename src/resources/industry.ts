// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Industry extends APIResource {
  /**
   * Endpoint to classify any brand into a 2022 NAICS code.
   */
  retrieveNaics(
    query: IndustryRetrieveNaicsParams,
    options?: RequestOptions,
  ): APIPromise<IndustryRetrieveNaicsResponse> {
    return this._client.get('/brand/naics', { query, ...options });
  }
}

export interface IndustryRetrieveNaicsResponse {
  /**
   * Array of NAICS codes and titles.
   */
  codes?: Array<IndustryRetrieveNaicsResponse.Code>;

  /**
   * Domain found for the brand
   */
  domain?: string;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;

  /**
   * Industry classification type, for naics api it will be `naics`
   */
  type?: string;
}

export namespace IndustryRetrieveNaicsResponse {
  export interface Code {
    /**
     * NAICS code
     */
    code: string;

    /**
     * Confidence level for how well this NAICS code matches the company description
     */
    confidence: 'high' | 'medium' | 'low';

    /**
     * NAICS title
     */
    name: string;
  }
}

export interface IndustryRetrieveNaicsParams {
  /**
   * Brand domain or title to retrieve NAICS code for. If a valid domain is provided
   * in `input`, it will be used for classification, otherwise, we will search for
   * the brand using the provided title.
   */
  input: string;

  /**
   * Maximum number of NAICS codes to return. Must be between 1 and 10. Defaults
   * to 5.
   */
  maxResults?: number;

  /**
   * Minimum number of NAICS codes to return. Must be at least 1. Defaults to 1.
   */
  minResults?: number;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export declare namespace Industry {
  export {
    type IndustryRetrieveNaicsResponse as IndustryRetrieveNaicsResponse,
    type IndustryRetrieveNaicsParams as IndustryRetrieveNaicsParams,
  };
}
