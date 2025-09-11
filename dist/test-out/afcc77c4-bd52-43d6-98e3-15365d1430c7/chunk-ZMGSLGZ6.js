import {
  HttpClient,
  HttpParams,
  init_http
} from "./chunk-4MYL2ZRY.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-WR42GNM3.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/services/api.ts
var Api;
var init_api = __esm({
  "src/app/services/api.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    Api = class Api2 {
      http;
      url = "https://jsonplaceholder.typicode.com/users?_limit=3";
      constructor(http) {
        this.http = http;
      }
      getUser() {
        return this.http.get(this.url);
      }
      getUserById(id) {
        const params = new HttpParams().set("id", id.toString());
        return this.http.get(this.url, { params });
      }
      addUser(user) {
        return this.http.post(this.url, user);
      }
      deleteUser(id) {
        const params = new HttpParams().set("id", id.toString());
        return this.http.get(this.url, { params });
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Api = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], Api);
  }
});

export {
  Api,
  init_api
};
//# sourceMappingURL=chunk-ZMGSLGZ6.js.map
