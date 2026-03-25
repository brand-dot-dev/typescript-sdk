# Web

Types:

- <code><a href="./src/resources/web.ts">WebScreenshotResponse</a></code>
- <code><a href="./src/resources/web.ts">WebWebScrapeHTMLResponse</a></code>
- <code><a href="./src/resources/web.ts">WebWebScrapeImagesResponse</a></code>
- <code><a href="./src/resources/web.ts">WebWebScrapeMdResponse</a></code>
- <code><a href="./src/resources/web.ts">WebWebScrapeSitemapResponse</a></code>

Methods:

- <code title="get /brand/screenshot">client.web.<a href="./src/resources/web.ts">screenshot</a>({ ...params }) -> WebScreenshotResponse</code>
- <code title="get /web/scrape/html">client.web.<a href="./src/resources/web.ts">webScrapeHTML</a>({ ...params }) -> WebWebScrapeHTMLResponse</code>
- <code title="get /web/scrape/images">client.web.<a href="./src/resources/web.ts">webScrapeImages</a>({ ...params }) -> WebWebScrapeImagesResponse</code>
- <code title="get /web/scrape/markdown">client.web.<a href="./src/resources/web.ts">webScrapeMd</a>({ ...params }) -> WebWebScrapeMdResponse</code>
- <code title="get /web/scrape/sitemap">client.web.<a href="./src/resources/web.ts">webScrapeSitemap</a>({ ...params }) -> WebWebScrapeSitemapResponse</code>

# AI

Types:

- <code><a href="./src/resources/ai.ts">AIAIQueryResponse</a></code>
- <code><a href="./src/resources/ai.ts">AIExtractProductResponse</a></code>
- <code><a href="./src/resources/ai.ts">AIExtractProductsResponse</a></code>

Methods:

- <code title="post /brand/ai/query">client.ai.<a href="./src/resources/ai.ts">aiQuery</a>({ ...params }) -> AIAIQueryResponse</code>
- <code title="post /brand/ai/product">client.ai.<a href="./src/resources/ai.ts">extractProduct</a>({ ...params }) -> AIExtractProductResponse</code>
- <code title="post /brand/ai/products">client.ai.<a href="./src/resources/ai.ts">extractProducts</a>({ ...params }) -> AIExtractProductsResponse</code>

# Style

Types:

- <code><a href="./src/resources/style.ts">StyleExtractFontsResponse</a></code>
- <code><a href="./src/resources/style.ts">StyleExtractStyleguideResponse</a></code>

Methods:

- <code title="get /brand/fonts">client.style.<a href="./src/resources/style.ts">extractFonts</a>({ ...params }) -> StyleExtractFontsResponse</code>
- <code title="get /brand/styleguide">client.style.<a href="./src/resources/style.ts">extractStyleguide</a>({ ...params }) -> StyleExtractStyleguideResponse</code>

# Brand

Types:

- <code><a href="./src/resources/brand.ts">BrandRetrieveResponse</a></code>
- <code><a href="./src/resources/brand.ts">BrandIdentifyFromTransactionResponse</a></code>
- <code><a href="./src/resources/brand.ts">BrandRetrieveByEmailResponse</a></code>
- <code><a href="./src/resources/brand.ts">BrandRetrieveByIsinResponse</a></code>
- <code><a href="./src/resources/brand.ts">BrandRetrieveByNameResponse</a></code>
- <code><a href="./src/resources/brand.ts">BrandRetrieveByTickerResponse</a></code>
- <code><a href="./src/resources/brand.ts">BrandRetrieveSimplifiedResponse</a></code>

Methods:

- <code title="get /brand/retrieve">client.brand.<a href="./src/resources/brand.ts">retrieve</a>({ ...params }) -> BrandRetrieveResponse</code>
- <code title="get /brand/transaction_identifier">client.brand.<a href="./src/resources/brand.ts">identifyFromTransaction</a>({ ...params }) -> BrandIdentifyFromTransactionResponse</code>
- <code title="get /brand/retrieve-by-email">client.brand.<a href="./src/resources/brand.ts">retrieveByEmail</a>({ ...params }) -> BrandRetrieveByEmailResponse</code>
- <code title="get /brand/retrieve-by-isin">client.brand.<a href="./src/resources/brand.ts">retrieveByIsin</a>({ ...params }) -> BrandRetrieveByIsinResponse</code>
- <code title="get /brand/retrieve-by-name">client.brand.<a href="./src/resources/brand.ts">retrieveByName</a>({ ...params }) -> BrandRetrieveByNameResponse</code>
- <code title="get /brand/retrieve-by-ticker">client.brand.<a href="./src/resources/brand.ts">retrieveByTicker</a>({ ...params }) -> BrandRetrieveByTickerResponse</code>
- <code title="get /brand/retrieve-simplified">client.brand.<a href="./src/resources/brand.ts">retrieveSimplified</a>({ ...params }) -> BrandRetrieveSimplifiedResponse</code>

# Industry

Types:

- <code><a href="./src/resources/industry.ts">IndustryRetrieveNaicsResponse</a></code>

Methods:

- <code title="get /brand/naics">client.industry.<a href="./src/resources/industry.ts">retrieveNaics</a>({ ...params }) -> IndustryRetrieveNaicsResponse</code>

# Utility

Types:

- <code><a href="./src/resources/utility.ts">UtilityPrefetchResponse</a></code>
- <code><a href="./src/resources/utility.ts">UtilityPrefetchByEmailResponse</a></code>

Methods:

- <code title="post /brand/prefetch">client.utility.<a href="./src/resources/utility.ts">prefetch</a>({ ...params }) -> UtilityPrefetchResponse</code>
- <code title="post /brand/prefetch-by-email">client.utility.<a href="./src/resources/utility.ts">prefetchByEmail</a>({ ...params }) -> UtilityPrefetchByEmailResponse</code>
