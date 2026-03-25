// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { BrandDev } from '../client';

export abstract class APIResource {
  protected _client: BrandDev;

  constructor(client: BrandDev) {
    this._client = client;
  }
}
