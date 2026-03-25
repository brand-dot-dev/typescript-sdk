// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ContextDev } from '../client';

export abstract class APIResource {
  protected _client: ContextDev;

  constructor(client: ContextDev) {
    this._client = client;
  }
}
