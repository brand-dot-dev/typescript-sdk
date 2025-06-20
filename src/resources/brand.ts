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
   * Returns a simplified version of brand data containing only essential
   * information: domain, title, colors, logos, and backdrops. This endpoint is
   * optimized for faster responses and reduced data transfer.
   */
  retrieveSimplified(
    query: BrandRetrieveSimplifiedParams,
    options?: RequestOptions,
  ): APIPromise<BrandRetrieveSimplifiedResponse> {
    return this._client.get('/brand/retrieve-simplified', { query, ...options });
  }

  /**
   * Beta feature: Capture a screenshot of a website. Supports both viewport
   * (standard browser view) and full-page screenshots. Returns a URL to the uploaded
   * screenshot image hosted on our CDN.
   */
  screenshot(query: BrandScreenshotParams, options?: RequestOptions): APIPromise<BrandScreenshotResponse> {
    return this._client.get('/brand/screenshot', { query, ...options });
  }

  /**
   * Search brands by query
   */
  search(query: BrandSearchParams, options?: RequestOptions): APIPromise<BrandSearchResponse> {
    return this._client.get('/brand/search', { query, ...options });
  }

  /**
   * Beta feature: Automatically extract comprehensive design system information from
   * a brand's website including colors, typography, spacing, shadows, and UI
   * components.
   */
  styleguide(query: BrandStyleguideParams, options?: RequestOptions): APIPromise<BrandStyleguideResponse> {
    return this._client.get('/brand/styleguide', { query, ...options });
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

export interface BrandRetrieveSimplifiedResponse {
  /**
   * Simplified brand information
   */
  brand?: BrandRetrieveSimplifiedResponse.Brand;

  /**
   * HTTP status code of the response
   */
  code?: number;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
}

export namespace BrandRetrieveSimplifiedResponse {
  /**
   * Simplified brand information
   */
  export interface Brand {
    /**
     * An array of backdrop images for the brand
     */
    backdrops?: Array<Brand.Backdrop>;

    /**
     * An array of brand colors
     */
    colors?: Array<Brand.Color>;

    /**
     * The domain name of the brand
     */
    domain?: string;

    /**
     * An array of logos associated with the brand
     */
    logos?: Array<Brand.Logo>;

    /**
     * The title or name of the brand
     */
    title?: string;
  }

  export namespace Brand {
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
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

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
       * Type of the logo based on resolution (e.g., 'icon', 'logo', 'banner')
       */
      type?: string;

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
         * Aspect ratio of the image (width/height)
         */
        aspect_ratio?: number;

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
  }
}

export interface BrandScreenshotResponse {
  /**
   * HTTP status code
   */
  code?: number;

  /**
   * The normalized domain that was processed
   */
  domain?: string;

  /**
   * Public URL of the uploaded screenshot image
   */
  screenshot?: string;

  /**
   * Type of screenshot that was captured
   */
  screenshotType?: 'viewport' | 'fullPage';

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;
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

export interface BrandStyleguideResponse {
  /**
   * HTTP status code
   */
  code?: number;

  /**
   * The normalized domain that was processed
   */
  domain?: string;

  /**
   * Status of the response, e.g., 'ok'
   */
  status?: string;

  /**
   * Comprehensive styleguide data extracted from the website
   */
  styleguide?: BrandStyleguideResponse.Styleguide;
}

export namespace BrandStyleguideResponse {
  /**
   * Comprehensive styleguide data extracted from the website
   */
  export interface Styleguide {
    /**
     * Primary colors used on the website
     */
    colors?: Styleguide.Colors;

    /**
     * UI component styles
     */
    components?: Styleguide.Components;

    /**
     * Spacing system used on the website
     */
    elementSpacing?: Styleguide.ElementSpacing;

    /**
     * Shadow styles used on the website
     */
    shadows?: Styleguide.Shadows;

    /**
     * Typography styles used on the website
     */
    typography?: Styleguide.Typography;
  }

  export namespace Styleguide {
    /**
     * Primary colors used on the website
     */
    export interface Colors {
      /**
       * Accent color of the website (hex format)
       */
      accent?: string;

      /**
       * Background color of the website (hex format)
       */
      background?: string;

      /**
       * Text color of the website (hex format)
       */
      text?: string;
    }

    /**
     * UI component styles
     */
    export interface Components {
      /**
       * Button component styles
       */
      button?: Components.Button;

      /**
       * Card component style
       */
      card?: Components.Card;
    }

    export namespace Components {
      /**
       * Button component styles
       */
      export interface Button {
        /**
         * Link button style
         */
        link?: Button.Link;

        /**
         * Primary button style
         */
        primary?: Button.Primary;

        /**
         * Secondary button style
         */
        secondary?: Button.Secondary;
      }

      export namespace Button {
        /**
         * Link button style
         */
        export interface Link {
          backgroundColor?: string;

          borderColor?: string;

          borderRadius?: string;

          borderStyle?: string;

          borderWidth?: string;

          boxShadow?: string;

          color?: string;

          fontSize?: string;

          fontWeight?: number;

          padding?: string;

          textDecoration?: string;
        }

        /**
         * Primary button style
         */
        export interface Primary {
          backgroundColor?: string;

          borderColor?: string;

          borderRadius?: string;

          borderStyle?: string;

          borderWidth?: string;

          boxShadow?: string;

          color?: string;

          fontSize?: string;

          fontWeight?: number;

          padding?: string;

          textDecoration?: string;
        }

        /**
         * Secondary button style
         */
        export interface Secondary {
          backgroundColor?: string;

          borderColor?: string;

          borderRadius?: string;

          borderStyle?: string;

          borderWidth?: string;

          boxShadow?: string;

          color?: string;

          fontSize?: string;

          fontWeight?: number;

          padding?: string;

          textDecoration?: string;
        }
      }

      /**
       * Card component style
       */
      export interface Card {
        backgroundColor?: string;

        borderColor?: string;

        borderRadius?: string;

        borderStyle?: string;

        borderWidth?: string;

        boxShadow?: string;

        padding?: string;

        textColor?: string;
      }
    }

    /**
     * Spacing system used on the website
     */
    export interface ElementSpacing {
      /**
       * Large spacing value
       */
      lg?: string;

      /**
       * Medium spacing value
       */
      md?: string;

      /**
       * Small spacing value
       */
      sm?: string;

      /**
       * Extra large spacing value
       */
      xl?: string;

      /**
       * Extra small spacing value
       */
      xs?: string;
    }

    /**
     * Shadow styles used on the website
     */
    export interface Shadows {
      /**
       * Inner shadow value
       */
      inner?: string;

      /**
       * Large shadow value
       */
      lg?: string;

      /**
       * Medium shadow value
       */
      md?: string;

      /**
       * Small shadow value
       */
      sm?: string;

      /**
       * Extra large shadow value
       */
      xl?: string;
    }

    /**
     * Typography styles used on the website
     */
    export interface Typography {
      /**
       * Heading styles
       */
      headings?: Typography.Headings;

      /**
       * Paragraph text styles
       */
      p?: Typography.P;
    }

    export namespace Typography {
      /**
       * Heading styles
       */
      export interface Headings {
        h1?: Headings.H1;

        h2?: Headings.H2;

        h3?: Headings.H3;

        h4?: Headings.H4;
      }

      export namespace Headings {
        export interface H1 {
          fontFamily?: string;

          fontSize?: string;

          fontWeight?: number;

          letterSpacing?: string;

          lineHeight?: string;
        }

        export interface H2 {
          fontFamily?: string;

          fontSize?: string;

          fontWeight?: number;

          letterSpacing?: string;

          lineHeight?: string;
        }

        export interface H3 {
          fontFamily?: string;

          fontSize?: string;

          fontWeight?: number;

          letterSpacing?: string;

          lineHeight?: string;
        }

        export interface H4 {
          fontFamily?: string;

          fontSize?: string;

          fontWeight?: number;

          letterSpacing?: string;

          lineHeight?: string;
        }
      }

      /**
       * Paragraph text styles
       */
      export interface P {
        fontFamily?: string;

        fontSize?: string;

        fontWeight?: number;

        letterSpacing?: string;

        lineHeight?: string;
      }
    }
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
   * the API will skip time-consuming operations for faster response at the cost of
   * less comprehensive data.
   */
  maxSpeed?: boolean;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
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

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
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

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandPrefetchParams {
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

export interface BrandRetrieveByTickerParams {
  /**
   * Stock ticker symbol to retrieve brand data for (e.g. AAPL, TSLA, etc.)
   */
  ticker: string;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandRetrieveNaicsParams {
  /**
   * Brand domain or title to retrieve NAICS code for. If a valid domain is provided
   * in `input`, it will be used for classification, otherwise, we will search for
   * the brand using the provided title.
   */
  input: string;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandRetrieveSimplifiedParams {
  /**
   * Domain name to retrieve simplified brand data for
   */
  domain: string;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandScreenshotParams {
  /**
   * Domain name to take screenshot of (e.g., 'example.com', 'google.com'). The
   * domain will be automatically normalized and validated.
   */
  domain: string;

  /**
   * Optional parameter to determine screenshot type. If 'true', takes a full page
   * screenshot capturing all content. If 'false' or not provided, takes a viewport
   * screenshot (standard browser view).
   */
  fullScreenshot?: 'true' | 'false';
}

export interface BrandSearchParams {
  /**
   * Query string to search brands
   */
  query: string;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export interface BrandStyleguideParams {
  /**
   * Domain name to extract styleguide from (e.g., 'example.com', 'google.com'). The
   * domain will be automatically normalized and validated.
   */
  domain: string;

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export declare namespace Brand {
  export {
    type BrandRetrieveResponse as BrandRetrieveResponse,
    type BrandAIQueryResponse as BrandAIQueryResponse,
    type BrandIdentifyFromTransactionResponse as BrandIdentifyFromTransactionResponse,
    type BrandPrefetchResponse as BrandPrefetchResponse,
    type BrandRetrieveByTickerResponse as BrandRetrieveByTickerResponse,
    type BrandRetrieveNaicsResponse as BrandRetrieveNaicsResponse,
    type BrandRetrieveSimplifiedResponse as BrandRetrieveSimplifiedResponse,
    type BrandScreenshotResponse as BrandScreenshotResponse,
    type BrandSearchResponse as BrandSearchResponse,
    type BrandStyleguideResponse as BrandStyleguideResponse,
    type BrandRetrieveParams as BrandRetrieveParams,
    type BrandAIQueryParams as BrandAIQueryParams,
    type BrandIdentifyFromTransactionParams as BrandIdentifyFromTransactionParams,
    type BrandPrefetchParams as BrandPrefetchParams,
    type BrandRetrieveByTickerParams as BrandRetrieveByTickerParams,
    type BrandRetrieveNaicsParams as BrandRetrieveNaicsParams,
    type BrandRetrieveSimplifiedParams as BrandRetrieveSimplifiedParams,
    type BrandScreenshotParams as BrandScreenshotParams,
    type BrandSearchParams as BrandSearchParams,
    type BrandStyleguideParams as BrandStyleguideParams,
  };
}
