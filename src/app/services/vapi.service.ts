import { Injectable } from '@angular/core';
import Vapi from '@vapi-ai/web';

@Injectable({
  providedIn: 'root',
})
export class VapiService {
  private vapi: Vapi | null = null;

  constructor() {}

  init(apiKey: string) {
    if (!this.vapi) {
      this.vapi = new Vapi(apiKey);
    }
    return this.vapi;
  }

  getClient() {
    if (!this.vapi) {
      throw new Error('Vapi not initialized. Call init(apiKey) first.');
    }
    return this.vapi;
  }
}
