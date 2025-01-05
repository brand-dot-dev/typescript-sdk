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
import type { BrandRetrieveGet200ResponseBrandColorsInner } from './brand-retrieve-get200-response-brand-colors-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { BrandRetrieveGet200ResponseBrandLogosInnerResolution } from './brand-retrieve-get200-response-brand-logos-inner-resolution';

/**
 * 
 * @export
 * @interface BrandRetrieveGet200ResponseBrandLogosInner
 */
export interface BrandRetrieveGet200ResponseBrandLogosInner {
    /**
     * URL of the logo image
     * @type {string}
     * @memberof BrandRetrieveGet200ResponseBrandLogosInner
     */
    'url'?: string;
    /**
     * Mode of the logo, e.g., \'dark\', \'light\'
     * @type {string}
     * @memberof BrandRetrieveGet200ResponseBrandLogosInner
     */
    'mode'?: string;
    /**
     * Group identifier for logos
     * @type {number}
     * @memberof BrandRetrieveGet200ResponseBrandLogosInner
     */
    'group'?: number;
    /**
     * Array of colors in the logo
     * @type {Array<BrandRetrieveGet200ResponseBrandColorsInner>}
     * @memberof BrandRetrieveGet200ResponseBrandLogosInner
     */
    'colors'?: Array<BrandRetrieveGet200ResponseBrandColorsInner>;
    /**
     * 
     * @type {BrandRetrieveGet200ResponseBrandLogosInnerResolution}
     * @memberof BrandRetrieveGet200ResponseBrandLogosInner
     */
    'resolution'?: BrandRetrieveGet200ResponseBrandLogosInnerResolution;
}

