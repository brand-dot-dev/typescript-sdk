// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Style extends APIResource {
  /**
   * Extract font information from a brand's website including font families, usage
   * statistics, fallbacks, and element/word counts.
   */
  extractFonts(
    query: StyleExtractFontsParams,
    options?: RequestOptions,
  ): APIPromise<StyleExtractFontsResponse> {
    return this._client.get('/brand/fonts', { query, ...options });
  }

  /**
   * Automatically extract comprehensive design system information from a brand's
   * website including colors, typography, spacing, shadows, and UI components.
   * Either 'domain' or 'directUrl' must be provided as a query parameter, but not
   * both.
   */
  extractStyleguide(
    query: StyleExtractStyleguideParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StyleExtractStyleguideResponse> {
    return this._client.get('/brand/styleguide', { query, ...options });
  }
}

export interface StyleExtractFontsResponse {
  /**
   * HTTP status code, e.g., 200
   */
  code: number;

  /**
   * The normalized domain that was processed
   */
  domain: string;

  /**
   * Array of font usage information
   */
  fonts: Array<StyleExtractFontsResponse.Font>;

  /**
   * Status of the response, e.g., 'ok'
   */
  status: string;
}

export namespace StyleExtractFontsResponse {
  export interface Font {
    /**
     * Array of fallback font families
     */
    fallbacks: Array<string>;

    /**
     * Font family name
     */
    font: string;

    /**
     * Number of elements using this font
     */
    num_elements: number;

    /**
     * Number of words using this font
     */
    num_words: number;

    /**
     * Percentage of elements using this font
     */
    percent_elements: number;

    /**
     * Percentage of words using this font
     */
    percent_words: number;

    /**
     * Array of CSS selectors or element types where this font is used
     */
    uses: Array<string>;
  }
}

export interface StyleExtractStyleguideResponse {
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
  styleguide?: StyleExtractStyleguideResponse.Styleguide;
}

export namespace StyleExtractStyleguideResponse {
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
     * The primary color mode of the website design
     */
    mode?: 'light' | 'dark';

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

export interface StyleExtractFontsParams {
  /**
   * Domain name to extract fonts from (e.g., 'example.com', 'google.com'). The
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

export interface StyleExtractStyleguideParams {
  /**
   * A specific URL to fetch the styleguide from directly, bypassing domain
   * resolution (e.g., 'https://example.com/design-system').
   */
  directUrl?: string;

  /**
   * Domain name to extract styleguide from (e.g., 'example.com', 'google.com'). The
   * domain will be automatically normalized and validated.
   */
  domain?: string;

  /**
   * Optional parameter to prioritize screenshot capture for styleguide extraction.
   * If 'speed', optimizes for faster capture with basic quality. If 'quality',
   * optimizes for higher quality with longer wait times. Defaults to 'quality' if
   * not provided.
   */
  prioritize?: 'speed' | 'quality';

  /**
   * Optional timeout in milliseconds for the request. If the request takes longer
   * than this value, it will be aborted with a 408 status code. Maximum allowed
   * value is 300000ms (5 minutes).
   */
  timeoutMS?: number;
}

export declare namespace Style {
  export {
    type StyleExtractFontsResponse as StyleExtractFontsResponse,
    type StyleExtractStyleguideResponse as StyleExtractStyleguideResponse,
    type StyleExtractFontsParams as StyleExtractFontsParams,
    type StyleExtractStyleguideParams as StyleExtractStyleguideParams,
  };
}
