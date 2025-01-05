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



/**
 * Physical address of the brand
 * @export
 * @interface BrandRetrieveGet200ResponseBrandAddress
 */
export interface BrandRetrieveGet200ResponseBrandAddress {
    /**
     * Street address
     * @type {string}
     * @memberof BrandRetrieveGet200ResponseBrandAddress
     */
    'street'?: string;
    /**
     * City name
     * @type {string}
     * @memberof BrandRetrieveGet200ResponseBrandAddress
     */
    'city'?: string;
    /**
     * Country name
     * @type {string}
     * @memberof BrandRetrieveGet200ResponseBrandAddress
     */
    'country'?: string;
    /**
     * Country code
     * @type {string}
     * @memberof BrandRetrieveGet200ResponseBrandAddress
     */
    'country_code'?: string;
    /**
     * State or province name
     * @type {string}
     * @memberof BrandRetrieveGet200ResponseBrandAddress
     */
    'state_province'?: string;
    /**
     * State or province code
     * @type {string}
     * @memberof BrandRetrieveGet200ResponseBrandAddress
     */
    'state_code'?: string;
    /**
     * Postal or ZIP code
     * @type {string}
     * @memberof BrandRetrieveGet200ResponseBrandAddress
     */
    'postal_code'?: string;
    /**
     * Additional address information
     * @type {string}
     * @memberof BrandRetrieveGet200ResponseBrandAddress
     */
    'additional_info'?: string;
}

