// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Web extends APIResource {
  /**
   * Capture a screenshot of a website. Supports both viewport (standard browser
   * view) and full-page screenshots. Can also screenshot specific page types (login,
   * pricing, etc.) by using heuristics to find the appropriate URL. Returns a URL to
   * the uploaded screenshot image hosted on our CDN.
   */
  screenshot(query: WebScreenshotParams, options?: RequestOptions): APIPromise<WebScreenshotResponse> {
    return this._client.get('/brand/screenshot', { query, ...options });
  }

  /**
   * Scrapes the given URL and returns the raw HTML content of the page. Uses
   * automatic proxy escalation to handle blocked sites.
   */
  webScrapeHTML(
    query: WebWebScrapeHTMLParams,
    options?: RequestOptions,
  ): APIPromise<WebWebScrapeHTMLResponse> {
    return this._client.get('/web/scrape/html', { query, ...options });
  }

  /**
   * Scrapes all images from the given URL. Extracts images from img, svg,
   * picture/source, link, and video elements including inline SVGs, base64 data
   * URIs, and standard URLs.
   */
  webScrapeImages(
    query: WebWebScrapeImagesParams,
    options?: RequestOptions,
  ): APIPromise<WebWebScrapeImagesResponse> {
    return this._client.get('/web/scrape/images', { query, ...options });
  }

  /**
   * Scrapes the given URL, converts the HTML content to GitHub Flavored Markdown
   * (GFM), and returns the result. Uses automatic proxy escalation to handle blocked
   * sites.
   */
  webScrapeMd(query: WebWebScrapeMdParams, options?: RequestOptions): APIPromise<WebWebScrapeMdResponse> {
    return this._client.get('/web/scrape/markdown', { query, ...options });
  }

  /**
   * Crawls the sitemap of the given domain and returns all discovered page URLs.
   * Supports sitemap index files (recursive), parallel fetching with concurrency
   * control, deduplication, and filters out non-page resources (images, PDFs, etc.).
   */
  webScrapeSitemap(
    query: WebWebScrapeSitemapParams,
    options?: RequestOptions,
  ): APIPromise<WebWebScrapeSitemapResponse> {
    return this._client.get('/web/scrape/sitemap', { query, ...options });
  }
}

export interface WebScreenshotResponse {
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

export interface WebWebScrapeHTMLResponse {
  /**
   * Raw HTML content of the page
   */
  html: string;

  /**
   * Indicates success
   */
  success: true;

  /**
   * The URL that was scraped
   */
  url: string;
}

export interface WebWebScrapeImagesResponse {
  /**
   * Array of scraped images
   */
  images: Array<WebWebScrapeImagesResponse.Image>;

  /**
   * Indicates success
   */
  success: true;

  /**
   * The URL that was scraped
   */
  url: string;
}

export namespace WebWebScrapeImagesResponse {
  export interface Image {
    /**
     * Alt text of the image, or null if not present
     */
    alt: string | null;

    /**
     * The HTML element the image was found in
     */
    element: 'img' | 'svg' | 'link' | 'source' | 'video';

    /**
     * The image source - can be a URL, inline HTML (for SVGs), or a base64 data URI
     */
    src: string;

    /**
     * The type/format of the src value
     */
    type: 'url' | 'html' | 'base64';
  }
}

export interface WebWebScrapeMdResponse {
  /**
   * Page content converted to GitHub Flavored Markdown
   */
  markdown: string;

  /**
   * Indicates success
   */
  success: true;

  /**
   * The URL that was scraped
   */
  url: string;
}

export interface WebWebScrapeSitemapResponse {
  /**
   * The normalized domain that was crawled
   */
  domain: string;

  /**
   * Metadata about the sitemap crawl operation
   */
  meta: WebWebScrapeSitemapResponse.Meta;

  /**
   * Indicates success
   */
  success: true;

  /**
   * Array of discovered page URLs from the sitemap (max 500)
   */
  urls: Array<string>;
}

export namespace WebWebScrapeSitemapResponse {
  /**
   * Metadata about the sitemap crawl operation
   */
  export interface Meta {
    /**
     * Number of errors encountered during crawling
     */
    errors: number;

    /**
     * Total number of sitemap files discovered
     */
    sitemapsDiscovered: number;

    /**
     * Number of sitemap files successfully fetched and parsed
     */
    sitemapsFetched: number;

    /**
     * Number of sitemap files skipped (due to errors, timeouts, or limits)
     */
    sitemapsSkipped: number;
  }
}

export interface WebScreenshotParams {
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

  /**
   * Optional parameter to specify which page type to screenshot. If provided, the
   * system will scrape the domain's links and use heuristics to find the most
   * appropriate URL for the specified page type (30 supported languages). If not
   * provided, screenshots the main domain landing page.
   */
  page?: 'login' | 'signup' | 'blog' | 'careers' | 'pricing' | 'terms' | 'privacy' | 'contact';

  /**
   * Optional parameter to prioritize screenshot capture. If 'speed', optimizes for
   * faster capture with basic quality. If 'quality', optimizes for higher quality
   * with longer wait times. Defaults to 'quality' if not provided.
   */
  prioritize?: 'speed' | 'quality';
}

export interface WebWebScrapeHTMLParams {
  /**
   * Full URL to scrape (must include http:// or https:// protocol)
   */
  url: string;
}

export interface WebWebScrapeImagesParams {
  /**
   * Full URL to scrape images from (must include http:// or https:// protocol)
   */
  url: string;
}

export interface WebWebScrapeMdParams {
  /**
   * Full URL to scrape and convert to markdown (must include http:// or https://
   * protocol)
   */
  url: string;

  /**
   * Include image references in Markdown output
   */
  includeImages?: boolean;

  /**
   * Preserve hyperlinks in Markdown output
   */
  includeLinks?: boolean;

  /**
   * Shorten base64-encoded image data in the Markdown output
   */
  shortenBase64Images?: boolean;
}

export interface WebWebScrapeSitemapParams {
  /**
   * Domain name to crawl sitemaps for (e.g., 'example.com'). The domain will be
   * automatically normalized and validated.
   */
  domain: string;
}

export declare namespace Web {
  export {
    type WebScreenshotResponse as WebScreenshotResponse,
    type WebWebScrapeHTMLResponse as WebWebScrapeHTMLResponse,
    type WebWebScrapeImagesResponse as WebWebScrapeImagesResponse,
    type WebWebScrapeMdResponse as WebWebScrapeMdResponse,
    type WebWebScrapeSitemapResponse as WebWebScrapeSitemapResponse,
    type WebScreenshotParams as WebScreenshotParams,
    type WebWebScrapeHTMLParams as WebWebScrapeHTMLParams,
    type WebWebScrapeImagesParams as WebWebScrapeImagesParams,
    type WebWebScrapeMdParams as WebWebScrapeMdParams,
    type WebWebScrapeSitemapParams as WebWebScrapeSitemapParams,
  };
}
