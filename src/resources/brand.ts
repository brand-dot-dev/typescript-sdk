// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Brand extends APIResource {
  /**
   * Retrieve brand data by domain
   */
  retrieve(query: BrandRetrieveParams, options?: RequestOptions): APIPromise<BrandRetrieveResponse> {
    return this._client.get('/brand/retrieve', { query, ...options });
  }

  /**
   * Beta feature: Use AI to extract specific data points from a brand's website. The
   * AI will crawl the website and extract the requested information based on the
   * provided data points.
   */
  aiQuery(body: BrandAIQueryParams, options?: RequestOptions): APIPromise<BrandAIQueryResponse> {
    return this._client.post('/brand/ai/query', { body, ...options });
  }

  /**
   * Endpoint specially designed for platforms that want to identify transaction data
   * by the transaction title.
   */
  identifyFromTransaction(
    query: BrandIdentifyFromTransactionParams,
    options?: RequestOptions,
  ): APIPromise<BrandIdentifyFromTransactionResponse> {
    return this._client.get('/brand/transaction_identifier', { query, ...options });
  }

  /**
   * Signal that you may fetch brand data for a particular domain soon to improve
   * latency. This endpoint does not charge credits and is available for paid
   * customers to optimize future requests. [You must be on a paid plan to use this
   * endpoint]
   */
  prefetch(body: BrandPrefetchParams, options?: RequestOptions): APIPromise<BrandPrefetchResponse> {
    return this._client.post('/brand/prefetch', { body, ...options });
  }

  /**
   * Retrieve brand data by stock ticker (e.g. AAPL, TSLA, etc.)
   */
  retrieveByTicker(
    query: BrandRetrieveByTickerParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveByTickerResponse> {
    return this._client.get('/brand/retrieve-by-ticker', { query, ...options });
  }

  /**
   * Endpoint to classify any brand into a 2022 NAICS code.
   */
  retrieveNaics(
    query: BrandRetrieveNaicsParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveNaicsResponse> {
    return this._client.get('/brand/naics', { query, ...options });
  }

  /**
   * Search brands by query
   */
  search(query: BrandSearchParams, options?: RequestOptions): APIPromise<BrandSearchResponse> {
    return this._client.get('/brand/search', { query, ...options });
  }
}

export interface BrandRetrieveResponse {
  /**
   * Detailed brand information
   */
  brand?: BrandRetrieveResponse.Brand;

  /**
   * HTTP status code
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandRetrieveResponse {
  /**
   * Detailed brand information
   */
  export interface Brand {
    /**
     * Physical address of the brand
     */
    address?: Brand.Address;

    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * A brief description of the brand
     */
    description?: string;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * An array of fonts used by the brand's website
     */
    fonts?: Array<Brand.Font>;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * The brand's slogan
     */
    slogan?: string;

    /**
     * An array of social media links for the brand
     */
    socials?: Array<Brand.Social>;

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    stock?: Brand.Stock;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
    /**
     * Physical address of the brand
     */
    export interface Address {
      /**
       * City name
       */
      city?: string;

      /**
       * Country name
       */
      country?: string;

      /**
       * Country code
       */
      country_code?: string;

      /**
       * Postal or ZIP code
       */
      postal_code?: string;

      /**
       * State or province code
       */
      state_code?: string;

      /**
       * State or province name
       */
      state_province?: string;

      /**
       * Street address
       */
      street?: string;
    }

    export interface Backdrop {
      /**
       * Array of colors in the backdrop image
       */
      colors?: Array<Backdrop.Color>;

      /**
       * Resolution of the backdrop image
       */
      resolution?: Backdrop.Resolution;

      /**
       * URL of the backdrop image
       */
      url?: string;
    }

    export namespace Backdrop {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the backdrop image
       */
      export interface Resolution {
        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Color {
      /**
       * Color in hexadecimal format
       */
      hex?: string;

      /**
       * Name of the color
       */
      name?: string;
    }

    export interface Font {
      /**
       * Name of the font
       */
      name?: string;

      /**
       * Usage of the font, e.g., 'title', 'body', 'button'
       */
      usage?: string;
    }

    export interface Logo {
      /**
       * Array of colors in the logo
       */
      colors?: Array<Logo.Color>;

      /**
       * Group identifier for logos
       */
      group?: number;

      /**
       * Mode of the logo, e.g., 'dark', 'light'
       */
      mode?: string;

      /**
       * Resolution of the logo image
       */
      resolution?: Logo.Resolution;

      /**
       * URL of the logo image
       */
      url?: string;
    }

    export namespace Logo {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the logo image
       */
      export interface Resolution {
        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Social {
      /**
       * Type of social media, e.g., 'facebook', 'twitter'
       */
      type?: string;

      /**
       * URL of the social media page
       */
      url?: string;
    }

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    export interface Stock {
      /**
       * Stock exchange name
       */
      exchange?: string;

      /**
       * Stock ticker symbol
       */
      ticker?: string;
    }
  }
}

export interface BrandAIQueryResponse {
  /**
   * Array of extracted data points
   */
  data_extracted?: Array<BrandAIQueryResponse.DataExtracted>;

  /**
   * The domain that was analyzed
   */
  domain?: string;

  /**
   * List of URLs that were analyzed
   */
  urls_analyzed?: Array<string>;
}

export namespace BrandAIQueryResponse {
  export interface DataExtracted {
    /**
     * Name of the extracted data point
     */
    datapoint_name?: string;

    /**
     * Value of the extracted data point
     */
    datapoint_value?: string | number | boolean | Array<string> | Array<number>;
  }
}

export interface BrandIdentifyFromTransactionResponse {
  /**
   * Detailed brand information
   */
  brand?: BrandIdentifyFromTransactionResponse.Brand;

  /**
   * HTTP status code
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandIdentifyFromTransactionResponse {
  /**
   * Detailed brand information
   */
  export interface Brand {
    /**
     * Physical address of the brand
     */
    address?: Brand.Address;

    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * A brief description of the brand
     */
    description?: string;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * An array of fonts used by the brand's website
     */
    fonts?: Array<Brand.Font>;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * The brand's slogan
     */
    slogan?: string;

    /**
     * An array of social media links for the brand
     */
    socials?: Array<Brand.Social>;

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    stock?: Brand.Stock;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
    /**
     * Physical address of the brand
     */
    export interface Address {
      /**
       * City name
       */
      city?: string;

      /**
       * Country name
       */
      country?: string;

      /**
       * Country code
       */
      country_code?: string;

      /**
       * Postal or ZIP code
       */
      postal_code?: string;

      /**
       * State or province code
       */
      state_code?: string;

      /**
       * State or province name
       */
      state_province?: string;

      /**
       * Street address
       */
      street?: string;
    }

    export interface Backdrop {
      /**
       * Array of colors in the backdrop image
       */
      colors?: Array<Backdrop.Color>;

      /**
       * Resolution of the backdrop image
       */
      resolution?: Backdrop.Resolution;

      /**
       * URL of the backdrop image
       */
      url?: string;
    }

    export namespace Backdrop {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the backdrop image
       */
      export interface Resolution {
        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Color {
      /**
       * Color in hexadecimal format
       */
      hex?: string;

      /**
       * Name of the color
       */
      name?: string;
    }

    export interface Font {
      /**
       * Name of the font
       */
      name?: string;

      /**
       * Usage of the font, e.g., 'title', 'body', 'button'
       */
      usage?: string;
    }

    export interface Logo {
      /**
       * Array of colors in the logo
       */
      colors?: Array<Logo.Color>;

      /**
       * Group identifier for logos
       */
      group?: number;

      /**
       * Mode of the logo, e.g., 'dark', 'light'
       */
      mode?: string;

      /**
       * Resolution of the logo image
       */
      resolution?: Logo.Resolution;

      /**
       * URL of the logo image
       */
      url?: string;
    }

    export namespace Logo {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the logo image
       */
      export interface Resolution {
        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Social {
      /**
       * Type of social media, e.g., 'facebook', 'twitter'
       */
      type?: string;

      /**
       * URL of the social media page
       */
      url?: string;
    }

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    export interface Stock {
      /**
       * Stock exchange name
       */
      exchange?: string;

      /**
       * Stock ticker symbol
       */
      ticker?: string;
    }
  }
}

export interface BrandPrefetchResponse {
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

export interface BrandRetrieveByTickerResponse {
  /**
   * Detailed brand information
   */
  brand?: BrandRetrieveByTickerResponse.Brand;

  /**
   * HTTP status code
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandRetrieveByTickerResponse {
  /**
   * Detailed brand information
   */
  export interface Brand {
    /**
     * Physical address of the brand
     */
    address?: Brand.Address;

    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * A brief description of the brand
     */
    description?: string;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * An array of fonts used by the brand's website
     */
    fonts?: Array<Brand.Font>;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * The brand's slogan
     */
    slogan?: string;

    /**
     * An array of social media links for the brand
     */
    socials?: Array<Brand.Social>;

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    stock?: Brand.Stock;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
    /**
     * Physical address of the brand
     */
    export interface Address {
      /**
       * City name
       */
      city?: string;

      /**
       * Country name
       */
      country?: string;

      /**
       * Country code
       */
      country_code?: string;

      /**
       * Postal or ZIP code
       */
      postal_code?: string;

      /**
       * State or province code
       */
      state_code?: string;

      /**
       * State or province name
       */
      state_province?: string;

      /**
       * Street address
       */
      street?: string;
    }

    export interface Backdrop {
      /**
       * Array of colors in the backdrop image
       */
      colors?: Array<Backdrop.Color>;

      /**
       * Resolution of the backdrop image
       */
      resolution?: Backdrop.Resolution;

      /**
       * URL of the backdrop image
       */
      url?: string;
    }

    export namespace Backdrop {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the backdrop image
       */
      export interface Resolution {
        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Color {
      /**
       * Color in hexadecimal format
       */
      hex?: string;

      /**
       * Name of the color
       */
      name?: string;
    }

    export interface Font {
      /**
       * Name of the font
       */
      name?: string;

      /**
       * Usage of the font, e.g., 'title', 'body', 'button'
       */
      usage?: string;
    }

    export interface Logo {
      /**
       * Array of colors in the logo
       */
      colors?: Array<Logo.Color>;

      /**
       * Group identifier for logos
       */
      group?: number;

      /**
       * Mode of the logo, e.g., 'dark', 'light'
       */
      mode?: string;

      /**
       * Resolution of the logo image
       */
      resolution?: Logo.Resolution;

      /**
       * URL of the logo image
       */
      url?: string;
    }

    export namespace Logo {
      export interface Color {
        /**
         * Color in hexadecimal format
         */
        hex?: string;

        /**
         * Name of the color
         */
        name?: string;
      }

      /**
       * Resolution of the logo image
       */
      export interface Resolution {
        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }
    }

    export interface Social {
      /**
       * Type of social media, e.g., 'facebook', 'twitter'
       */
      type?: string;

      /**
       * URL of the social media page
       */
      url?: string;
    }

    /**
     * Stock market information for this brand (will be null if not a publicly traded
     * company)
     */
    export interface Stock {
      /**
       * Stock exchange name
       */
      exchange?: string;

      /**
       * Stock ticker symbol
       */
      ticker?: string;
    }
  }
}

export interface BrandRetrieveNaicsResponse {
  /**
   * Array of NAICS codes and titles.
   */
  codes?: Array<BrandRetrieveNaicsResponse.Code>;

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

export namespace BrandRetrieveNaicsResponse {
  export interface Code {
    /**
     * NAICS code
     */
    code?: string;

    /**
     * NAICS title
     */
    title?: string;
  }
}

export type BrandSearchResponse = Array<BrandSearchResponse.BrandSearchResponseItem>;

export namespace BrandSearchResponse {
  export interface BrandSearchResponseItem {
    /**
     * Domain name of the brand
     */
    domain?: string;

    /**
     * URL of the brand's logo
     */
    logo?: string;

    /**
     * Title or name of the brand
     */
    title?: string;
  }
}

export interface BrandRetrieveParams {
  /**
   * Domain name to retrieve brand data for
   */
  domain: string;

  /**
   * Optional parameter to force the language of the retrieved brand data
   */
  force_language?:
    | 'albanian'
    | 'arabic'
    | 'azeri'
    | 'bengali'
    | 'bulgarian'
    | 'cebuano'
    | 'croatian'
    | 'czech'
    | 'danish'
    | 'dutch'
    | 'english'
    | 'estonian'
    | 'farsi'
    | 'finnish'
    | 'french'
    | 'german'
    | 'hausa'
    | 'hawaiian'
    | 'hindi'
    | 'hungarian'
    | 'icelandic'
    | 'indonesian'
    | 'italian'
    | 'kazakh'
    | 'kyrgyz'
    | 'latin'
    | 'latvian'
    | 'lithuanian'
    | 'macedonian'
    | 'mongolian'
    | 'nepali'
    | 'norwegian'
    | 'pashto'
    | 'pidgin'
    | 'polish'
    | 'portuguese'
    | 'romanian'
    | 'russian'
    | 'serbian'
    | 'slovak'
    | 'slovene'
    | 'somali'
    | 'spanish'
    | 'swahili'
    | 'swedish'
    | 'tagalog'
    | 'turkish'
    | 'ukrainian'
    | 'urdu'
    | 'uzbek'
    | 'vietnamese'
    | 'welsh';

  /**
   * Optional parameter to optimize the API call for maximum speed. When set to true,
   * the API will skip social media data extraction and external service calls (like
   * Crunchbase) to return results faster with basic brand information only.
   */
  maxSpeed?: boolean;
}

export interface BrandAIQueryParams {
  /**
   * Array of data points to extract from the website
   */
  data_to_extract: Array<BrandAIQueryParams.DataToExtract>;

  /**
   * The domain name to analyze
   */
  domain: string;

  /**
   * Optional object specifying which pages to analyze
   */
  specific_pages?: BrandAIQueryParams.SpecificPages;
}

export namespace BrandAIQueryParams {
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
     * Whether to analyze the privacy policy page
     */
    privacy_policy?: boolean;

    /**
     * Whether to analyze the terms and conditions page
     */
    terms_and_conditions?: boolean;
  }
}

export interface BrandIdentifyFromTransactionParams {
  /**
   * Transaction information to identify the brand
   */
  transaction_info: string;
}

export interface BrandPrefetchParams {
  /**
   * Domain name to prefetch brand data for
   */
  domain: string;
}

export interface BrandRetrieveByTickerParams {
  /**
   * Stock ticker symbol to retrieve brand data for (e.g. AAPL, TSLA, etc.)
   */
  ticker: string;
}

export interface BrandRetrieveNaicsParams {
  /**
   * Brand domain or title to retrieve NAICS code for. If a valid domain is provided
   * in `input`, it will be used for classification, otherwise, we will search for
   * the brand using the provided title.
   */
  input: string;
}

export interface BrandSearchParams {
  /**
   * Query string to search brands
   */
  query: string;
}

export declare namespace Brand {
  export {
    type BrandRetrieveResponse as BrandRetrieveResponse,
    type BrandAIQueryResponse as BrandAIQueryResponse,
    type BrandIdentifyFromTransactionResponse as BrandIdentifyFromTransactionResponse,
    type BrandPrefetchResponse as BrandPrefetchResponse,
    type BrandRetrieveByTickerResponse as BrandRetrieveByTickerResponse,
    type BrandRetrieveNaicsResponse as BrandRetrieveNaicsResponse,
    type BrandSearchResponse as BrandSearchResponse,
    type BrandRetrieveParams as BrandRetrieveParams,
    type BrandAIQueryParams as BrandAIQueryParams,
    type BrandIdentifyFromTransactionParams as BrandIdentifyFromTransactionParams,
    type BrandPrefetchParams as BrandPrefetchParams,
    type BrandRetrieveByTickerParams as BrandRetrieveByTickerParams,
    type BrandRetrieveNaicsParams as BrandRetrieveNaicsParams,
    type BrandSearchParams as BrandSearchParams,
  };
}
