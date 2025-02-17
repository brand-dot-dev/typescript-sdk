/* tslint:disable */
/* eslint-disable */
/**
 * Brand API
 * API for retrieving and searching brand data
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { BrandNaicsGet200ResponseCodesInner } from './brand-naics-get200-response-codes-inner';

/**
 * 
 * @export
 * @interface BrandNaicsGet200Response
 */
export interface BrandNaicsGet200Response {
    /**
     * Status of the response, e.g., \'ok\'
     * @type {string}
     * @memberof BrandNaicsGet200Response
     */
    'status'?: string;
    /**
     * Domain found for the brand
     * @type {string}
     * @memberof BrandNaicsGet200Response
     */
    'domain'?: string;
    /**
     * Industry classification type, for naics api it will be `naics`
     * @type {string}
     * @memberof BrandNaicsGet200Response
     */
    'type'?: string;
    /**
     * Array of NAICS codes and titles.
     * @type {Array<BrandNaicsGet200ResponseCodesInner>}
     * @memberof BrandNaicsGet200Response
     */
    'codes'?: Array<BrandNaicsGet200ResponseCodesInner>;
}

