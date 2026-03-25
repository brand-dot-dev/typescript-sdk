// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AI extends APIResource {
  /**
   * Use AI to extract specific data points from a brand's website. The AI will crawl
   * the website and extract the requested information based on the provided data
   * points.
   */
  aiQuery(body: AIAIQueryParams, options?: RequestOptions): APIPromise<AIAIQueryResponse> {
    return this._client.post('/brand/ai/query', { body, ...options });
  }

  /**
   * Beta feature: Given a single URL, determines if it is a product detail page,
   * classifies the platform/product type, and extracts the product information.
   * Supports Amazon, TikTok Shop, Etsy, and generic ecommerce sites.
   */
  extractProduct(
    body: AIExtractProductParams,
    options?: RequestOptions,
  ): APIPromise<AIExtractProductResponse> {
    return this._client.post('/brand/ai/product', { body, ...options });
  }

  /**
   * Beta feature: Extract product information from a brand's website. We will
   * analyze the website and return a list of products with details such as name,
   * description, image, pricing, features, and more.
   */
  extractProducts(
    body: AIExtractProductsParams,
    options?: RequestOptions,
  ): APIPromise<AIExtractProductsResponse> {
    return this._client.post('/brand/ai/products', { body, ...options });
  }
}

export interface AIAIQueryResponse {
  /**
   * Array of extracted data points
   */
  data_extracted?: Array<AIAIQueryResponse.DataExtracted>;

  /**
   * The domain that was analyzed
   */
  domain?: string;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;

  /**
   * List of URLs that were analyzed
   */
  urls_analyzed?: Array<string>;
}

export namespace AIAIQueryResponse {
  export interface DataExtracted {
    /**
     * Name of the extracted data point
     */
    datapoint_name?: string;

    /**
     * Value of the extracted data point. Can be a primitive type, an array of
     * primitives, or an array of objects when datapoint_list_type is 'object'.
     */
    datapoint_value?: string | number | boolean | Array<string> | Array<number> | Array<unknown>;
  }
}

export interface AIExtractProductResponse {
  /**
   * Whether the given URL is a product detail page
   */
  is_product_page?: boolean;

  /**
   * The detected ecommerce platform, or null if not a product page
   */
  platform?: 'amazon' | 'tiktok_shop' | 'etsy' | 'generic' | null;

  /**
   * The extracted product data, or null if not a product page
   */
  product?: AIExtractProductResponse.Product | null;
}

export namespace AIExtractProductResponse {
  /**
   * The extracted product data, or null if not a product page
   */
  export interface Product {
    /**
     * Description of the product
     */
    description: string;

    /**
     * List of product features
     */
    features: Array<string>;

    /**
     * URLs to product images on the page (up to 7)
     */
    images: Array<string>;

    /**
     * Name of the product
     */
    name: string;

    /**
     * Tags associated with the product
     */
    tags: Array<string>;

    /**
     * Target audience for the product (array of strings)
     */
    target_audience: Array<string>;

    /**
     * Billing frequency for the product
     */
    billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based' | null;

    /**
     * Category of the product
     */
    category?: string | null;

    /**
     * Currency code for the price (e.g., USD, EUR)
     */
    currency?: string | null;

    /**
     * URL to the product image
     */
    image_url?: string | null;

    /**
     * Price of the product
     */
    price?: number | null;

    /**
     * Pricing model for the product
     */
    pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom' | null;

    /**
     * URL to the product page
     */
    url?: string | null;
  }
}

export interface AIExtractProductsResponse {
  /**
   * Array of products extracted from the website
   */
  products?: Array<AIExtractProductsResponse.Product>;
}

export namespace AIExtractProductsResponse {
  export interface Product {
    /**
     * Description of the product
     */
    description: string;

    /**
     * List of product features
     */
    features: Array<string>;

    /**
     * URLs to product images on the page (up to 7)
     */
    images: Array<string>;

    /**
     * Name of the product
     */
    name: string;

    /**
     * Tags associated with the product
     */
    tags: Array<string>;

    /**
     * Target audience for the product (array of strings)
     */
    target_audience: Array<string>;

