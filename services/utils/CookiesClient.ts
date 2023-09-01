import Cookie from "js-cookie";

export class CookiesClient {
  constructor() {}

  get(name = '') {
    return Cookie.get(name);
  }

  remove(name = ''): void {
    Cookie.remove(name);
  }

  set(name = '', value = '', options: object = {}): void {
    Cookie.set(name, value, options);
  }

  removeAuthCookies() {
    this.remove('access_token');
  }

  getAccessToken() {
    return this.get('access_token');
  }
}
