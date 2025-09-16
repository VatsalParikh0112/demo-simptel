import {
  HttpClient,
  HttpParams,
  init_http
} from "./chunk-NMFPFLPZ.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6,
  inject
} from "./chunk-NG264RT6.js";
import {
  __esm,
  __name
} from "./chunk-SK4CH4QL.js";

// src/app/services/api.ts
var _a, Api;
var init_api = __esm({
  "src/app/services/api.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    Api = (_a = class {
      url = "https://jsonplaceholder.typicode.com/users?_limit=3";
      http = inject(HttpClient);
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
    }, __name(_a, "Api"), _a);
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
//# sourceMappingURL=chunk-7OWPW7FQ.js.map