    /**
     * Billing frequency for the product
     */
    billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based' | null;

    /**
     * Category of the product
     */
    category?: string | null;

    /**
     * Currency code for the price (e.g., USD, EUR)
     */
    currency?: string | null;

    /**
     * URL to the product image
     */
    image_url?: string | null;

    /**
     * Price of the product
     */
    price?: number | null;

    /**
     * Pricing model for the product
     */
    pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom' | null;

    /**
     * URL to the product page
     */
    url?: string | null;
  }
}

export interface AIAIQueryParams {
  /**
   * Array of data points to extract from the website
   */
  data_to_extract: Array<AIAIQueryParams.DataToExtract>;

  /**
   * The domain name to analyze
   */
  domain: string;

  /**
   * Optional object specifying which pages to analyze
   */
  specific_pages?: AIAIQueryParams.SpecificPages;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export namespace AIAIQueryParams {
  export interface DataToExtract {
    /**
     * Description of what to extract
     */
    datapoint_description: string;

    /**
     * Example of the expected value
     */
    datapoint_example: string;

    /**
     * Name of the data point to extract
     */
    datapoint_name: string;

    /**
     * Type of the data point
     */
    datapoint_type: 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url';

    /**
     * Type of items in the list when datapoint_type is 'list'. Defaults to 'string'.
     * Use 'object' to extract an array of objects matching a schema.
     */
    datapoint_list_type?: 'string' | 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url' | 'object';

    /**
     * Schema definition for objects when datapoint_list_type is 'object'. Provide a
     * map of field names to their scalar types.
     */
    datapoint_object_schema?: { [key: string]: 'string' | 'number' | 'date' | 'boolean' };
  }

  /**
   * Optional object specifying which pages to analyze
   */
  export interface SpecificPages {
    /**
     * Whether to analyze the about us page
     */
    about_us?: boolean;

    /**
     * Whether to analyze the blog
     */
    blog?: boolean;

    /**
     * Whether to analyze the careers page
     */
    careers?: boolean;

    /**
     * Whether to analyze the contact us page
     */
    contact_us?: boolean;

    /**
     * Whether to analyze the FAQ page
     */
    faq?: boolean;

    /**
     * Whether to analyze the home page
     */
    home_page?: boolean;

    /**
     * Whether to analyze the pricing page
     */
    pricing?: boolean;

    /**
     * Whether to analyze the privacy policy page
     */
    privacy_policy?: boolean;

    /**
     * Whether to analyze the terms and conditions page
     */
    terms_and_conditions?: boolean;
  }
}

export interface AIExtractProductParams {
  /**
   * The product page URL to extract product data from.
   */
  url: string;

  /**
   * Optional timeout in milliseconds for the request. Maximum allowed value is
   * 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export type AIExtractProductsParams = AIExtractProductsParams.ByDomain | AIExtractProductsParams.ByDirectURL;

export declare namespace AIExtractProductsParams {
  export interface ByDomain {
    /**
     * The domain name to analyze.
     */
    domain: string;

    /**
     * Maximum number of products to extract.
     */
    maxProducts?: number;

    /**
     * Optional timeout in milliseconds for the request. Maximum allowed value is
     * 300000ms (5 minutes).
     */
    timeoutMS?: number;
  }

  export interface ByDirectURL {
    /**
     * A specific URL to use directly as the starting point for extraction without
     * domain resolution.
     */
    directUrl: string;

    /**
     * Maximum number of products to extract.
     */
    maxProducts?: number;

    /**
     * Optional timeout in milliseconds for the request. Maximum allowed value is
     * 300000ms (5 minutes).
     */
    timeoutMS?: number;
  }
}

export declare namespace AI {
  export {
    type AIAIQueryResponse as AIAIQueryResponse,
    type AIExtractProductResponse as AIExtractProductResponse,
    type AIExtractProductsResponse as AIExtractProductsResponse,
    type AIAIQueryParams as AIAIQueryParams,
    type AIExtractProductParams as AIExtractProductParams,
    type AIExtractProductsParams as AIExtractProductsParams,
  };
}
